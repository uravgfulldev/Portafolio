import Link from "next/link";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import img from "../../../public/person-studying-at-a-desk.svg";

export function Welcome() {
  return (
    <section className="w-full bg-gradient-to-b from-white to bg-cyan-500 bg-opacity-5 text-center">
      <div className="flex flex-row justify-center  px-4 py-10 mx-auto first-letter:md:items-center md:h-screen md:px-2 md:gap-10 items-center max-w-4xl  h-full">
        <div className="flex flex-col w-3/5 mr-6 justify-center">
          <h1 className="py-1 pr-1 text-5xl font-bold bg-gradient-to-r from-blue-500 to bg-cyan-500 bg-clip-text text-transparent">
            Hugo Rivera
          </h1>
          <p className="mt-1 text-2xl font-bold">FullStack Developer</p>
          <p className="mt-1 text-md font-light text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            esse ipsum odio ipsa quidem molestiae maxime voluptatum quis labore
            illum dolore neque libero aut.
          </p>
          <div className="flex flex-row gap-4 mt-2 justify-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hugo-rivera-a09a09227/"
            >
              <FontAwesomeIcon style={{ width: "30px" }} icon={faLinkedin} />
            </a>
            <a target="_blank" href="https://github.com/uravgfulldev">
              <FontAwesomeIcon style={{ width: "30px" }} icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
