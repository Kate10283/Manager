import { useContext } from "react";
import { ThemeContext } from "../store/theme-context";
import "./Navigation.css";

export const Navigation = () => {
    const context = useContext(ThemeContext);

    return (
        <div className="main-nav">
            <a href="/finance" className="main-nav__item">
                <p className="main-nav__background" style={{ background: context.background }}></p>
                <div className="main-nav__layout"></div>
                <p className="main-nav__name" style={{ color: context.color }}>Доходы</p>
            </a>
            <a href="#" className="main-nav__item">
                <p className="main-nav__background" style={{ background: context.menu }}></p>
                <div className="main-nav__layout"></div>
                <p className="main-nav__name" style={{ color: context.color }}>Расходы</p>
            </a>
            <a href="#" className="main-nav__item">
                <p className="main-nav__background" style={{ background: context.diagram }}></p>
                <div className="main-nav__layout"></div>
                <p className="main-nav__name" style={{ color: context.color }}>Долги</p>
            </a>
            <a href="#" className="main-nav__item">
                <p className="main-nav__background" style={{ background: context.logo }}></p>
                <div className="main-nav__layout"></div>
                <p className="main-nav__name" style={{ color: context.color }}>На мечту</p>
            </a>
        </div>
    )
}