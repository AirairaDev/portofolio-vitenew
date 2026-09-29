import {  useState, useEffect } from "react";

const Navbar = () => {
const [active, setActive] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 150) {
          setActive(true);

        } else {
            setActive(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <div className="navbar py-1 flex items-center justify-between sticky top-0 z-50 bg-transparent backdrop-brightness-40 rounded-3xl border border-white ">
      <div className="logo">
        <img src="./assets/Airalogo.png" alt="" className="w-25 p-1 z-50 md:bg-transparent sm:block hidden"/>
      </div>
      <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none ${active ? "top-0 opacity-100" : "-top-0 opacity-0"}`}>
        <li>
            <a href="#beranda" className="sm:text-base">Beranda</a>
        </li>
        <li>
            <a href="#tentang" className="sm:text-base">Tentang</a>
        </li>
        <li>
            <a href="#proyek" className="sm:text-base">Proyek</a>
        </li>
        <li>
            <a href="#kontak" className="sm:text-base">Kontak</a>

        </li>
      </ul>
    </div>
  )
}

export default Navbar
