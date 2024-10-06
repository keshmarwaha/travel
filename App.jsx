import React from "react"
import Main from "./Main"
import Navbar from "./Navbar"
import data from "./data"

export default function App() {
    const places = data.map(item => {
    return (
        <Main
            key={item.id}
            item={item}
        />
     )
    })
    
    return (
            <div>
                 <Navbar />
                 {places}
            </div>
        )
    }