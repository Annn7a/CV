import React from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import Head from "next/head";

function index() {
  return (
    <div>
      <Head>
        <title>CV — Ana Buzenco</title>
        <meta name="description" content="CV — Ana Buzenco" />
        <meta name="keywords" content="CV, Ana Buzenco" />
        <meta name="author" content="Ana Buzenco" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex" />
      </Head>

      <div className="w-[90%] max-w-4xl m-auto pt-5 min-h-screen">
        <AboutMe />

        <div className="grid grid-cols-20 w-full h-full gap-12 p-0.5 pt-8">
          <Skills />

          <div className="col-span-15 ">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
