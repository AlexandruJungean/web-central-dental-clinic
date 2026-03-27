import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const TEAM_MEMBERS = [
  { name: "Dr. Brigitta", role: "Ortodonție" },
  { name: "Dr. Andreea", role: "Parodontologie" },
  { name: "Dr. Ionela", role: "Pedodonție" },
  { name: "Dr. Ionuț", role: "Endodonție & Chirurgie" },
];

export function DoctorSection() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <ScrollReveal>
            <ImagePlaceholder
              label="PORTRET EDITORIAL — Dr. Șofineți Ivan Marian. Bust sau 3/4, privire directă în cameră, fundal neutru, iluminare laterală premium."
              aspectRatio="aspect-[3/4]"
              className="w-full"
            />
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Fondator & Medic Stomatolog
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-5xl">
                Dr. Șofineți
                <br />
                Ivan Marian
              </h2>
              <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-gray-text">
                Cu o pasiune profundă pentru excelența în stomatologie, Dr. Șofineți
                a fondat Central Dental Clinic cu o viziune clară: să ofere
                fiecărui pacient tratamente de cea mai înaltă calitate, într-un
                mediu construit pe încredere și atenție la detalii.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-14">
                <p className="mb-6 text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                  Echipa
                </p>
                <div className="flex gap-6">
                  {TEAM_MEMBERS.map((member, i) => (
                    <div key={i} className="text-center">
                      <ImagePlaceholder
                        label={`Portret ${member.name}`}
                        aspectRatio="aspect-square"
                        className="!h-20 !w-20 rounded-full"
                      />
                      <p className="mt-2 text-[13px] font-medium text-foreground">
                        {member.name}
                      </p>
                      <p className="text-[12px] text-gray-subtle">{member.role}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/echipa"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground"
                >
                  Cunoaște echipa
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
