import {React, useState} from 'react'
import './main.scss'



export const Suggestion = ({img, login, name}) => {
  const [switchToggled, setSwitchToggled] = useState(false)
  const ToggleSwitch = ()=> {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
  }

  return (
    <div className="suggestion">
        <div className="suggestion__info">
            <div className="suggestion__img">
                <img src={img} alt="IMG" />
            </div>
            <div className="suggestion__name">
                <a href='/' className="suggestion__login">{login}</a>
                <h3 className="suggestion__subscription">{name}</h3>
            </div>
        </div>
        <button onClick={ToggleSwitch} className="suggestion__btn">{switchToggled ? 'Відстежується' : 'Стежити'}</button>
    </div>
  )
}

