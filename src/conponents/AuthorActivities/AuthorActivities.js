import React from 'react';
import './AuthorActivities.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleRight, faSe, faSearch } from '@fortawesome/free-solid-svg-icons';
import DraggableCard from '../DraggableCard/DraggableCard';

function AuthorActivities(props) {
    const isActivity = props.isActivity

    const activitiesList = [
        { _id: 1, title: "Keyvault", status: "Security" },
        { _id: 2, title: "Storage Account", status: "Storage" },
    ];
      
    const channels = ["Security", "Storage"];

    return (
        <>
            <div className={`activitiesSidebar ${isActivity ? "" : "hideActivities"}`}>
                <h2 className='d-flex align-items-center justify-content-between'> {isActivity ? "Activities" : ""} <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={props.toggleActivties} /> </h2>
                {isActivity ?
                    <div className='search-filter mt-3'>
                        <FontAwesomeIcon icon={faSearch} className="filter-icon text-primary position-absolute py-2 px-1" />
                        <input type="text" className='form-control border border-dark rounded-0 py-1 ps-4' placeholder='Search Activities' />
                        <ul className='list-unstyled mb-0 activity-list'>
                            {channels.map(channel => (
                                <li key={channel}>
                                    <h5><FontAwesomeIcon icon={faAngleRight} /> {channel}</h5>
                                    {activitiesList
                                        .filter(item => item.status === channel)
                                        .map(item => (
                                            <DraggableCard key={item._id} item={item}/>
                                        ))
                                    }
                                </li>
                            ))}    
                        </ul>
                    </div>
                    : ""}
            </div>
        </>
    );
}

export default AuthorActivities;