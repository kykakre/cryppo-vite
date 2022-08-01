import React from 'react';
import { Link } from 'react-scroll'
import style from './ScrollBtn.module.scss'
const Scrollbtn = (props) => {
    return (
        <Link activeClass={style.active} to={props.to} spy={true} offset={-150} duration={800} smooth={true} className={style.link}>{props.name}</Link>
    );
}

export default Scrollbtn;
