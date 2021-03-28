import React from 'react'
import Dropdown from './components/Dropdown'
// import Accordion from './components/Accordion'
import Search from './components/Search'




const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a much loved JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by using components'
  }
]


const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'A shade of Blue',
    value: 'blue'
  },
  {
    label: 'A shade og Green',
    value: 'green'
  }
]


const App = () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <Dropdown options={options}/>
    </div>
  )
}

export default App
