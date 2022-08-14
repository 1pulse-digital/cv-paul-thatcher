import React, { useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import profileImage from "./paul_thatcher.jpg";
import { NavItem } from "../components/nav_item";
import { Button, SecondaryButton } from "../components/button";
import { employmentHistory } from "../data/employmentHistory";
import { educationHistory } from "../data/educationHistory";
import { technicalSkills } from "../data/technicalSkillls";
import { personalSkills } from "../data/personalSkills";
import { SkillsSection } from "../components/skills";
import { HistorySection } from "../components/history";
import { LinkedInIcon } from "../components/icons";
import { ContactDetails } from "../components/contactDetails";

const WelcomeSection = () => {
  return (
    <div className={"font-bold grid lg:gap-3"}>
      <span className={"font-bold text-xl lg:text-2xl"}>Hi there,</span>
      <h1 className={"text-3xl lg:text-5xl"}> I’m Paul Thatcher</h1>
    </div>
  );
};

const IntroSection = () => {
  let [showContactDetails, setShowContactDetails] = useState(false);

  const handleContactDetails = () => {
    setShowContactDetails(true);
  };

  return (
    <div className={"container mx-auto"}>
      <ContactDetails openState={[showContactDetails, setShowContactDetails]} />
      <div
        className={
          "grid lg:grid-cols-3 gap-10 lg:gap-32 mx-auto justify-items-center"
        }
      >
        <div className={"lg:hidden grid justify-items-center pt-10"}>
          <WelcomeSection />
        </div>
        <div className={"grid container max-w-xs"}>
          <div
            className={
              "w-full border-4 lg:border-8 border-black aspect-auto text-"
            }
          >
            <Image
              layout={"responsive"}
              src={profileImage}
              alt={"Profile of Paul Thatcher"}
            />
          </div>
        </div>

        <div className={"lg:col-span-2 grid gap-4 sm:gap-10"}>
          {/* Intro section */}
          <div className={"hidden lg:block"}>
            <WelcomeSection />
          </div>
          <span className={"text-2xl font-light"}>
            Director of EPGT and Co-director of Jerusalema
          </span>

          {/*  Personal details section | Date of birth etc */}
          <div className={"font-light"}>
            <span>Date of Birth: 21/01/1979</span>
            <br />
            <span>Nationality: South African </span>
            <br />
            <span>Address: </span>
            <span className={"font-bold"}>
              Craighall Park, Johannesburg, 2196
            </span>
          </div>

          {/*  Actions buttons "*/}
          <div className={"py-4"}>
            <div className={"flex gap-4 justify-center sm:justify-start"}>
              <Button onClick={handleContactDetails}>Contact Details</Button>
              <SecondaryButton>
                <LinkedInIcon />
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const skillsSectionRef = useRef<null | HTMLDivElement>(null);
  const scrollToSkillsSection = () => {
    skillsSectionRef.current?.scrollIntoView();
  };

  return (
    <div className={"bg-white"}>
      <Head>
        <title>Curriculum Vitae | Paul Thatcher</title>
        <meta name="description" content="An online CV for Paul Someone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"py-4 sm:py-10 grid gap-10"}>
        <div className={"px-4 sm:px-10 lg:px-12 grid gap-10"}>
          {/* Intro section */}
          <IntroSection />

          {/*  Navbar */}
          <div
            className={
              "border-t-1 border border-black border-x-0 flex place-content-around px-10"
            }
          >
            <NavItem onClick={scrollToSkillsSection} title={"My Skills"} />
            <NavItem title={"My Employment"} />
            <NavItem title={"My Education"} />
            <NavItem title={"Download PDF CV"} />
          </div>
        </div>

        {/*  Content section */}
        <div className={"grid gap-10"}>
          {/* Profile intro */}
          <div className={"text-center mx-auto max-w-prose"}>
            <h2 className={"text-2xl mb-5"}>Profile</h2>
            <p>
              I am a very versatile, and passionate person with a solid
              background in Entrepreneurship. I enjoy
              <b> leadership</b>, service roles, <b> archery</b>, gym,
              philosophy <b> reading</b>, geopolitics and current affairs,
              psychological self improvements, general knowledge quizzes,
              military history, astronomy.
            </p>
          </div>

          {/*  [Technical Skills/Personal Skills | Employment/Education] */}
          <div className={"grid grid-cols-3 gap-16"}>
            <SkillsSection
              ref={skillsSectionRef}
              personalSkills={personalSkills}
              technicalSkills={technicalSkills}
            />

            <HistorySection
              employmentHistory={employmentHistory}
              educationHistory={educationHistory}
            />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
