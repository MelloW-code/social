import React from 'react'
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <div className={style.img_header}>
                <img src='https://i.pinimg.com/originals/65/f2/70/65f270d7d57999a5f48b8855d4a181b4.png'/>
            </div>
        </header>
    )
}

export default Header