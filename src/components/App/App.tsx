import React, {FC} from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Page1} from "../Page1/Page1";
import {Home} from "../../pages/Home";
import {Page2} from "../Page2/Page2";
import {Page3} from "../Page3/Page3";

export const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route index element={<Page1/>}/>
                <Route path="page2" element={<Page2/>}/>
                <Route path="page3" element={<Page3/>}/>
            </Route>
        </Routes>
    );
}
