import a from "./music/1.mp3";
import b from "./music/2.mp3";
import c from "./music/3.mp3";
import d from "./music/4.mp3";
import e from "./music/5.mp3";
import f from "./music/6.mp3";
import g from "./music/7.mp3";
import h from "./music/8.mp3";
import i from "./music/9.mp3";
import j from "./music/10.mp3";
import k from "./music/11.mp3";
import l from "./music/12.mp3";
import m from "./music/13.mp3";
import o from "./music/14.mp3";

import { useRef } from "react";

function TrackItem(props) {
  let n = [a, b, c, d, e, f, g, h, i, j, k, l, m, o];
  const audio = useRef();

  return (
    <div className="shadow-md shadow-black/20 pb-1 mr-3 rounded-lg group overflow-hidden">
      <img
        src={props.trackImg}
        className="w-full object-cover rounded-t-lg max-h-[11rem] object-top"
        alt={props.trackName}
      />
      <h1 className="ml-4 font-medium text-lg mt-3">{props.trackName}</h1>
      <a
        className="ml-4 text-blue-500 text-[0.5rem] underline"
        href={props.link}
        target="blank"
      >
        Listen on {props.platform}
      </a>
      <audio
        src={n[props.trackId]}
        type="audio/mpeg"
        controls
        enabled="true"
      ></audio>
    </div>
  );
}

export default TrackItem;
