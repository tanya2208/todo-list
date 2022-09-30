import React from 'react';
import classNames from 'classnames'
import Badge from '../Badge'

import removeSvg from '../../assets/img/remove.svg'

import './List.scss';

const List = ({items, isRemovable, onClick, onRemove}) => {
    return (
        <ul className="list" onClick={onClick}>
            {
                items.map((item, index) => {
                    return (<li key={index} className={classNames(item.className, {'active' : item.active})}>
                        <i>
                            {item.icon ? (item.icon) : (
                                <Badge color={item.color}/>
                            )}
                        </i>
                        <span>{item.name}</span>
                        {isRemovable && <img src={removeSvg} alt="Remove" className='list__remove-icon' onClick={() => onRemove(index)}/>}
                    </li>)
                })
            }
           
        </ul>
    )
}

export default List;