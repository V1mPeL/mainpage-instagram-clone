import React from 'react'
import './main.scss'

export const Account = ({img, login, name}) => {
  return (
    <div className="account">
        <div className="account__info">
            <div className="account__img">
                <img src={img} alt="IMG" />
            </div>
            <div className="account__name">
                <a href='/' className="account__login">{login}</a>
                <h3 className="accout__subscription">{name}</h3>
            </div>
        </div>
        <a href="" className="account__btn">Перейти</a>
    </div>
  )
}
