import React from 'react'
import './main.scss'
import {Account} from './account'
import {Suggestion} from './suggestion'

export const Main = () => {
  return (
    <div className="container">
        <div className='main__wrapper'>

            <div className="posts">
                Posts
            </div>


            <footer className='footer'>
                <Account 
                    img={""}
                    login={"_dreamophink_"}
                    name={"Vitaliy Sprynskyi"}
                />
                <div className="titles">
                    <h3 className="titles__title">Рекомендації для вас</h3>
                    <a href='/' className="titles__subtitle">Переглянути всіх</a>
                </div>
                <div className="suggestions">
                    <Suggestion 
                        img={""}
                        login={"_dreamophink_"}
                        name={"Vitaliy Sprynskyi"}
                    />
                    <Suggestion 
                        img={"h"}
                        login={"maks_zhyla"}
                        name={"Maksym"}
                    />
                    <Suggestion 
                        img={""}
                        login={"_andriy.roman_"}
                        name={"Andriy Roman"}
                    />
                    <Suggestion 
                        img={""}
                        login={"_dreamophink_"}
                        name={"Vitaliy Sprynskyi"}
                    />
                    <Suggestion 
                        img={"h"}
                        login={"maks_zhyla"}
                        name={"Maksym"}
                    />
                </div>

                <ul className="footer__links">
                    <li className="footer__list__item"><a href="" className="footer__link">Інформація</a></li>
                    <li className="footer__list__item"><a href="" className="footer__link">Довідка</a></li>
                    <li className="footer__list__item"><a href="" className="footer__link">Преса</a></li>
                    <li className="footer__list__item"><a href="" className="footer__link">API</a></li>
                    <li className="footer__list__item"><a href="" className="footer__link">Вакансії</a></li>
                    <li className="footer__list__item"><a href="" className="footer__link">Конфеденційність</a></li>
                    <li className="footer__list__item"><a href="" className="footer__link">Умови</a></li>
                    <li className="footer__list__item"><a href="" className="footer__link">Розташування</a></li>
                    <li className="footer__list__item"><a href="" className="footer__link">Мова</a></li>
                </ul>

                <h3 className="footer__copyright">© Instagram from Meta, 2022</h3>
            </footer>
        </div>
    </div>
  )
}
