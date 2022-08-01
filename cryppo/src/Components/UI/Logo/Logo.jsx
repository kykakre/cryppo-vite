
import style from '../Header/Header.module.scss'
export default function Logo(props) {
    return (
        <img className={style.logo} src={props.logo} />
    )
}
