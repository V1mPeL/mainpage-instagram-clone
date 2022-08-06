import React from 'react'
import './main.scss'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineSmile} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {TbBrandTelegram} from 'react-icons/tb'
import {BsBookmark} from 'react-icons/bs'


export const Post = ({userimg,  login, location, imageURL, description, comnum, time}) => {
  return (
    <div className='post'>
        <div className="post__header">
            <div className="profile__info">
                <div className="profile__img">
                    <img className="profile__img__item" src={userimg} alt="IMG" />
                </div>
                <div className="profile__name">
                    <a href='/' className="profile__login">{login}</a>
                    <h3 className="profile__location">{location}</h3>
                </div>
            </div>
            <button className='PostMenu'><BsThreeDots/></button>
        </div>

        <div className="post__image__block">
            <img className='post__image' src={imageURL} alt="Неможливо завантажити фотографію" />
        </div>

        <div className="post__buttons">
            <div className="post__moves">
                <button className="post__button"><AiOutlineHeart/></button>
                <button className="post__button"><FaRegComment/></button>
                <button className="post__button"><TbBrandTelegram/></button>
            </div>
            <button className="post__button"><BsBookmark/></button>
        </div>

        <div className="post__description"> 
            <a href='/' className="profile__login bold">{login}: </a>
            <p className='description__text'>{description}</p>
        </div>

        <div className="post__data">
            <button className='commentAdd'>Переглянути {comnum} коментар</button>
            <h6 className='post__time'>{time} ХВ ТОМУ</h6>
        </div>

        <div className="add__comment">
            <AiOutlineSmile className='smile'/>
            <form action="">
                <input type="text" placeholder='Додайте коментар...'/>
                <button type='submit'>Опублікувати</button>
            </form>
        </div>
    </div>
  )
}


