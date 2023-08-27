
import ReactDOM from "react-dom";
import App from "./components/App";
import Amthal from "./components/Amthal";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import {BrowserRouter, Routes, Route} from "react-router-dom";
 
ReactDOM.render(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route path="/amthal" element={<Amthal/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
    </BrowserRouter>
    , document.getElementById("root"));
