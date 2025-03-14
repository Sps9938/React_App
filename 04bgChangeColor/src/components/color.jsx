import React from "react"
import { useState } from "react"


function Thems() {



    const [color, setColor] = useState("black")
    return (
        <>

        <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>

        <div className="fixed flex justify-end flex-wrap inset-x-0 px-2">
        <div className="flex flex-col justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button
        onClick={() => { setColor("red") }}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "red" }}>Red</button>

        <button
        onClick={() => { setColor("blue") }}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "blue" }}>Blue</button>

        <button
        onClick={() => { setColor("purple") }}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "purple" }}>Purple</button>

        <button
        onClick={() => { setColor("white") }}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "black" }}>White</button>

        <button
        onClick={() => { setColor("green") }}
        className="outlgreenne-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "green" }}>Green</button>

        <button
        onClick={() => { setColor("yellow") }}
        classNamye="outlgreenne-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "yellow" }}>yellow</button>

        <button
        onClick={() => { setColor("silver") }}
        classNamye="outlgreenne-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "silver" }}>Silver</button>

        <button
        onClick={() => { setColor("gold") }}
        classNamye="outlgreenne-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "gold" }}>Gold</button>


        </div>
        </div>
        </div>

        </>
    )
}

export default Thems
