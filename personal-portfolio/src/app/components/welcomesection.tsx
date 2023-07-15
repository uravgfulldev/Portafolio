import Link from "next/link";

export function Welcome() {
  return (
    <section className="flex flex-row justify-center  bg-white  px-4 py-10 mx-auto first-letter:md:items-center md:h-screen md:p-1 md:gap-10 items-center max-w-4xl  h-full">
      <div className="flex flex-col w-3/5 mr-6 justify-center">
        <h1 className="py-1 pr-1 text-5xl font-bold bg-gradient-to-r from-blue-500 to bg-cyan-500 bg-clip-text text-transparent">
          Hugo Rivera
        </h1>
        <p className="mt-1 text-2xl font-bold">FullStack Developer</p>
        <p className="mt-1 text-md font-light text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse
          ipsum odio ipsa quidem molestiae maxime voluptatum quis labore illum
          dolore neque libero aut.
        </p>
        <div>
          <a href="https://www.linkedin.com/in/hugo-rivera-a09a09227/">
            <img src="" alt="" />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <img
          className="rounded-3xl"
          src="https://picsum.photos/250/250"
          alt=""
        />
      </div>
    </section>
  );
}
