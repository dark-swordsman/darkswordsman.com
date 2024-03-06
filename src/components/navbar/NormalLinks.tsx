import NavLink from "./NavLink";

export default function NormalLinks() {
  return (
    <ul className="hidden md:flex h-full items-center">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/resume">Resume</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
    </ul>
  );
}