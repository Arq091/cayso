import { Link } from "react-router-dom";
import img from "/src/homeImg.jpg";

function Home() {
  return (
    <section className="flex gap-10 justify-center">
      <article className="flex flex-col justify-between">
        <div>
          <h1 className="title">Hello, I'm Carson.</h1>
          <p className="max-w-md text-start text-xl">
            I'm an artist based in North Carolina. I like to make cool beats.
            Want a collab?&nbsp;
            <Link to="/contact" className="text-blue-500 hover:underline">
              Contact Me!
            </Link>
            <br />I post new tracks, beats and freestyles at my&nbsp;
            <a
              href="https://www.youtube.com/channel/UCzb5Z1Boq5B6rz323cmXcbA"
              className="text-blue-500 hover:underline"
            >
              Youtube channel.
            </a>
            &nbsp;Swing by and give me a sub (please)
          </p>
        </div>
        <div className="space-y-4 mt-[5rem]">
          <Link to="/tracks" className="home-link group">
            Browse{" "}
            <span className="hidden md:block">&nbsp;some of my&nbsp;</span>{" "}
            tracks
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(59 130 246)"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <Link to="/about" className="home-link group">
            About me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(59 130 246)"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <Link
            to="/contact"
            className="home-link group sm:opacity-0 sm:absolute relative opacity-100"
          >
            Contact me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(59 130 246)"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </article>
      <img
        src={img}
        alt="photo of carson"
        className="shadow-lg shadow-black/50 rounded-2xl hidden md:block h-[33rem] w-[22rem] object-cover object-bottom brightness-150 25 grayscale-[50%]"
      />
    </section>
  );
}

export default Home;
