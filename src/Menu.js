import { useContext } from "react";
import { ThemeContext } from "./store/theme-context";

export const Menu = () => {
    const context = useContext(ThemeContext);
    
    return (
        <div style={{float: "left", height: "100vh", background: context.diagram, color: context.color}}>Menu</div>
    )
}