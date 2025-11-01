import Booking from "./_components/Booking/Booking";
import Contact from "./_components/Contact/Contact";
import Destinations from "./_components/Destinations/Destinations";
import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Hero/Hero";
import NavBar from "./_components/NavBar/NavBar";
import Offers from "./_components/Offers/Offers";
import Testimonials from "./_components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Offers />
      <Destinations />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
