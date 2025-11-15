import Content from "@/src/components/Content";
import FAQSection from "@/src/components/FAQSection";
import { Footer } from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Testimonial from "@/src/components/Testimonials";

export default function Home() {
  return (
    <main>
    <Header />
    <Content />
    <Testimonial />
    <FAQSection />
    <Footer />
    </main>
  );
}