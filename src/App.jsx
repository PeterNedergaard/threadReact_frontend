import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {


    return (
        <div>
            <div style={container}>
                <h1>Thread exercise</h1>
            </div>

            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <div style={container}>
                    <Link to="/home">Home</Link> |{" "}
                    <Link to="/jokes">Jokes</Link> |{" "}
                    <Link to="/scrape">Scrape</Link>
                </div>
            </nav>

            <div style={container}>
                <Outlet/>
            </div>

        </div>
    )
}

export default App

const container = {
    padding: "1rem",
}