import Header from "../components/Header";
import { FAQAccordion, Footer } from "../components";
import { faqs } from "../assets/faq";
const FAQ = () => {
  return (
    <div>
      <Header />
      <FAQAccordion data={faqs} />
      <Footer />
    </div>
  );
};

export default FAQ;
