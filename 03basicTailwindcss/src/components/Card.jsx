import React from 'react'

function Card({ username, btnText="visit me", onClick}) {
    // console.log(username);
    // console.log(btnText);
    
    
    
    return (
        <div className="relative h-[480px] w-[380px] rounded-md">
            <img
                src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
                alt="Giphy"
                className="rounded-t-xl"
            />
            <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
                <h1 className="font-bold  font-mono  text-xl">{username}</h1>
            </div>
        <div>
        <button onClick = {onClick} type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100  p-100 text-white">{btnText}</button>
</div>
        </div>
    )
}

export default Card