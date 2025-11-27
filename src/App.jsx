import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/Cta";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Contact from "./components/ContactUs";
import FAQs from "./components/FAQs";
import About from "./components/About";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Pricing />
      <Location
        shopName="RicherPalace Dry Cleaners"
        address="15 Palace Road, Lagos, Nigeria"
        latitude={6.601838} 
        longitude={3.351486}
      />
      <About />
      <Contact />
      <FAQs />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
