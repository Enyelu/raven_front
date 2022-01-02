import React from 'react'
import "./SlackOnboard.scss"
import SlackImage from "../images/slack.png"

export default function SlackOnboard() {
    return (
        <div className='slack-main-div'>
            <div className='slack-image-div'>
                <img src={SlackImage} className='slack-image' alt='registration image'/>
            </div>
            <form className ="slack-form">
                <h3 className='slack-block-title'>Onboard Slack</h3>
                <div className='slack-input-div'>
                    <input className='slack-input' type='text' placeholder='Employee Email'  required />
                </div>
                <button className='slack-button' type='submit'>Invite</button>
            </form>
    
            <button className="slack-button" type="submit"> Invite</button>
    </div>
  );
}
