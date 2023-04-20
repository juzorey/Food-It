import Anime from 'react-anime';
import anime from "animejs/lib/anime.es.js";
import { useState, useRef, useEffect } from "react";

const ticks = Array.from(Array(8));

const Player = () => {
  const [playing, setPlaying] = useState(false);
  const animation = useRef(null);

  const handleClick = () => {
    playing ? animation.current.pause() : animation.current.play();
    setPlaying(!playing);
  };

  useEffect(() => {
    animation.current = anime.timeline({
      direction: "alternate",
      loop: true,
      autoplay: false,
      easing: "easeInOutSine"
    });

    for (const tick in ticks) {
      animation.current.add(
        {
          targets: `.dots li:nth-child(${Number(tick) + 1})`,
          scaleY: 1.5 + Math.random() * 4,
          duration: 300 + Math.random() * 300
        },
        Math.random() * 600
      );
    }
  }, []);

  return (
    <div className="player">
{/* 
    //   <ul className="dots">
    //     {ticks.map((_, i) => (
    //       <li key={i} />
    //     ))}
    //   </ul>
    //   <button onClick={handleClick}>{playing ? "Pause" : "Play"}</button> */}


      <svg width='200' height="200">
        <circle cx="200"cy="200"r="200"/>
      </svg>
    </div>


  );
};

export default Player;