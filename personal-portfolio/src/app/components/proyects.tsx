import Link from "next/link";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
// import your icons
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import img from "../../../public/person-studying-at-a-desk.svg";
import { ProyectLeft, ProyectRight } from "./proyect";
export function Proyects() {
  return (
    <section className="w-full text-center p-6">
      <div className="w-full flex flex-col">
        <h2 className="py-1 pr-1 text-xl text-blue-500 font-semibold text-left">
          Proyects
        </h2>
      </div>
      <div className="w-full text-center h-screen p-6">
        <ProyectLeft />
        <ProyectRight />
      </div>
    </section>
  );
}
