import React, { useState } from 'react';
import "./ReleaseNotes.css"
import Data from '../../json/release_notes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
function ReleaseNotes(props) {
    const [showNotes, setshowNotes] = useState(props.shoeNotes)
    return (
        <>
            <div className={`h-100 bg-white common-rt-sidebar common-barSide  ${showNotes ? "showbar" : ""}`} id='ReleaseNotes'>
                <h6 className='fw-bold pb-4 border-bottom'>Release notes/updates</h6>
                {Object.values(Data)
                    .sort((a, b) => new Date(a.date).valueOf() < new Date(b.date).valueOf() ? 1 : -1)
                    .map((key, i) => (
                        <div className='notes'>
                            <h5 className='fw-bold '>{key.title}</h5>
                            <p>{key.description} {key.blogUrl ?  <a className="text-decoration-none" href={key.blogUrl}> 
                                Learn more <FontAwesomeIcon icon={faExternalLink} />
                            </a>: ""}</p>
                            <p><small>{key.date}</small></p>
                        </div>
                    ))}


                <div className="bottomFooter py-2 px-3 border-top d-flex justify-content-between">
                    <button className={` commonBtn px-4 py-1  bg-primary text-white`} onClick={() => props.handleCLose(!showNotes)}>Close</button>
                </div>
            </div>
        </>
    );
}

export default ReleaseNotes;