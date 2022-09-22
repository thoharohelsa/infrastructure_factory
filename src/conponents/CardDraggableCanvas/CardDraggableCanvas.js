import React, { useState, useRef } from 'react'
import { useDrop } from 'react-dnd';
import './CardDraggableCanvas.css'
import Key from '../../img/Key-Vaults.svg'
import storage from '../../img/Storage-Accounts.svg'

function CardDraggableCanvas() {
    const ref = useRef(null);
    const [basket, setBasket] = useState([])
    const [{ isOver }, drop] = useDrop({
        accept: "card",
        drop(item) {
            // setBasket((basket) => !basket.includes(item.item) ? [...basket, item.item] : basket)
            setBasket((basket) => [...basket, item.item])
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });
    drop(ref);

    return (
        <React.Fragment>
            <div className='basket' ref={ref}>
                {basket.map((item, index) =>
                    <div key={index} className="container">
                        <div id={item._id} className='activity-data d-flex align-items-center justify-content-between'>
                            <h6 className='mb-0 title'>
                                <img src={item._id === 1 ? Key : storage} className="me-1" />
                                {item.title}
                            </h6>
                            <div className='d-flex'>
                                <span className='lines'></span>
                                <span className='lines'></span>
                                <span className='lines'></span>
                            </div>
                        </div>
                    </div>
                )}
                {isOver && <div>Drop Here!</div>}
            </div>
        </React.Fragment>
    )
}

export default CardDraggableCanvas;