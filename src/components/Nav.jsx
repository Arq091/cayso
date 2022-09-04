import { Link } from "react-router-dom";
import logo from "/logo.svg";

function Nav() {
  return (
    <nav className="flex text-slate-800 sm:bg-gray-400/70 bg-gray-300 sm:backdrop-blur-sm z-40 px-[2rem] items-center justify-between border-b border-gray-400 sticky top-0">
      <Link className="font-bold text-[1.75rem] flex items-center" to="/">
        <img src={logo} alt="" width="60" />
        <span className="text-black text-[2rem]">ayso</span>
      </Link>
      <section className="space-x-5 text-[1.1rem] absolute hidden opacity-0 sm:block sm:relative sm:opacity-100">
        <Link to="/">Home</Link>
        <Link to="/tracks">Tracks</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a
          className="button-primary"
          href="https://caysoproductions.beatstars.com/"
          target="blank"
        >
          Beat Store
        </a>
      </section>
    </nav>
  );
}

export default Nav;
