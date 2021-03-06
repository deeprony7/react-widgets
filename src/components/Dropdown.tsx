import React, { useEffect, useState, useRef } from 'react'

interface DropdownProps {
    options: any,
    selected: {
        label: string,
        value: string
    },
    onSelectedChange: any,
    label: string
}


const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelectedChange, label }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef<any>()

    useEffect(() => {
        const onBodyClick = (event: any) => {
            if (ref.current && ref.current.contains(event.target)) {
                return
            }

            setOpen(false)
        }
        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    const renderedOptions = options.map((option: any) => {
        if (selected.value === option.value) {
            return null
        }


        return (
            <div
                key={options.value}
                className="item"
                onClick={() => onSelectedChange(option)} >
                {option.label}
            </div>
        )
    })

    console.log(ref.current)

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            {/* <p style={{ color: selected.value }}>This text is {selected.value}</p> */}
        </div>
    )
}

export default Dropdown
