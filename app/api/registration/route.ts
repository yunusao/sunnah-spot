import { NextResponse } from "next/server";
import { google } from "googleapis";

type Payload = {
  playerFirst: string;
  playerLast: string;
  playerAge: string;
  guardianFirst: string;
  guardianLast: string;
  phone: string;
  whatsappOptIn: "Yes" | "No";
  guardianEmail: string;
  programInterest: string;
  skillLevel: string;
  location: string;
  heardFrom: string;
};

function required(value: unknown, name: string) {
  if (!value || String(value).trim().length === 0) {
    throw new Error(`Missing field: ${name}`);
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    required(body.playerFirst, "playerFirst");
    required(body.playerLast, "playerLast");
    required(body.playerAge, "playerAge");
    required(body.guardianFirst, "guardianFirst");
    required(body.guardianLast, "guardianLast");
    required(body.phone, "phone");
    required(body.whatsappOptIn, "whatsappOptIn");
    required(body.guardianEmail, "guardianEmail");
    required(body.programInterest, "programInterest");
    required(body.skillLevel, "skillLevel");
    required(body.location, "location");
    required(body.heardFrom, "heardFrom");

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1!A:A",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            timestamp,
            body.playerFirst,
            body.playerLast,
            body.playerAge,
            body.guardianFirst,
            body.guardianLast,
            body.phone,
            body.whatsappOptIn,
            body.guardianEmail,
            body.programInterest,
            body.skillLevel,
            body.location,
            body.heardFrom,
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 400 }
    );
  }
}