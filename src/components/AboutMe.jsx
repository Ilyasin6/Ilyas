import reed from "../assets/me.jpg";
import useDarkContext from "../hooks/contextHook";

import "aos/dist/aos.css";
const AboutMe = () => {
  const { darkMode } = useDarkContext();
  return (
    <section className={darkMode ? "dark" : ""}>
      <div className="min-h-screen p-10" id="about">
        <h1 className="sectionHeaders" data-aos="fade-up">
          <span className="font-mono span">01.</span>About Me
        </h1>

        <div className="grid grid-cols-1 xl:flex justify-evenly gap-5 items-center p-5 lg:mx-20">
          <div
            className="w-3/4 h-3/4 my-5 mx-auto col-span-1 lg:h-2/3 lg:w-2/3 "
            data-aos="fade-up-right"
          >
            <img
              src={reed}
              alt="reed clifford"
              className="object-cover object-center rounded-full  "
            />
          </div>
          <div
            className="cols-span-1 md:mt-10 lg:p-20 "
            data-aos="fade-up-left"
          >
            <p className="sectionParagraphs">
              Hi! my name is <span className="span">Elyas</span> and I enjoy
              creating things that live on the internet. I am a{" "}
              <span className="span">web developer</span> based in Mombasa,
              Kenya, and I'm very passionate and dedicated to my work. As
              graduate of{" "}
              <span className="span">
                Bachelor in Computer Science
              </span>{" "}
              at <span className="span">Osmania University</span>, As a web Developer
              I have a strong understanding of <span className="span">HTML</span> {" "},
             <span className="span">CSS</span> {" "} and <span className="span">JavaScript</span>,
              and am proficient in using these technologies to create dynamic, interactive websites and web
              applications. I am also familiar with various web frameworks and libraries,
              such as <span className="span">React</span> and <span className="span">Angular</span>,
              and have experience using these to build scalable and maintainable web projects.
              I am constantly seeking to improve my skills and stay up-to-date with the latest
              developments in web technologies. I enjoy learning new tools and techniques, and am
              always looking for opportunities to apply my skills in new and challenging projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
