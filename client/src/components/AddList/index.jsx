import React, { useState } from 'react'
import List from '../List'
import Badge from '../Badge'

import closeSvg from '../../assets/img/close.svg'

import './AddList.scss'

const AddList = ({ colors, onAdd }) => {
    const [isPopupOpen, togglePopup] = useState(false);
    const [selectedColor, selectColor] = useState('');
    const [inputValue, setInputValue] = useState('');

    const closeHandler = () => {
        togglePopup(false)
        setInputValue('')
        selectColor(colors[0]._id)
    }

    const addListHandler = () => {
        if(!inputValue){
            alert('Enter project name!')
            return
        }
        let color = colors.filter( color => color._id === selectedColor)[0].hex
        onAdd({id: Math.random(), name: inputValue, colorId: selectedColor, color})
        closeHandler()
    }

    return (
        <div className='add-list'>
            <List 
            onClick={() => { togglePopup(!isPopupOpen)}}
            items={[
                {
                className: 'list__add-button',
                icon: (<svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>), 
                name: 'Add list'
                }
            ]}
            />
            {isPopupOpen && <div className='add-list__popup'>
                <img src={closeSvg} alt='Close' className='add-list__popup-close-btn' onClick={closeHandler}/>
                <input type='text' placeholder='Enter list name' className='field' value={inputValue} onChange={e => {setInputValue(e.target.value)}}/>
                <div className='add-list__popup-colors'>
                    {
                        colors.map(color => (<Badge 
                            key={color._id} 
                            color={color.hex} 
                            onClick={() => selectColor(color._id)}
                            className={selectedColor === color._id && 'active'}
                            />))
                    }
                </div>
                <button className='button' onClick={addListHandler}>Add</button>
                </div>}
        </div>
    )
}

export default AddList