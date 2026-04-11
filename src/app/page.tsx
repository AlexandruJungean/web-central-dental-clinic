import { HeroSection } from "@/components/home/HeroSection";
import { BrandStatement } from "@/components/home/BrandStatement";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { DentalProblemsSection } from "@/components/home/DentalProblemsSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { DoctorSection } from "@/components/home/DoctorSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandStatement />
      <ExpertiseSection />
      <DentalProblemsSection />
      <BeforeAfterSection />
      <DoctorSection />
      <SocialProofSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
