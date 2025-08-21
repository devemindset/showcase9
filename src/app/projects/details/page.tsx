import type { NextPage } from "next";
import Product from "../components/Product";
import ProductList from "../../../components/ProductList";
import Contact from "../../../components/Contact";
import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer";
import BackgroundLoader from "../../../components/BackgroundLoader";
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
                <h3 className=' font-bold text-2xl sm:text-4xl  py-5'>Project Details</h3>
                <p className="text-sm sm:text-xl px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod dolore totam.</p>
                </div>
    <Product title={detail.title} imageSrc={detail.imageSrc} detail={detail.detail}  />
    <ProductList />
    <Contact />
    <ContactForm />  
    </main>
    <Footer />
    <BackgroundLoader />
    </>
  )
}

export default Page