import React, {useState} from 'react'
import Dropdown from './components/Dropdown'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Translate from './components/Translate'
import { items} from './Item'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'




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

  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/"><Accordion items={items}/></Route>
        <Route path="/list"><Search/></Route>
        <Route path="/dropdown">
        <Dropdown
          label="Select a Color" 
          selected={selected}
          onSelectedChange={setSelected} 
          options={options}/>
        </Route>
        <Route path="/translate"><Translate /></Route>
      </div>
    </Router>
  )
}

export default App
