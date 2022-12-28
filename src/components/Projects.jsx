import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import web1 from "../assets/aesthetic.co.png";
import web2 from "../assets/monster-rolodex.png";
import useDarkContext from "../hooks/contextHook";
import {js, html, css } from "../utilities/image.utility";
import CollegeProjects from "./projects/CollegeProjects";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  const { darkMode } = useDarkContext();
  return (
    <section className={darkMode ? "dark" : ""} id="projects">
      <div className="min-h-screen p-10">
        <h1 className="sectionHeaders">
          <span className="span font-mono">03.</span>Some Things I've Built
        </h1>
        <div className="grid grid-cols-1 p-5  gap-3  lg:mx-32 ">
          <div data-aos="fade-down">
            <div className=" mt-16 hidden lg:block ">
              <img
                src={web1}
                alt="aesthetic.co"
                className="object-cover object-center"
              />
            </div>
            {/* Aesthetic.CO card*/}
            <ProjectCard
              img={web1}
              title="Coffee Lovers"
              type="Featured Project"
            >
              <p className="sectionParagraphs">
                Coffee lovers is a blend of 100% soluble coffee and
                delicious flavours, for that break in monotony to your
                everyday cup of coffee. All good things in life are
                relished with a cup of coffee, be it a shortbreak at
                work or conversations with friends. That got us
                thinking; why not add a dash of delicious flavour to
                your favourite cup of joe! And that’s how Coffee lovers was born.
              </p>
              <div className="flex gap-5 my-5 w-full ">
                <a
                  href="https://github.com/Ilyasin6/ilyasin6.github.io/tree/master/Coffeelovers"
                  className="projectLinks"
                >
                  <FaGithub /> Source Code
                </a>
                <a
                  href="https://ilyasin6.github.io/elyas/Coffeelovers/"
                  className="projectLinks "
                >
                  <FaExternalLinkAlt /> Live Project
                </a>
              </div>
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <div>
                  <img src={html} alt="react" className="techStack" />
                </div>
                <div>
                  <img src={css} alt="react" className="techStack" />
                </div>
                <div>
                  <img src={js} alt="react" className="techStack" />
                </div>
              </div>
            </ProjectCard>
          </div>

          {/* Moster Rolodexcard*/}
          <div data-aos="fade-down">
            <div className=" mt-16 hidden lg:block ">
              <img
                src={web2}
                alt="aesthetic.co"
                className="object-cover object-center"
              />
            </div>

            <ProjectCard
              img={web2}
              title="TransAfrica Motors"
              type="Company Website"
            >
              <p className="sectionParagraphs">
                Transafrica Motors Limited, one of the leading auto dealers in
                East Africa region, was founded in 2005. Transafrica Motors
                deals in leading global brands like Chinese First Automobile
                Works (FAW), Japanese TCM (Unicarriers) Forklifts, FAWDE
                Generators, EP Forklifts, SANY machinery and Honda brands.
              </p>
              <div className="flex gap-5 my-5 w-full ">
                <a
                  href="https://transafricamotors.com/"
                  className="projectLinks"
                >
                  <FaGithub /> Source Code
                </a>
                <a
                  href="https://transafricamotors.com/"
                  className="projectLinks "
                >
                  <FaExternalLinkAlt /> Live Project
                </a>
              </div>
            </ProjectCard>
          </div>
        </div>
      </div>
      <CollegeProjects />
    </section>
  );
};

export default Projects;
