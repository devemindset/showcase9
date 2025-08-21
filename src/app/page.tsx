"use client"

import type { NextPage } from "next"

import BackgroundLoader from "../components/BackgroundLoader"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import TestimonialList from "../components/TestimonialList"





const Page: NextPage = () => {


  return (
    <>
      
      <Header />
      <Hero />
      <TestimonialList />
      <Footer  />
    
      <BackgroundLoader />
    </>
  )
}

export default Page
