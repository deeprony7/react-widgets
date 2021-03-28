import React, {useState} from 'react'
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
    label: 'A shade of Green',
    value: 'green'
  }
]


const App = () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)


  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown 
        selected={selected}
        onSelectedChange={setSelected} 
        options={options}/> : null
      }
    </div>
  )
}

export default App
