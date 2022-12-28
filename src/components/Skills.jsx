import useDarkContext from "../hooks/contextHook";
import {
  bootstrap,
  css,
  firebase,
  git,
  html,
  js,
  php,
  react,
} from "../utilities/image.utility";

import SkillSetCard from "./SkillSetCard";
const Skills = () => {
  const { darkMode } = useDarkContext();
  return (
    <section className={darkMode ? "dark" : ""} id="skills">
      <div className="min-h-screen p-10 flex justify-center items-center flex-col">
        <h1 className="sectionHeaders" data-aos="fade-up">
          <span className="font-mono span">02.</span>Tools And Skills
        </h1>

        <div className="flex flex-col justify-center items-center gap-5 p-5 lg:mx-20">
          <div className="my-5 w-full">
            <p className="sectionParagraphs" data-aos="fade-up">
              This are the languages and tools I have in my kit as a
              webdeveloper. As a web developer, I have a strong understanding of<span className="span">HTML5</span>,{" "},
              <span className="span">CSS3</span> and{" "} <span className="span">Javascript</span>,
              and am proficient in using these technologies to create 
              dynamic, interactive websites and web applications. I am also familiar with 
              various web frameworks and libraries, such as <span className="span">React</span> and {" "}
              <span className="span">Angular</span>, and have
              experience using these to build scalable and maintainable web projects. 
              In addition, I am comfortable working with database technologies, such as {" "}
              <span className="span">MySQL</span> and have experience using this to store and manage data in web applications.
              I am also familiar with version control systems, such as <span className="span">Git</span>, and have 
              experience using these to collaborate with other developers on large-scale projects. 
              These skills, along with my strong problem-solving abilities and attention to detail, enable 
              me to develop high-quality web projects that meet the needs of my clients and users.
              
            </p>
          </div>

          <div className="skillCard-container">
            <SkillSetCard skill="html" img={html} />
            <SkillSetCard skill="css" img={css} />
            <SkillSetCard skill="javascript" img={js} />
            <SkillSetCard skill="bootstrap" img={bootstrap} />
            <SkillSetCard skill="react" img={react} />
            <SkillSetCard skill="firebase" img={firebase} />
            <SkillSetCard skill="php" img={php} />
            <SkillSetCard skill="git" img={git} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
