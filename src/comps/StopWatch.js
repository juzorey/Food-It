import { Time } from "./Time"
import{VscDebugRestart} from"react-icons/vsc"
import {BsFillStopwatchFill} from "react-icons/bs"
export default function StopWatch(){

  return(
    <div>
      <div className="block-2-inner">
                <div className="block-2-a">
                  <div className="fake-btn">Show Time</div>
                  <div className="fake-btn">Short Break</div>
                  <div className="fake-btn">Long Break</div>

                </div>
                  <div className="block-2-a text">{<Time/>}</div>
                <div className="block-2-a">

                  <div className="fake-btn-2"><BsFillStopwatchFill/></div>
                  <div className="fake-btn-2"><VscDebugRestart style={{size:40}}/></div>
                </div>

              </div>
    </div>
  )
}