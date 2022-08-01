import { NavLink } from "react-router-dom";
import style from "../Header/Header.module.scss";
import { useContext } from "react";
import { UIContext } from "../../Context/UIContext";

function NavItem(props) {
    const [uiContext, setUiContext] = useContext(UIContext);
    if (props.linkToLk) {
        return (
            <NavLink
                onClick={() =>
                    setUiContext({
                        ...uiContext,
                        isLk: true,
                        isBusiness: props.isBusiness,
                    })
                }
                state={{ name: props.href }}
                to={props.href}
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link}`
                }
                end
            >
                {props.name}
            </NavLink>
        );
    } else {
        return (
            <NavLink
                onClick={() =>
                    setUiContext({
                        ...uiContext,
                        isLk: false,
                        isBusiness: props.isBusiness,
                    })
                }
                state={{ name: props.href }}
                to={props.href}
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link}`
                }
                end
            >
                {props.name}
            </NavLink>
        );
    }
}

export default NavItem;
