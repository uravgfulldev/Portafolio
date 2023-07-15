import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  { label: "About", route: "/about" },
  { label: "Proyects", route: "/" },
  { label: "Contact", route: "/" },
];

export function Navigation() {
  return (
    <header className="bg-white  items-center px-2 ">
      <nav className="flex flex-col w-full h-12 items-end">
        <ul className="flex flex-row items-center h-full">
          {links.map(({ label, route }) => (
            <li className="flex flex-row h-full hover:bg-zinc-200" key={route}>
              <a className="p-3 text-justify" href={route}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-px bg-gray-200 w-full mx-auto rounded-md"> &nbsp;</div>
    </header>
  );
}
