import { HeroSection } from "@/components/home/HeroSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { BrandStatement } from "@/components/home/BrandStatement";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { DentalProblemsSection } from "@/components/home/DentalProblemsSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { DoctorSection } from "@/components/home/DoctorSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReviewsSection />
      <BrandStatement />
      <ExpertiseSection />
      <DentalProblemsSection />
      <BeforeAfterSection />
      <DoctorSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
