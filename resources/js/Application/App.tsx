import React from "react"
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import Routes from "./components/Routes";

const App: React.FC = () => {
    return (
        <>
            <Navbar />           
            <Routes />
        </>
    );
};

export default App;
