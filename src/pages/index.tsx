import Head from "next/head";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import Email2 from "@/components/Email2";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Melquisedec G.</title>
        <link rel="shortcut icon" href="/letter-m-svgrepo-com.svg" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <Email2 />
          {/* <Email /> */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
