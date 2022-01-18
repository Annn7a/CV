import React from "react";
import Rating from "./Rating";
import Work from "./Work";
import Telegram from "./icons/Telegram";
import Git from "./icons/Git";
import Linkedin from "./icons/Linkedin";

function Skills() {
  return (
    <div className="col-span-5">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <br />
      <Rating value={5} skills="Excellent Communication Skills" />
      <Rating value={5} skills="Multitasking Skills" />
      <Rating value={5} skills="Creativity and presentation" />
      <Rating value={5} skills="Teamwork" />

      <br />

      <h2 className="text-2xl font-semibold">Technical skills</h2>
      <br />
      <Rating value={3} skills="HTML / CSS" />
      <Rating value={1} skills="JavaScript" />
      <Rating value={2} skills="Next.js (React)" />
      <Rating value={2} skills="Git / GitHub" />

      <br />

      <h2 className="text-2xl font-semibold">Languages</h2>
      <br />
      <Rating value={5} skills="Romanian" />
      <Rating value={3} skills="English" />
      <Rating value={4} skills="Russian" />
      <Rating value={2} skills="French" />

      <div className="flex justify-around mt-16 items-center text-5xl">
        <a
          href="https://www.linkedin.com/in/ana-buzenco-4b8199210/"
          target="_blank"
        >
          <Linkedin />
        </a>

        <a href="https://github.com/Annn7a" target="_blank">
          <Git />
        </a>

        <a href="https://t.me/Annn7a" target="_blank">
          <Telegram />
        </a>
      </div>

      <div className="mt-24 text-xs center print:hidden">
        CV 💜 by Ana Buzenco © {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Skills;
