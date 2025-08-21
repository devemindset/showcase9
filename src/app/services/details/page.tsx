import type { NextPage } from "next";
import Details from "../components/Details";
import ServiceList from "../../../components/ServiceList";
import Contact from "../../../components/Contact";
import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";



const detail = {
    imageSrc : "/products/product1.jpg",
    title : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, laborum!",
    detail : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore similique tenetur maiores? Aut hic blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore similique tenetur maiores? Aut hic blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore similique tenetur maiores? Aut hic blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.
    `
}

const Page: NextPage = () => {
    
  return (
    <>
    <Header />
    <main className="min-h-screen">
                <div className='text-center bg-[var(--background-element)] text-[var(--text-element-2)] py-20'>
                <h3 className=' font-bold text-2xl sm:text-4xl  py-5'>Service Details</h3>
                <p className="text-sm sm:text-xl px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod dolore totam.</p>
                </div>
                <div>
                            <Details  detail={detail.detail} title={detail.title} imageSrc={detail.imageSrc}  />
              
                </div>
    <ServiceList />
    <Contact />
    <ContactForm />            
    </main>
    <Footer />
    </>
  )
}

export default Page