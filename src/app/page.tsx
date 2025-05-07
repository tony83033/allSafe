
import { HeroSection } from "@/components/customComponent/HeroSection";
import { SiteHeader } from "@/components/customComponent/siteHeader";
import StatsSection from "@/components/customComponent/Stats";
import  StudentFeedback  from "@/components/customComponent/StudentFeedback";
import ServicesWeDeliver from "@/components/customComponent/Services";
export default function Home() {
  return (

    <>
    <SiteHeader />
    <HeroSection />
    <StatsSection />
    <StudentFeedback />
    <ServicesWeDeliver/>
    </>
  );
}
