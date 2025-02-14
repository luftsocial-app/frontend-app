import { Contact, Footer, Navbar } from "@/components";
import React from "react";

export default function ContactScreen() {
  return (
    <div>
      <Navbar />
      <Contact/>
      <div className=" p-10">
      <Footer/>
      </div>
    </div>
  );
}
