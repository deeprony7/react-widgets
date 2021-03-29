import React, {useState} from 'react'
import Convert from './Convert'
import Dropdown from './Dropdown'

const options = [
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
]


const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
                label="Select a language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options} />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert
                language={language}
                text={text} />
        </div>
    )
}

export default Translate
