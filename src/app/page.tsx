import AboutUs from "@/components/landing-page/about-us";
import Footer from "@/components/landing-page/footer";
import HeroBanner from "@/components/landing-page/hero-banner";
import Navbar from "@/components/landing-page/navbar";
import PopularServices from "@/components/landing-page/popular-services";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <PopularServices/>
      <AboutUs/>
      <Footer/>
    </>
  )
}
