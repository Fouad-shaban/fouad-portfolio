import React from "react";

const AboutMe = () => {
  return (
    <div>
      <section class="section pt-0" id="about">
        <div class="container text-center">
          <div class="about">
            <div class="about-img-holder">
              <img
                className="about-img w-100 h-80 rounded-xl"
                src="/assets/imgs/aboutme.jpg"
                alt="about Me"
              />
            </div>
            <div class="about-caption">
              <p class="section-subtitle">Who Am I ?</p>
              <h2 class="section-title mb-3 boldonse text-blue-400">About Me</h2>
              <p className="m-4 text-gray-500 text-lg">
              A passionate and detail-oriented Full Stack Developer with a strong academic background in accounting and a deep enthusiasm for creating dynamic and efficient web applications. Proficient in both front-end and back-end technologies, with hands-on experience building responsive user interfaces and scalable server-side systems. Adept at problem-solving and dedicated to producing high-quality solutions using modern development tools and best practices. Continuously seeking to learn new technologies and improve development skills through real-world projects and collaboration.<br/> Wish to work in a dynamic environment that fosters creativity and innovation, where I can contribute my skills and grow as a developer.
              </p>
              <a class=" border-0 rounded-full bg-white text-blue-500 py-2 px-4 rounded mt-4 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-300">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default AboutMe;
