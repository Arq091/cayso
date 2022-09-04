import data from "./data/data.json";
import TrackItem from "./TrackItem";

//https://img.youtube.com/vi/bRPiDXRUXJI/maxresdefault.jpg

function TrackList(props) {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 15rem))",
    gridGap: "1rem",
    marginBlock: "1rem",
  };

  const term = props.term;

  return (
    <div style={style}>
      {data
        .filter((val) => {
          if (term === "") {
            return val;
          } else if (val.songName.toLowerCase().includes(term.toLowerCase())) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <TrackItem
              trackName={val.songName}
              trackImg={val.imgUrl}
              platform={val.platform}
              link={val.link}
              trackId={val.id}
              key={key}
            />
          );
        })}
    </div>
  );
}

export default TrackList;
