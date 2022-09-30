import React, { useState } from 'react'

import './Tasks.scss';

import editSvg from '../../assets/img/edit.svg'

const Tasks = () => {
    return (
        <div className='tasks'>
            <div className='tasks__title'>
                <h2>Learn JS</h2>
                <img src={editSvg} alt="Edit" className='tasks__title-edit'/>
            </div>
            <div className='tasks__list'>
                <div className='tasks__list-item'>
                    <div className='checkbox'>
                        <input type='checkbox' id='checkbox'/>
                        <label htmlFor='checkbox'>
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </label>
                    </div>
                   <p>Arrow functions</p>
                </div>
            </div>
        </div>
    )
}

export default Tasks