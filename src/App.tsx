import React, {useState} from 'react'
// import Dropdown from './components/Dropdown'
// import Accordion from './components/Accordion'
// import Search from './components/Search'
import Translate from './components/Translate'


// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end JS framework'
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a much loved JS library among engineers'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use react by using components'
//   }
// ]


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


  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      {/* {showDropdown ?
        <Dropdown
        label="Select a Color" 
        selected={selected}
        onSelectedChange={setSelected} 
        options={options}/> : null
      } */}
      <Translate />
    </div>
  )
}

export default App
