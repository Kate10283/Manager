import React, { useContext } from "react"
import { ThemeContext, themes } from "../store/theme-context"
import './Header.css'

export const Header = (props) => {
    const context = useContext(ThemeContext);
    const { theme, setTheme } = props.values;

    return (
        <header className="header">
            <h1 className="logo"><a href="/" style={{ color: context.logo }}>My manager</a></h1>

            <nav className="header__nav">
                <ul className="topmenu">

                    <li id="header-balance"><a href="/#" title="Баланс" style={{
                        background: context.logo, color: context.color
                    }}>Баланс: 1000грн</a></li>
                    <li ><a href="/finance" title="Доходы" style={{
                        background: context.menu, color: context.color
                    }}><svg width="48" fill="#000000" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/1999/xlink" enableBackground="new 0 0 16 16">
                    <path d="m24,0c-13.254,0-24,10.746-24,24s10.746,24 24,24 24-10.746 24-24-10.746-24-24-24zm0,42c-9.939,0-18-8.061-18-18s8.061-18 18-18 18,8.061 18,18-8.061,18-18,18zm2.121-29.124l6,6c.855,.858 1.113,2.148 .651,3.273-.462,1.119-1.56,1.851-2.772,1.851h-3v9c0,1.659-1.341,3-3,3-1.659,0-3-1.341-3-3v-9h-3c-1.212,0-2.31-.732-2.772-1.851-.462-1.122-.207-2.415 .651-3.273l6-6c.585-.585 1.353-.879 2.121-.879 .768,0 1.536,.294 2.121,.879Z"/>
                    </svg></a></li>
                    <li ><a href="#" title="Расходы" style={{
                        background: context.menu, color: context.color
                    }}><svg width="48" fill="#000000" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/1999/xlink" enableBackground="new 0 0 16 16">
                    <path d="m48,24c0-13.254-10.746-24-24-24s-24,10.746-24,24 10.746,24 24,24 24-10.746 24-24zm-6,0c0,9.939-8.061,18-18,18s-18-8.061-18-18 8.061-18 18-18 18,8.061 18,18zm-15.879,11.124c-.585,.585-1.353,.879-2.121,.879s-1.536-.294-2.121-.879l-6-6c-.858-.858-1.113-2.151-.651-3.273 .462-1.119 1.56-1.851 2.772-1.851h3v-9c0-1.659 1.341-3 3-3s3,1.341 3,3v9h3c1.212,0 2.31,.732 2.772,1.851 .462,1.125 .204,2.415-.651,3.273l-6,6z"/>
                    </svg></a></li>
                    <li><a href="#" title="Долги" style={{
                        background: context.menu, color: context.color
                    }}><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="485.213px" height="485.212px" viewBox="0 0 485.213 485.212" style={{enableBackground: 'new 0 0 485.213 485.212'}}
                    xml="preserve">
               <g>
                   <path d="M288.098,0h-90.98C88.255,0,0.001,108.628,0.001,242.606c0,133.976,88.254,242.606,197.116,242.606h90.98
                       c108.859,0,197.114-108.631,197.114-242.606C485.212,108.628,396.957,0,288.098,0z M463.267,181.955h-75.812
                       c-2.189-10.424-4.947-20.493-8.2-30.327h75.514C458.175,161.404,460.956,171.531,463.267,181.955z M423.35,90.978
                       c6.781,9.449,12.941,19.545,18.388,30.327h-74.57c-5.06-10.66-10.721-20.762-17.002-30.327H423.35z M352.896,30.327
                       c15.812,7.579,30.564,17.831,43.917,30.324h-69.535v0.831c-10.902-11.847-22.658-22.446-35.512-31.155H352.896z M197.117,470.049
                       c-100.333,0-181.955-102.022-181.955-227.443c0-125.418,81.622-227.443,181.955-227.443c100.338,0,181.96,102.025,181.96,227.443
                       C379.077,368.027,297.455,470.049,197.117,470.049z M423.35,394.237h-73.181c6.277-9.567,11.938-19.662,16.998-30.331h74.57
                       C436.291,374.687,430.131,384.787,423.35,394.237z M272.514,251.938c5.811,9.773,8.714,21.175,8.714,34.233
                       c0,20.045-5.983,36.753-17.949,50.11c-11.935,13.385-29.17,21.258-51.707,23.629v34.326h-28.729v-34.148
                       c-37.579-3.846-60.828-25.706-69.801-65.507l44.421-11.579c4.117,25.02,17.74,37.519,40.867,37.519
                       c10.809,0,18.809-2.66,23.9-8.027c5.094-5.358,7.642-11.812,7.642-19.396c0-7.846-2.548-13.801-7.642-17.823
                       c-5.092-4.061-16.435-9.186-33.998-15.402c-15.786-5.479-28.135-10.869-37.019-16.26c-8.884-5.33-16.108-12.82-21.648-22.448
                       c-5.538-9.654-8.321-20.909-8.321-33.701c0-16.792,4.978-31.925,14.867-45.371c9.892-13.413,25.469-21.62,46.734-24.609V90.978
                       h28.726v26.506c32.103,3.851,52.892,22.006,62.371,54.491l-39.596,16.23c-7.729-22.271-19.635-33.405-35.804-33.405
                       c-8.114,0-14.629,2.485-19.518,7.46c-4.917,4.978-7.372,11.017-7.372,18.097c0,7.227,2.369,12.762,7.105,16.643
                       c4.707,3.853,14.867,8.618,30.385,14.335c17.058,6.219,30.443,12.113,40.127,17.651
                       C258.984,234.523,266.713,242.193,272.514,251.938z"/>
               </g>
               </svg></a></li>
                    <li ><a href="#" title="На что-то хорошее" style={{
                        background: context.menu, color: context.color
                    }}><svg viewBox="0 0 24 23.75" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Camada 2" id="Camada_2"><g data-name="Camada 1" id="Camada_1-2"><path d="M23.5,12.24H22.39a7,7,0,0,0-4.12-4.51,4.74,4.74,0,0,0,1-2.94,4.79,4.79,0,0,0-9.58,0,4.74,4.74,0,0,0,1.13,3.06c-.58.16-1.44.43-2.53.83A16.54,16.54,0,0,0,5.25,5.51a.5.5,0,0,0-.81.4V11A18.66,18.66,0,0,0,2,13.36H.5a.5.5,0,0,0-.5.5v3.73a.5.5,0,0,0,.3.46l6.95,3v1.22a1.5,1.5,0,0,0,1.49,1.49h1.53a1.5,1.5,0,0,0,1.49-1.49V21.2h3.85v1.05a1.5,1.5,0,0,0,1.49,1.49h1.53a1.5,1.5,0,0,0,1.49-1.49V19.58a6.79,6.79,0,0,0,2.47-6.35h.89a.5.5,0,0,0,0-1ZM14.52,1a3.79,3.79,0,1,1-3.79,3.79A3.79,3.79,0,0,1,14.52,1Zm4.82,18,0,0-.07.08,0,.07a.5.5,0,0,0,0,.09.52.52,0,0,0,0,.1s0,0,0,0v2.9a.5.5,0,0,1-.49.49H17.12a.5.5,0,0,1-.49-.49v-1.6a61.24,61.24,0,0,1,0-.18l-.05-.08-.06-.08-.07,0-.09-.05-.09,0-.09,0H11.27a.5.5,0,0,0-.5.5v1.55a.5.5,0,0,1-.49.49H8.75a.5.5,0,0,1-.49-.49V20.71h0s0,0,0,0a.49.49,0,0,0,0-.16.47.47,0,0,0-.05-.08A.35.35,0,0,0,8,20.26l0,0h0L1,17.26v-2.9H2.24a.5.5,0,0,0,.4-.19,17.11,17.11,0,0,1,2.62-2.56l0,0,.07-.08,0-.07a.47.47,0,0,0,0-.09.48.48,0,0,0,0-.1V7A11.48,11.48,0,0,1,7.7,9.52a.49.49,0,0,0,.15.16l0,0a.49.49,0,0,0,.22.07H8.3c1.74-.64,3-1,3.41-1.09A4.7,4.7,0,0,0,17.5,8.5,6,6,0,0,1,19.34,19Z"/><circle cx="5.38" cy="14.02" r="0.96"/><path d="M17.88,10.11H11.15a.5.5,0,0,0,0,1h6.73a.5.5,0,0,0,0-1Z"/></g></g></svg></a></li>

                    <li ><a href="#" title="Сменить цветовую тему" style={{
                        background: context.menu, color: context.color
                    }}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" />
                        </svg>
                    </a>

                        <ul className="submenu">
                            {Object.keys(themes).map((key, id) => {
                                return (
                                    <li className="header__color" key={id} style={{
                                        backgroundImage: `linear-gradient(
                                            45deg, ${themes[key].background}, ${themes[key].background}), linear-gradient(
                                            135deg, ${themes[key].menu}, ${themes[key].menu}), linear-gradient(
                                            225deg, ${themes[key].logo}, ${themes[key].logo}), linear-gradient(
                                            225deg, ${themes[key].diagram}, ${themes[key].diagram})`
                                    }} onClick={() => setTheme(key)}> <a href="#"></a></li>
                                );
                            })}
                        </ul>

                    </li>
                    <li ><a href="#" style={{
                        background: context.menu, color: context.color
                    }}><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2Z" />
                            <path d="M5.00873 11C3.90315 11 3 11.8869 3 13C3 14.6912 3.83281 15.9663 5.13499 16.7966C6.41697 17.614 8.14526 18 10 18C11.8547 18 13.583 17.614 14.865 16.7966C16.1672 15.9663 17 14.6912 17 13C17 11.8956 16.1045 11 15 11L5.00873 11Z" />
                        </svg>
                    </a>
                        <ul className="submenu">
                            <li ><a href="#" title="Привязать/отвязать карту" style={{
                                background: context.menu, color: context.color
                            }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                </svg></a></li>
                            <li ><a href="#" title="Экспорт в файл" style={{
                                background: context.menu, color: context.color
                            }}><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="mdi-database-export" width="24" height="24" viewBox="0 0 24 24"><path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C12.5,11 13,10.97 13.5,10.92V9.5H16.39L15.39,8.5L18.9,5C17.5,3.8 14.94,3 12,3M18.92,7.08L17.5,8.5L20,11H15V13H20L17.5,15.5L18.92,16.92L23.84,12M4,9V12C4,14.21 7.58,16 12,16C13.17,16 14.26,15.85 15.25,15.63L16.38,14.5H13.5V12.92C13,12.97 12.5,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C14.94,21 17.5,20.2 18.9,19L17,17.1C15.61,17.66 13.9,18 12,18C7.58,18 4,16.21 4,14Z" /></svg></a></li>
                        </ul>
                    </li>
                </ul>
            </nav >
        </header >
    )
}