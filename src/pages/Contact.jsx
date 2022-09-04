import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { FaYoutube, FaSoundcloud, FaBandcamp, FaSpotify } from "react-icons/fa";

function Contact() {
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    navigate("/thanks");
  };

  return (
    <section className="flex flex-wrap gap-[3rem]">
      <article>
        <h1 className="title">Contact</h1>
        <form className="flex flex-col" onSubmit={sendEmail}>
          <p>Subject</p>
          <input type="text" placeholder="Subject" name="subject" required />
          <p>Full Name</p>
          <input type="text" placeholder="John Doe" name="name" required />
          <div>
            Email
            <span className="text-red-500 cursor-help group relative">
              *
              <div className="bg-slate-800 w-[16rem] text-white p-2 text-sm rounded pointer-events-none group-hover:opacity-100 transition-all duration-75 ease-linear opacity opacity-0 absolute top-0 left-5 right-5">
                Necessary if you want me to contact you back
              </div>
            </span>
          </div>
          <input type="email" placeholder="example@gmail.com" name="email" />
          <p>Message</p>
          <textarea
            type="text"
            className="p-2 border-gray-400 mb-3 sm:w-[20rem] md:w-[28rem] lg:w-[32rem] flex-shrink border-[1.25px] rounded-md outline-none resize-none box-border"
            placeholder="Message"
            name="message"
            rows="8"
            required
          />
          <input type="submit" className="button-send " value="Send Message" />
        </form>
      </article>
      <article className="flex-shrink-0">
        <h1 className="title">Socials</h1>
        <p className="text-lg">Follow me everywhere!</p>
        <div className="flex space-x-5 mt-2">
          <a href="https://soundcloud.com/caysobruh" target="blank">
            <FaSoundcloud className="icon" />
          </a>
          <a href="https://soundcloud.com/caysobruh" target="blank">
            <FaYoutube className="icon" />
          </a>
          <a
            href="https://open.spotify.com/artist/113gS6lkvJ0HfxTZuPvRLQ?si=NZEvYWBwSASfiORU4ZqzWw&nd=1"
            target="blank"
          >
            <FaSpotify className="icon" />
          </a>
          <a href="https://cayso.bandcamp.com/music" target="blank">
            <FaBandcamp className="icon" />
          </a>
        </div>
      </article>
    </section>
  );
}

export default Contact;
