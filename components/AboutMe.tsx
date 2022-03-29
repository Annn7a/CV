import React from "react";

function AboutMe() {
  return (
    <div>
      <div className="grid grid-cols-20 w-full gap-12 p-1 items-center">
        <div className="col-span-5 relative">
          <img
            src="/avatar.jpg"
            className="rounded-full w-full shadow-md z-10 relative"
          />

          <div className="bg-gradient-to-r p-0.5 from-[#6ee7b7c4] via-[#3b83f6c5] to-[#9233eac5] rounded-full absolute inset-0 blur-sm"></div>
        </div>

        <div className="col-span-15">
          <div className="">
            <h2 className="font-bold text-5xl">Ana Buzenco</h2>
            <br />

            <h2 className="text-lg font-semibold">
              22yo from Chișinău, Moldova
            </h2>

            <div className="flex justify-start">
              <h3 className="text-lg font-semibold">
                <a href="tel:+(373) 69 943 595">📞 (+373) 69 943 595</a>
              </h3>

              <h3 className="text-lg font-semibold ml-5">
                <a href="mailto:buzenco.anna@gmail.com">
                  📨 buzenco.anna@gmail.com
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
