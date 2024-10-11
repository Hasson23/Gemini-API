import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './main.css'
import { Context } from '../../context/context'

function Main() {

    const {onSent, recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gedi</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-con">
        
        {!showResult
        ?<>
            <div className="greet">
                <p><span>Kusoodhawow,</span> </p>
                <p>Sidee Kuu Caawinkaraa Maanta?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Madaxweyna Soomaalia Haatan Xilka Haayo Yawaaye?</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Sidee uqoraa Buuga Qalinjabinta Jaamacadda ano AI isticmaalaya?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>AI ga Shaqadeena managa cuni doona?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Seetahay Gedi Xaaladaada Kawaran Maanta?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </>
        :<div className='result'>
            <div className="result-title">
                <img src={assets.gemini_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.user_icon} alt="" />
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>
                :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
            </div>
        </div>
    }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Soorid Su`aashaada' />
                    <div>
                        {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> :null}
                    </div>
                </div>
                <p className='bottom-info'>
                    Bot-kaan Weli Waxaa Kusocoto Shaqo Qalado Ayaa Kajiro Afka Soomaaliga Ah <br />&copy; Hassan Abdullah
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
