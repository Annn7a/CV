import React from "react";
import Work from "./Work";

function Profile() {
  return (
    <div>
      <div className="col-span-15 w-11/12 ">
        <h2 className="text-3xl font-semibold">Profile</h2>
        <br />

        <div className="text-justify">
          <p>
            I am currently earning a degree in general economics. I have worked
            for the past few years in the economics field, and now I am looking
            for a change in my career.
          </p>
          <br />
          <p>
            I started learning about the frontend world a few months ago. With
            the{" "}
            <a
              target="_blank"
              href="https://justjavascript.com/"
              className="underline decoration-blue-400 italic font-semibold"
            >
              Just Javascript
            </a>{" "}
            course I had an introduction to the javascript world, then I
            continued studying based on the{" "}
            <a
              target="_blank"
              href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
              className="underline decoration-blue-400 italic font-semibold"
            >
              Codecademy
            </a>{" "}
            curriculum. I'm looking forward to be part of the internship
            program, I'm ready for all the challenges that await me to become a
            successful programmer.
          </p>
        </div>

        <br />

        <h2 className="text-3xl font-semibold">Employment History</h2>
        <br />
        <Work
          name="Accountant, BC Moldindconbank, Chișinău"
          period="September 2019 — May 2021"
          activites={[
            "Processing of applications for card issues",
            "Daily checking of documents and ledgers",
            "Completion of cashing orders and money orders for individuals and companies",
            "Cash withdrawals from current and deposit accounts",
          ]}
        />
        <br />
        <Work
          name="Bank operator, Cedacri International, Chișinău"
          period="April 2019 — August 2019"
          activites={[
            "Bank data processing and analysis",
            "Data insertion and validation",
            "Classification of bank documents",
          ]}
        />
        <br />
        <Work
          name="Content Manager, CODIFUN (Tekwill), Chișinău"
          period="June 2018 — December 2018"
          activites={[
            "Designed an HTML and CSS course for the platform",
            "Prepared advertising materials and analysed offers",
            "Informed the clients about the organisation's activities and upcoming events",
            "Tested the courses and the platform, customer support",
          ]}
        />
        <br />

        <h2 className="text-3xl font-semibold">Education</h2>
        <br />
        <Work
          name="General Economics, ASEM, Chișinău"
          period="September 2019 — now"
          activites={[]}
        />
        <Work
          name="Computer Science, CEEF, Chișinău"
          period="September 2015 — June 2019"
          activites={[]}
        />
        <br />
      </div>
    </div>
  );
}

export default Profile;
