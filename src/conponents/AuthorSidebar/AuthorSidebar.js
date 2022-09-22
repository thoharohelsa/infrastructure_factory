import React, { useEffect, useState } from 'react';
import { Nav, Row, Tab } from 'react-bootstrap';
import { faAdd, faAngleDoubleLeft, faAngleDoubleRight, faAngleRight, faArrowRight, faArrows, faClone, faEdit, faEllipsis, faFilter, faFolderPlus, faTrashAlt, faTimes, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AuthorSidebar.css'
import Pipeline from '../../img/pipeline.png'
import ServicePopUp from '../ServicePopUp/ServicePopUp';
import SubEnvList from '../SubEnvList/SubEnvList';
function AuthorSidebar(props) {
    // const [isSidebarOpen, setIsSidebaropen] = useState(false)
    const [showOptions, setshowOptions] = useState(false)
    const [openPopup, setopenPopup] = useState(false)
    const [envList, setenvList] = useState([])
    const [isActive, setisActive] = useState([])
    const [showsubmenu, setshowsubmenu] = useState(false)
    const [addResource, setaddResource] = useState(false)
    const [envcount, setenvcount] = useState(0)
    const [checkId, setcheckId] = useState()
    const [addResouceContent, setaddResouceContent] = useState(1)
    const isSidebarOpen = props.isSidebarOpen;
    const [dropdownActive, setDropdownActive] = useState(true);
    var subDropdown;
    // // To toggle the author sidebar
    // function handleToggleicon() {
    //     setIsSidebaropen(!isSidebarOpen)
    // }

    // To show environment option
    function showpipelineOptions() {
        setshowOptions(!showOptions)
        setaddResource(false)
        setshowsubmenu(false)
    }

    // open service pop up
    function showServicePopup() {
        setopenPopup(!openPopup)
    }

    // handle close pop up
    function handleClose(data) {
        setopenPopup(!openPopup)
    }

    // get sevice data
    function addService(data) {
        setenvList([...envList, data])
        setopenPopup(!openPopup)
        setshowOptions(!showOptions)
        setenvcount(envcount + 1)
        // setisActive(true)
    }

    function handleSubMenu(items, i) {
        setcheckId(items)
        setshowsubmenu(!showsubmenu)
    }

    function showAddResource() {
        setaddResource(!addResource)
    }

    function closeMenus() {
        setaddResource(!addResource)
        setshowsubmenu(!showsubmenu)
    }

    function handleSubmenus() {
        setDropdownActive(!dropdownActive)
    }

    useEffect(() => {
        var cardselector = document.querySelector(".pipline-items").querySelectorAll(`.pipline-items li`);
        cardselector.forEach(element => {
            element.addEventListener("click", function () {
                setisActive(true)
                cardselector.forEach(data => data.classList.remove("active"));

                this.classList.add("active")

            })
        })

        subDropdown = document.querySelector(".dropdownMenu")
        // console.log(subDropdown)

    })

    return (
        <>
            {openPopup ? <ServicePopUp show={openPopup} handleClose={handleClose} addService={addService} /> : ""}
            <div className={`authorleft-sidebar commonSidebar position-relative h-100 ${isSidebarOpen ? "hide_sidebar" : ""}`}>
                <Nav variant="tabs" className="flex-column border-0">
                    <Nav.Item className='px-3 pt-3 d-flex align-items-center justify-content-between'>{isSidebarOpen ? "" : <h5 className='fw-bold'>Infrastructure</h5>}<span>{isSidebarOpen ? <FontAwesomeIcon icon={faAngleDoubleRight} onClick={props.handleToggleicon} /> : <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={props.handleToggleicon} />} </span></Nav.Item>
                    <>
                        {isSidebarOpen ? "" :
                            <div className='form-group position-relative justify-content-between my-2 mx-3 d-flex align-items-center'>
                                <div className='search-filter'>
                                    <FontAwesomeIcon icon={faFilter} className="filter-icon position-absolute py-2 px-1" />
                                    <input type="text" className='form-control border border-dark rounded-0 py-1 ps-4' placeholder='Filter resources by name' />
                                </div>
                                <div className="add-filter d-inline-flex"><FontAwesomeIcon icon={faAdd} className="text-primary fs-5" /></div>
                            </div>
                        }
                        <Nav.Item>
                            {isSidebarOpen ? "" :
                                <>
                                    <Nav.Link eventKey="first" className={`py-0 position-relative d-flex align-items-center justify-content-between author-list `}>
                                        <div className="d-flex align-items-center"><FontAwesomeIcon icon={faAngleRight} /> <h5 className='mb-0 ms-2 fw-bold'>Environments</h5></div>
                                        <h6 className="pipe-line-counter fw-normal">{envcount}</h6>
                                        <div className="pipe-line-menu fw-normal text-primary d-none" onClick={showpipelineOptions}><FontAwesomeIcon icon={faEllipsis} /></div>
                                    </Nav.Link>
                                </>
                            }
                            {
                                showOptions ? <ul className="menu-list list-unstyled mb-0 bg-white shadow p-2 ">
                                    <li><button className='border-0 w-100 text-start bg-transparent mb-2' onClick={showServicePopup}><FontAwesomeIcon className='text-primary fw-light me-2' icon={faAdd} />New Environment</button></li>
                                    <li><button className='border-0 w-100 text-start bg-transparent '><FontAwesomeIcon className='text-primary fw-light me-2' icon={faFolderPlus} />New folder</button></li>
                                </ul> : ""
                            }

                            <div className='pipeline-submenus'>
                                <ul className="p-0 mb-0 pipline-items border-top">
                                    <div className='position-relative'>
                                        {envList.map((items, index) => {
                                            return (
                                                <>
                                                    {isSidebarOpen ? "" : <> <li onClick={handleSubmenus} ><div className={`d-flex align-items-center justify-content-between envList`}>
                                                        <div className='d-flex align-items-center'>
                                                            {subDropdown ? <img src={Pipeline} alt='Pipeline' className='me-2' /> :
                                                                <FontAwesomeIcon icon={faCaretRight} className="triangleShow me-2" />}{items}
                                                        </div> <FontAwesomeIcon icon={faEllipsis} className="text-primary" onClick={() => handleSubMenu(items, index)} />
                                                    </div>
                                                        {checkId === items ? showsubmenu ?
                                                            <>
                                                                <ul className="menu-list ResourceList list-unstyled mb-0 bg-white shadow">
                                                                    <li><button className='d-flex align-items-center border-0 pb-2 border-bottom w-100 text-start bg-transparent ' onClick={showAddResource}><FontAwesomeIcon className='text-primary fw-light me-2 rotate-icon' icon={faArrowRight} />Add Resource group</button></li>
                                                                    <li><button className='d-flex align-items-center  border-0 w-100 text-start bg-transparent '><FontAwesomeIcon className='text-primary fw-light me-2' icon={faClone} />Clone</button></li>
                                                                    <li><button className='d-flex align-items-center  border-0 w-100 text-start bg-transparent '><FontAwesomeIcon className='text-primary fw-light me-2' icon={faEdit} />Rename</button></li>
                                                                    <li><button className='d-flex align-items-center  border-0 w-100 text-start bg-transparent '><FontAwesomeIcon className='text-primary fw-light me-2' icon={faArrows} />Move item</button></li>
                                                                    <li><button className='d-flex align-items-center  border-0 w-100 text-start bg-transparent '><FontAwesomeIcon className='text-primary fw-light me-2' icon={faTrashAlt} />Delete</button></li>
                                                                    {addResource ? <ul className="menu-list addResource list-unstyled mb-0 bg-white shadow" onClick={closeMenus}>
                                                                        <li onClick={() => props.handleaddResource("Rg" + "-" + items + "-" + "00" + props.increaseNo, props.increaseNo, items)}><button className='d-flex align-items-center border-0  w-100 text-start bg-transparent ' ><FontAwesomeIcon className='text-primary fw-light me-2' icon={faAdd} />  Rg-{items}-{props.increaseNo}</button></li>
                                                                    </ul> : ""}
                                                                </ul>
                                                            </>
                                                            : "" : null}

                                                        <div className={`dropdownMenu`}>
                                                            <SubEnvList tablist={props.listOftab} getResourceId={props.getResourceId} data={items} />
                                                        </div>
                                                    </li>

                                                    </>}
                                                </>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </div>
                        </Nav.Item>
                    </>
                </Nav>


            </div>
        </>
    );
}

export default AuthorSidebar;