import type { NextPage } from "next";
import Header from "../../components/Header";
import { Contact } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";



const Page: NextPage = () => {
    
    
  return (
    <>
    <Header />
    <Contact />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Page