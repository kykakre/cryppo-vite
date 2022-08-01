import React from "react";
import style from "./Security.module.scss";
import Btn from "./Btn";
import { NavLink } from "react-router-dom";
import Connect from "./Connect";
import Address from "./Address";
import { Tabs, Tab, TabList } from "react-tabs";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
export default function Security(props) {
    return (
        <div className="main container">
            <SubtitleLk subtitle="Безопасность" />
            <div className={style.container}>
                <div className={style.blockMin}>
                    <div className={style.content}>
                        <div className={style.contentItem}>
                            <div className={style.title}>
                                Двухфакторная авторизация
                            </div>
                            <div className={style.text}>
                                Двухфакторная авторизация позволяет значительно
                                повысить защиту вашего счёта.{" "}
                                <NavLink to="">Как она работает?</NavLink>
                            </div>
                            <Btn />
                        </div>
                        <div className={style.contentItem}>
                            <div className={style.text}>
                                Подключите желаемый тип двухфакторной
                                авторизации
                            </div>
                            <Tabs>
                                <TabList className={style.list}>
                                    <Tab
                                        className={style.tab}
                                        selectedClassName={style.activeTab}
                                    >
                                        <div>Google Auth</div>
                                    </Tab>
                                    <Tab
                                        className={style.tab}
                                        selectedClassName={style.activeTab}
                                    >
                                        <div>Telegram</div>
                                    </Tab>
                                    <Tab
                                        className={style.tab}
                                        selectedClassName={style.activeTab}
                                    >
                                        <div>SMS</div>
                                    </Tab>
                                </TabList>
                            </Tabs>
                            <div className={style.info}>
                                <div className={style.infoIcon}></div>
                                <div className={style.infoText}>
                                    Двухфакторная авторизация по СМС не
                                    рекомендуется, т.к. доставка кодов зависит
                                    от работы мобильных сетей.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.title}>Платежный пароль</div>
                        <div className={style.text}>
                            Запрашивать пароль при каждом переводе / платеже
                        </div>
                        <Btn />
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.content}>
                        <div className={style.title}>
                            Последние подключения к счёту
                        </div>
                        <div className={style.text}>
                            Информация о последних сеансах доступа к Вашему
                            счёту
                        </div>
                        <Connect terminals={props.terminals} />
                        <div className={style.title}>
                            Доверенные адреса и устройства
                        </div>
                        <div className={style.text}>
                            Этот список устройств/IP-адресов, доступ с которых
                            осуществляется без дополнительной проверки. Если в
                            списке присутствуют незнакомые вам
                            устройства/IP-адреса, рекомендуется их удалить.
                        </div>
                        <Address
                            DeleteDevicePostTC={props.DeleteDevicePostTC}
                            devices={props.devices}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
