import React, { useContext, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NavItem from "../Nav/NavItem";
import Scrollbtn from "../ScrollBtn/ScrollBtn";
import User from "../User/User";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import { Drawer } from "antd";
import { useWindowSize } from "react-use";
import { UIContext } from "../../Context/UIContext";
const Header = (props) => {
  const [uiContext, setUiContext] = useContext(UIContext);
  const [scroll, setScroll] = useState(false);
  const [burger, setBurger] = useState(false);
  const { width } = useWindowSize();
  const onClose = () => {
    setBurger(!burger);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);
  let linkBtn = props.header.route.btn.map((e) => (
    <Scrollbtn id={e.id} key={e.id} name={e.name} to={e.to} />
  ));
  let scrollBtn = props.header.navData.map((e) => (
    <NavItem id={e.id} key={e.id} name={e.name} href={e.href} linkToLk={true} />
  ));

  if (width > 992) {
    return (
      <header
        className={
          scroll ? `${style.header} ${style.scroll}` : `${style.header}`
        }
      >
        <div className={style.container}>
          <div className={style.block}>
            <Logo logo={props.header.route.logo} />

            <Nav isLk={props.isLk} />
            {props.isEntrance !== false ? (
              <User
                user={props.user}
                isBusiness={props.isBusiness}
                isLogin={props.isLogin}
                isLk={props.isLk}
                card={props.card}
                alert={props.alert}
                removeAlert={props.removeAlert}
                routeLk={props.routeLk}
                switchTheme={props.switchTheme}
                theme={props.theme}
              />
            ) : null}

            <div
              onClick={() => setBurger(!burger)}
              className={
                burger ? `${style.burger}` : `${style.burger} ${style.open}`
              }
            >
              <span></span>
            </div>
          </div>
          {uiContext.isLk ? (
            <div
              className={
                burger ? `${style.item}` : `${style.item} ${style.wrapperOpen}`
              }
            >
              {scrollBtn}
            </div>
          ) : (
            <div className={style.item}>{linkBtn}</div>
          )}
        </div>
      </header>
    );
  } else {
    return (
      <header
        className={
          scroll ? `${style.header} ${style.scroll}` : `${style.header}`
        }
      >
        <div className={style.container}>
          <div className={style.block}>
            <Drawer
              visible={burger}
              closable={false}
              onClose={onClose}
              placement="left"
              bodyStyle={{ padding: "0px" }}
            >
              <div className={style.title}>
                <div className={style.titleText}>Навигация</div>
                <div
                  className={style.titleIcon}
                  onClick={() => {
                    onClose();
                  }}
                ></div>
              </div>
              <div className={style.mobileBlock}>
                {uiContext.isLk ? (
                  <div className={style.item}>{scrollBtn}</div>
                ) : (
                  <div className={style.item}>{linkBtn}</div>
                )}
              </div>
            </Drawer>

            <div
              onClick={() => setBurger(!burger)}
              className={
                burger ? `${style.burger} ${style.open} ` : `${style.burger} `
              }
            >
              <span></span>
            </div>
            <Logo logo={props.header.route.logo} />
            <NavLink
              onClick={() => setUiContext({ ...uiContext, isLk: true })}
              to={`${props.routeLk}/lk`}
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : `${style.link}`
              }
              end
            >
              ЛК
            </NavLink>
            {props.isEntrance !== false ? (
              <User
                user={props.user}
                isLogin={props.isLogin}
                card={props.card}
                alert={props.alert}
                removeAlert={props.removeAlert}
                routeLk={props.routeLk}
                switchTheme={props.switchTheme}
                theme={props.theme}
              />
            ) : null}
          </div>
          <div className={style.scroll}>
            <Nav />
          </div>
          <div className={style.scroll}>
            <div className={style.mobileBlock}>
              {uiContext.isLk ? (
                <div className={style.itemMobile}>{scrollBtn}</div>
              ) : (
                <div className={style.itemMobile}>{linkBtn}</div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
