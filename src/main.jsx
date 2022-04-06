import React from 'react'
import ReactDOM, {render} from 'react-dom'
import './index.css'
import App from './App'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Jokes from "./components/Jokes";
import Scrape from "./components/Scrape";
import Home from "./components/Home";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="jokes" element={<Jokes />} />
                <Route path="scrape" element={<Scrape />} />

                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />

            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);