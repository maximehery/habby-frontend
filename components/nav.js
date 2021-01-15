import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "community", label: "Communauté" },
  { href: "#", label: "Habbo Shopping" },
  { href: "#", label: "Les clés du jeu" },
];

export default function nav() {
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white flex flex-wrap items-center text-lg justify-center">
      {links.map((link) => (
        <Link href={link.href}>
          <a className="mr-5 hover:text-gray-900">{link.label}</a>
        </Link>
      ))}
    </nav>
  );
}
