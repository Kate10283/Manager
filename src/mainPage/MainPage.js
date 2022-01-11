import { Header } from "../shared/Header";
import { Navigation } from "./Navigation";

export const MainPage = (props) => {
    return (
        <>
            <Header values={ props.values } />
            <Navigation />
        </>
    );
}