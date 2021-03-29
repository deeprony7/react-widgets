import React, {useState} from 'react'
// import Dropdown from './components/Dropdown'
// import Accordion from './components/Accordion'
// import Search from './components/Search'
import Translate from './components/Translate'
import { Item, items} from './Item'




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
