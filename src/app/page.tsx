import ClientsList from "./sections/ClientsList";
import Community from "./sections/Community";
import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import PixelGrade from "./sections/PixelGrade";
import ClientReviews from "./sections/ClientReviews";
import Achievements from "./sections/Achievements";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ClientsList />
        <Community />
        <PixelGrade />
        {/* <Achievements /> */}
        <ClientReviews />
      </main>
    </>
  );
}
