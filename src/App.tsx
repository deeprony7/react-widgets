import React from 'react'
import Accordion from './components/Accordion'




const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS framework'
  },
  {
    title: 'What use React?',
    content: 'React is a much loved JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by using components'
  }
]


const App = () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default App
