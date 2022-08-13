import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import profileImage from "./paul_thatcher.jpg";
import { NavItem } from "../components/nav_item";
import { Button } from "../components/button";
import { employmentHistory } from "../data/employmentHistory";
import { educationHistory } from "../data/educationHistory";
import { technicalSkills } from "../data/technicalSkillls";
import { personalSkills } from "../data/personalSkills";
import { SkillsSection } from "../components/skills";
import { HistorySection } from "../components/history";

const Home: NextPage = () => {
  return (
    <div className={"bg-white"}>
      <Head>
        <title>Curriculum Vitae | Paul Thatcher</title>
        <meta name="description" content="An online CV for Paul Someone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"px-12 py-10 grid gap-10"}>
        {/* Intro section */}
        <div className={"container mx-auto"}>
          <div className={"grid grid-cols-3 gap-32 mx-auto"}>
            <div className={"w-[354px] overflow-hidden border-8 border-black"}>
              <Image
                layout={"responsive"}
                src={profileImage}
                alt={"Profile of Paul Thatcher"}
              />
            </div>

            <div className={"col-span-2 grid gap-10"}>
              {/* Into section */}
              <div className={"font-bold grid gap-3"}>
                <span className={"font-bold text-2xl"}>Hi there,</span>
                <h1 className={"text-5xl"}> I’m Paul Thatcher</h1>
                <span className={"text-2xl font-light"}>
                  Director of EPGT and Co-director of Jerusalema
                </span>
              </div>

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
              <div>
                <div className={"flex gap-4"}>
                  <Button>Contact Details</Button>
                  <Button>LinkedIn</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Navbar */}
        <div
          className={
            "border-t-1 border border-black border-x-0 flex place-content-around px-10"
          }
        >
          <NavItem title={"My Skills"} />
          <NavItem title={"My Employment"} />
          <NavItem title={"My Education"} />
          <NavItem title={"Download PDF CV"} />
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
