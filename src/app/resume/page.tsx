import type { NextPage } from "next";
import Header from "../../components/Header";
import ResumeList from "../../components/ResumeList";
import Footer from "../../components/Footer";




const Page: NextPage = () => {
    
  return (
    <>
    <Header />
    <ResumeList />
    <Footer />
    </>
  )
}

export default Page