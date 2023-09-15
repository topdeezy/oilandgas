import Image from "next/image";
import React from "react";
import Logo from "../assets/neowec.png";
import Dropdown from "../ui/Dropdown";
import Link from "next/link";

function Navbar() {
  const categories = [
    {
      id: 0,
      title: "Oil & Gas",
      href: "/",
    },
    {
      id: 1,
      title: "Computers & Accesories",
      href: "/",
    },
    {
      id: 2,
      title: "Entertainment",
      href: "/",
    },
    {
      id: 3,
      title: "Logistics & Procurement",
      href: "/",
    },
  ];
  const navLinks = [
    {
      id: 0,
      title: "About Us",
      href: "/",
    },
    {
      id: 0,
      title: "Contact",
      href: "/",
    },
  ];

  return (
    <header  className="shadow">
      <section className="bg-primary text-white p-5">

      </section>
      <nav className="flex justify-between items-center p-5">
        {/* Left Side */}
        <section>
          <Image src={Logo} alt="neowec-logo" width={50} height={50} />
        </section>
        {/* Right Side */}
        <section className="flex items-center gap-5">
          <Dropdown title={`Categories`} content={categories} />
          {navLinks?.map((link) => {
            return (
              <Link key={link.id} href={link.href}>
                <p>{link.title}</p>
              </Link>
            );
          })}
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
