import React, { useRef } from 'react';
import { useDrag } from "react-dnd";
import './DraggableCard.css';
import Key from '../../img/Key-Vaults.svg'
import storage from '../../img/Storage-Accounts.svg'

function DraggableCard({ item }) {
    const ref = useRef(null);
    const [{ isDragging }, drag] = useDrag({
        type: "card",
        item: { item },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0.4 : 1;
    drag(ref);
    return (
        <div ref={ref} style={{ opacity }}>
            <div id={item._id} className='activity-data d-flex align-items-center justify-content-between'>
                <h6 className='mb-0'>
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
    );
}

export default DraggableCard;