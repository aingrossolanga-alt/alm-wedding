import Navbar from "@/components/Navbar";
import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Story from "@/components/Story";
import Niza from "@/components/Niza";
import WeddingDay from "@/components/WeddingDay";
import Countdown from "@/components/Countdown";
import Locations from "@/components/Locations";
import Travel from "@/components/Travel";
import Info from "@/components/Info";
import RSVP from "@/components/RSVP";
import Gift from "@/components/Gift";
import Gallery from "@/components/Gallery";
import GuestPhotos from "@/components/GuestPhotos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MusicPlayer />

      <Hero />
      <Welcome />
      <Story />
      <Niza />
      <WeddingDay />
      <Countdown />
      <Locations />
      <Travel />
      <Info />
      <RSVP />
      <Gift />
      <Gallery />
      <GuestPhotos />
      <Contact />
      <Footer />
    </>
  );
}