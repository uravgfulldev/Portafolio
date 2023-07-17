// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
// import your icons
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import img from "../../../public/person-studying-at-a-desk.svg";
export function ProyectLeft() {
  return (
    <div className="flex flex-row justify-center  px-4 py-6 mx-auto first-letter:md:items-center  md:px-2 md:gap-10 items-center max-w-3xl  h-auto">
      <div className="flex flex-col w-2/5">
        <Image alt="" src={img} style={{ borderRadius: "20px" }} />
      </div>
      <div className="flex flex-col w-3/5 pl-4">
        <div className="flex flex-col gap-3 mt-2 items-end">
          <h3 className="py-1 pr-1 text-2xl font-bold">Proyecto 1</h3>
          <p className="text-right">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
            facere nobis ad ratione dolorum itaque similique excepturi.
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
    </div>
  );
}

export function ProyectRight() {
  return (
    <div className="flex flex-row justify-center  px-4 py-6 mx-auto first-letter:md:items-center  md:px-2 md:gap-10 items-center max-w-3xl  h-auto">
      <div className="flex flex-col w-3/5 pl-4">
        <div className="flex flex-col gap-3 mt-2 items-start">
          <h3 className="py-1 pr-1 text-2xl font-bold">Proyecto 1</h3>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
            facere nobis ad ratione dolorum itaque similique excepturi.
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
      <div className="flex flex-col w-2/5">
        <Image alt="" src={img} style={{ borderRadius: "20px" }} />
      </div>
    </div>
  );
}
