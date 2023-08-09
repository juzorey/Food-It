// // import Anime from 'react-anime';
// // import anime from "animejs/lib/anime.es.js";
// import { useState, useRef, useEffect } from "react";


// const Player = () => {



//   // const [playing, setPlaying] = useState(false);

//   // const handleClick = () => {
//   //   playing ? animation.current.pause() : animation.current.play();
//   //   setPlaying(!playing);
//   // };
//   const animation = useRef(null);

//   useEffect(() => {
//     const circle = document.querySelector('.circle');

//     anime({
//       targets: circle,
//       duration: 4000,
//       easing: "easeInOutExpo",
//       strokeDashOffset: 0
//     });


  
//   }, []);


//   return (
//     <div className="player">


//       <svg width='220' height="220">
//         <circle cx="110"cy="110"r="100"/>
//       </svg>
//       <input type="text" class="count"  value='500' readOnly/>
//       <input type="text" class="count2"  value='kcal' readOnly/>


//     </div>


//   );
// };

// export default Player;