import { useContext, useState } from "react";
import {assets} from "../../assets/assets"; 
import './side.css'
import { Context } from "../../context/context";
function Side() {
    const [extend, setExtend] = useState(false)
    const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return (
      <div className="sidebar">
        <div className="top">
            <img onClick={()=>setExtend(prev=>!prev)} src={assets.menu_icon} alt="" /><br />
            <div onClick={()=>newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extend? <p>New Chat</p>: null}
            </div>

            {extend? <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompt.map((item)=>{
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div onClick={()=>loadPrompt(item)} className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>{item.slice(0,18)} ...</p>
                        </div>
                    )
                })}
                
            </div> 
            : null}
            
        </div>

        <div className="buttom">
            <div className="buttom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extend?<p>Help</p> : null}
            </div>

            <div className="buttom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extend? <p>Activity</p> : null}
            </div>

            <div className="buttom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extend? <p>Setings</p> : null}
            </div>

        </div>
      </div>
    )
  }
  
  export default Side