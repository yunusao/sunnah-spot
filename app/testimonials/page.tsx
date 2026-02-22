"use client";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

type Category = "Players" | "Community Leaders" | "Partners";

type Testimonial = {
  id: string;
  category: Category;
  name: string;
  title: string;
  quote: string;
  image?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "gianni",
    category: "Players",
    name: "Gianni Itegeli",
    title: "Queen’s University Men’s Basketball",
    quote:
      "I have known Musa for almost a decade and there’s no doubt that his passion and understanding of the game are truly unique. Training alongside him since the age of 14 and having him as my personal trainer has definitely contributed to the success in my basketball career. As a close friend whose known him from a young age, I’m really proud to see the impact he’s had on his community through the sport of basketball and his commitment to his faith and values.",
    image: "/testimonials/gianni.jpg",
  },
  {
    id: "jacques",
    category: "Players",
    name: "Jacques Lukusa",
    title:
      "Former #2 Ranked Canadian Point Guard • Ottawa Basketball Legend • Former Hill College & Acadia University Men’s Basketball",
    quote:
      "If you’re looking for a club where you can develop your game and your character, definitely sign up with Sunnah Spot. I’ve known Musa for over 6 years and began my relationship with him as his personal basketball trainer during his junior high school season. Through spending many hours with him on and off the court, I’ve witnessed his work ethic, discipline, humility and passion for the game of basketball… As his former trainer, I would recommend him as a coach, trainer and mentor to the next generation of basketball players.",
    image: "/testimonials/jacques.png",
  },
  {
    id: "ankit",
    category: "Players",
    name: "Ankit Choudhary",
    title: "Toronto Metropolitan University Men’s Basketball",
    quote:
      "I want to give a shoutout to Musa for all the work he’s been able to put in with me, helping me elevate my game to a point where I was able to become one of the top ranked players in the country during my high school career playing for Canada TopFlight Academy. Without him, I’m not sure where I would be at. He knows a lot about the game of basketball and is a great individual overall.",
    image: "/testimonials/ankit.jpg",
  },
  {
    id: "dream-canada",
    category: "Partners",
    name: "Dream Canada Basketball",
    title:
      "U13–U19 Made Hoops Circuit • Nike Uplay Canada OTT/MTL Affiliate (EYBL/EYCL/Jr. EYBL)",
    quote:
      "Dream Canada Basketball has worked with Sunnah Spot who is working with predominantly Muslim Student-Athletes and we have appreciated that athletes that have come to our organization have come prepared, excited to learn, and with great values that have been instilled by the coaching done at Sunnah Spot.",
    image: "/testimonials/dream-canada.jpg",
  },
  {
    id: "shaykh-nabil",
    category: "Community Leaders",
    name: "Shaykh Muhammad Nabil",
    title: "Imam at Masjid Darul Iman / Islamic Centre of Markham",
    quote:
      "I am pleased to announce Sunnah Spot in the GTA, an amazing program that will benefit our children and future generations mentally, physically and spiritually!",
    image: "/testimonials/shaykh-nabil.png",
  },
  {
    id: "imam-hidayatullah",
    category: "Community Leaders",
    name: "Imam Hidayatullah",
    title: "GTA Imam",
    quote:
      "Alhamdulillah, Sunnah Spot is extending their competitive basketball program to the GTA. If you want your child to play at a competitive level and train at an elite level within an Islamic environment, then Sunnah Spot is for your child.",
    image: "/testimonials/imam-hidayatullahh.png",
  },
  {
    id: "maaz",
    category: "Community Leaders",
    name: "Molana Maaz Ibrahim",
    title: "Principal of Assalaam Institute of Qur’aan",
    quote:
      "As a principal of a hifz school and academy, I would like to inform all the parents about this program that is different than any other program out there. It is a basketball program taught at a professional level by professionals in basketball and by individuals who are concerned about the deen as well… ready to invest their time, abilities and expertise behind our children to keep them in a safe environment and make them excel professionally in sports as well.",
    image: "/testimonials/maaz.png",
  },
  {
    id: "tla",
    category: "Partners",
    name: "Tarbiyah Learning Academy",
    title: "Endorsement",
    quote:
      "As a principal, I am delighted to endorse the Sunnah Spot basketball program for its exceptional impact on our students. This program goes beyond just teaching basketball skills; it instills values that align with our Islamic principles… fostering a sense of community and brotherhood among participants. I highly recommend this program.",
    image: "/testimonials/tla.png",
  },
  {
    id: "riyad",
    category: "Community Leaders",
    name: "Riyad Khan",
    title: "Principal of Gibraltar Leadership Academy",
    quote:
      "Our middle school boys basketball team really benefitted from the mentorship that Coach Musa provided over the past couple of years… practices were intense and pushed the boys, which improved their overall fitness. Most importantly the boys developed a love for the game of basketball that was inspired by Coach Musa’s own passion for the game.",
    image: "/testimonials/riyad.png",
  },
  {
    id: "boardhouse",
    category: "Partners",
    name: "Yasser Malik",
    title: "BoardHouse Owner",
    quote:
      "It is an absolute pleasure every time the Sunnah Spot basketball program is at our facility, BoardHouse. The expert coaches and dedicated players make it one of the best basketball programs in the region… their focus on Islamic principles of integrity, hard work, teamwork and commitment make the program one of a kind.",
    image: "/testimonials/boardhouse.png",
  },
];

const FILTERS: Array<"All" | Category> = [
  "All",
  "Players",
  "Community Leaders",
  "Partners",
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[rgb(var(--primary))]/10 px-3 py-1 text-xs font-semibold text-[rgb(var(--primary))]">
      {children}
    </span>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm font-semibold transition",
        active
          ? "bg-[rgb(var(--primary))] text-white"
          : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200",
      ].join(" ")}
      type="button"
    >
      {label}
    </button>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="break-inside-avoid mb-6">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
        <div className="h-1 w-full bg-[rgb(var(--primary))]" />
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-[72px] w-[72px] sm:h-[80px] sm:w-[80px] shrink-0 overflow-hidden rounded-2xl border border-gray-300 bg-gray-100 shadow-sm">
              {t.image ? (
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full" />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <div className="font-extrabold text-gray-900">{t.name}</div>
                <Badge>{t.category}</Badge>
              </div>
              <div className="mt-1 text-sm text-gray-600">{t.title}</div>
            </div>

            <Quote className="ml-auto text-[rgb(var(--primary))] opacity-60" size={20} />
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-700">{t.quote}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const active: "All" | Category = "All";
  const list =
    active === "All"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === active);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
        <div className="relative container-x py-16">
          <div className="max-w-3xl">
            <div className="text-sm tracking-widest text-gray-500">TESTIMONIALS</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Trusted by{" "}
              <span className="text-[rgb(var(--primary))]">Players</span>, Families &
              Community Leaders
            </h1>
            <p className="mt-5 text-gray-600 leading-7">
              Real words from athletes, partners, and respected community voices
              who’ve seen the impact of Sunnah Spot firsthand.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registration"
                className="inline-flex justify-center rounded-xl bg-[rgb(var(--primary))] px-6 py-3 font-semibold text-white hover:bg-[rgb(var(--primary-dark))] transition"
              >
                Join Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {FILTERS.map((f) => (
                <FilterChip key={f} label={f} active={f === active} onClick={() => {}} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
          {list.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </section>
    </div>
  );
}