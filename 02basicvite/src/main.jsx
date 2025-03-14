import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App | SPS</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotheruser = " Satya Prakash Sahu "

const reactElement = React.createElement (
    'a',
    {href: "https://google.com", target: '_balck'},
    'Click me to Visit Google',
    anotheruser

)
 



const root = createRoot(document.getElementById('root'));
root.render(
    reactElement
);
