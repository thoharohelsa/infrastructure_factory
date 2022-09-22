import React from 'react';
import { NavLink } from 'react-router-dom';
import '../SidebarComp/Sidebar.css'
import HomeIcon from '../../img/homeicon.svg'
import authorIcon from '../../img/authorIcon.svg'
import monitoricon from '../../img/monitoricon.svg'
import managerIcon from '../../img/managerIcon.svg'
import icondesigner from '../../img/icon-designer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
function Sidebar(props) {
    return (
        <>
            <div className={`sidebar-container `}>
                <div className='page_Sidebar'>
                    <ul className='list-unstyled mb-0 '>

                        <li className='text-end'>
                        <span onClick={props.sidebar}>
                        {props.cusClass ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : <FontAwesomeIcon icon={faAngleDoubleLeft} />}
                         </span>
                         </li>
                        <li><NavLink className="nav_bar_link" to="/home"><img src={HomeIcon} alt="" /> Home</NavLink></li>
                        <li><NavLink className="nav_bar_link" to="/author"><img src={authorIcon} alt="" /> Author</NavLink></li>
                        <hr className='m-0' />
                        <li><NavLink className="nav_bar_link" to="/monitor"><img src={monitoricon} alt="" /> Monitor</NavLink></li>
                        <li><NavLink className="nav_bar_link" to="/manage"><img src={managerIcon} alt="" /> Manage</NavLink></li>
                        <li><NavLink className="nav_bar_link" to="/design"><img src={icondesigner} alt="" /> Designer</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;