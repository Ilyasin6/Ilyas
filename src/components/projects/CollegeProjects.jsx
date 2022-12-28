import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import web5 from "../../assets/ampawn.png";
import web3 from "../../assets/myubestore.png";
import web4 from "../../assets/OJT.png";
import { bootstrap, css, html, js, php } from "../../utilities/image.utility";

import ProjectCard from "../projects/ProjectCard";
const CollegeProjects = () => {
  return (
    <section className="min-h-screen p-10">
      <h1 className="sectionHeaders" data-aos="fade-up">
        Other NoteWorthy Projects
      </h1>
      <h5
        className="text-center text-md  mb-10 font-basetext-neutral-900 dark:text-neutral-200  lg:text-lg "
        data-aos="fade-up"
      >
        (College Projects, Not Hosted Online)
      </h5>

      <div className="grid grid-cols-1 p-5  gap-6   lg:mx-32">
        <div data-aos="fade-down">
          <div className=" mt-16 hidden lg:block ">
            <img
              src={web3}
              alt="aesthetic.co"
              className="object-cover object-center"
            />
          </div>
          <ProjectCard img={web3} title="Meal Finder" type="Practice Project">
            <p className="sectionParagraphs">
              COVID-19 is a highly contagious respiratory illness caused by the novel coronavirus.
              It was first identified in Wuhan, China in December 2019 and has since spread to become a
              global pandemic. Symptoms include fever, cough, and difficulty breathing. The best way 
              to prevent its spread is to practice good hygiene, avoid close contact with sick individuals, 
              and wear a face mask in public. Governments and health organizations are working to 
              develop vaccines and treatments.
            </p>
            <div className="flex gap-5 my-5 w-full ">
              <a
                href="https://github.com/devilyas/devilyas.github.io/tree/main/meal"
                className="projectLinks"
              >
                <FaGithub /> Source Code
              </a>
              <a
                href="https://devilyas.github.io/meal/"
                className="projectLinks"
              >
                <FaExternalLinkAlt /> Live Project
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center lg:justify-start">
              <div>
                <img src={html} alt="html" className="techStack" />
              </div>
              <div>
                <img src={css} alt="css" className="techStack" />
              </div>
              <div>
                <img src={js} alt="javascript" className="techStack" />
              </div>
              <div>
                <img src={bootstrap} alt="bootstrap" className="techStack" />
              </div>
            </div>
          </ProjectCard>
        </div>

        <div data-aos="fade-down">
          <div className=" mt-16 hidden lg:block ">
            <img
              src={web4}
              alt="Ubian-Inquiry"
              className="object-cover object-center"
            />
          </div>
          <ProjectCard
            img={web4}
            title="Covid-19 Tracker"
            type="Covid Project"
          >
            <p className="sectionParagraphs">
              COVID-19 is a highly contagious respiratory illness caused by the novel coronavirus.
              It was first identified in Wuhan, China in December 2019 and has since spread to become a
              global pandemic. Symptoms include fever, cough, and difficulty breathing. The best way 
              to prevent its spread is to practice good hygiene, avoid close contact with sick individuals, 
              and wear a face mask in public. Governments and health organizations are working to 
              develop vaccines and treatments.
            </p>
            <div className="flex gap-5 my-5 w-full ">
              <a
                href="https://covid-data-tracker123.netlify.app"
                className="projectLinks"
              >
                <FaGithub /> Source Code
              </a>
              <a
                href="https://covid-data-tracker123.netlify.app"
                className="projectLinks"
              >
                <FaExternalLinkAlt /> Live Projects
              </a>
            </div>

            <div className="flex gap-2 items-center justify-center lg:justify-start">
              <div>
                <img src={html} alt="html" className="techStack" />
              </div>
              <div>
                <img src={css} alt="css" className="techStack" />
              </div>
              <div>
                <img src={js} alt="javascript" className="techStack" />
              </div>
            </div>
          </ProjectCard>
        </div>
        <div data-aos="fade-down">
          <div className=" mt-16 hidden lg:block ">
            <img
              src={web5}
              alt="AmPawn"
              className="object-cover object-center"
            />
          </div>
          <ProjectCard img={web5} title="Type Game" type="Summer Project">
            <p className="sectionParagraphs">
              AmPawn is a Paws inspired web page that will be ran by the
              Pawtrolers, a private and non-government organization based on the
              local of the Batangas Province.
            </p>
            <div className="flex gap-5 my-5 w-full ">
              <a
                href="https://github.com/devilyas/devilyas.github.io/tree/main/Type"
                className="projectLinks"
              >
                <FaGithub /> Source Code
              </a>
              <a
                href="https://devilyas.github.io/Type/"
                className="projectLinks"
              >
                <FaExternalLinkAlt /> Live Projects
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center lg:justify-start">
              <div>
                <img src={html} alt="html" className="techStack" />
              </div>
              <div>
                <img src={css} alt="css" className="techStack" />
              </div>
              <div>
                <img src={js} alt="javascript" className="techStack" />
              </div>
              <div>
                <img src={php} alt="php" className="techStack" />
              </div>
            </div>
          </ProjectCard>
        </div>
      </div>

      <Link to="/archive">
        <h6 className="underline mt-10 pb-10 text-center text-pink-700 dark:text-cyan-500 ">
          Go to Projects Archive
        </h6>
      </Link>
    </section>
  );
};

export default CollegeProjects;
