import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./User.module.scss";
import MyDrawer from "../Drawer/MyDrawer";
import { UserOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import { userSlice } from "../../../Redux/user-reducer";
import { useDispatch } from "react-redux";
import { UIContext } from "../../Context/UIContext";
const Userblock = (props) => {
    const dispatch = useDispatch();
    const [uiContext, setUiContext] = useContext(UIContext);

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className={style.block}>
            <div className={style.flex}>
                <NavLink
                    onClick={() => setUiContext({ ...uiContext, isLk: true })}
                    to={`${props.routeLk}/lk`}
                    className={({ isActive }) =>
                        isActive
                            ? `${style.link} ${style.active}`
                            : `${style.link}`
                    }
                    end
                >
                    Личный Кабинет
                </NavLink>
                <div
                    className={
                        props.alert.length === 0 ? style.none : style.wrapper
                    }
                >
                    <UserOutlined onClick={showDrawer} className={style.icon} />
                </div>
            </div>

            <MyDrawer
                visible={visible}
                onClose={onClose}
                routeLk={props.routeLk}
                img={props.img}
                user={props.user}
                login={props.login}
                card={props.card}
                alert={props.alert}
                removeAlert={props.removeAlert}
                switchTheme={props.switchTheme}
                theme={props.theme}
            />
        </div>
    );
};

export default Userblock;
