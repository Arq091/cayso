import TrackList from "../components/TrackList";
import { useState, useRef } from "react";
import data from "../components/data/data.json";

function Tracks() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section>
      <h1 className="title flex items-baseline gap-2">
        Tracks
        <p className="text-[1.25rem] font-normal">{data.length} Tracks</p>
      </h1>
      <input
        type="text"
        placeholder="Search for a track..."
        className="p-2 w-[18rem] border-gray-400 border-[1.25px] rounded-md outline-none"
        tabIndex="1"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <TrackList term={searchTerm} />
    </section>
  );
}

export default Tracks;
