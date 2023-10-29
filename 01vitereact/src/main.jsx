import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const anotherUser = "Another user using React"

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
 const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',
  target: '_blank'},
  'Click me to Visit to google',
  anotherElement
 )


 
 ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
