import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const navLinks = [
  {
    name: "Oil and Gas",
    link: "https://oilandgas.neowec.com",
  },
  {
    name: "Tech",
    link: "https://computer.neowec.com",
  },
  {
    name: "Entertainment",
    link: "/entertainment",
  },
  {
    name: "Logistics",
    link: "https://landp.neowec.com",
  },
];

function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-screen h-[10vh] z-[50]">
        <section className="flex justify-between items-center p-5">
          {/* Logo */}
          <section>
            <img
              src="https://entertainment.neowec.com/images/neowec.png"
              alt="logo"
              className="w-[50px]"
            />
          </section>
          <section className="flex gap-5 items-center">
            {/* NavLinks */}
            <section className="gap-5 items-center hidden md:flex">
              {navLinks.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "font-semibold text-white tracking-wider" : "text-white tracking-wider"
                    }
                  >
                    <p className="text-clash">{item.name}</p>
                  </NavLink>
                );
              })}
            </section>
            {/* CTA */}
            <section className="text-white border px-4 py-2 hidden md:flex">
              <p className="text-clash uppercase">Contact Us</p>
            </section>
          </section>
          {/* Toggle */}
          <section
            className="text-white text-3xl md:hidden"
            onClick={() => setNavIsOpen(!navIsOpen)}
          >
            <GiHamburgerMenu />
          </section>
        </section>
      </nav>
      <section
        className={
          navIsOpen
            ? "absolute w-screen h-screen bg-[#121212] z-[60] top-0 left-0 ease duration-500 p-5"
            : "absolute w-screen h-screen bg-[#121212] z-[60] top-0 left-[-100vw] ease duration-500 p-5"
        }
        onClick={() => setNavIsOpen(false)}
      >
        <section className="gap-5 items-center">
          {navLinks.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "underline text-white" : "text-white"
                }
              >
                <p className="text-clash">{item.name}</p>
              </NavLink>
            );
          })}
        </section>
        <br />
        {/* CTA */}
        <section className="text-white border px-4 py-2">
          <p className="text-clash uppercase">Contact Us</p>
        </section>
      </section>
    </>
  );
}
export default Navbar;
