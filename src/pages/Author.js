import React, { useState } from 'react';
import DefaultFactory from '../conponents/DefaultFactory/DefaultFactory';
import { Tab } from 'react-bootstrap';
import AuthorSidebar from '../conponents/AuthorSidebar/AuthorSidebar';
import AuthorRightContent from '../conponents/AuthorRightContent/AuthorRightContent';

function Author() {
    const [tabName, setTabName] = useState([])
    const [increaseNo, setincreaseNo] = useState(1)
    const [isSidebarOpen, setIsSidebaropen] = useState(false)
    const [isMenuActive, setisMenuActive] = useState(false)
    const [matchdata, setmatchdata] = useState()
    const [sideNavres, setsideNavres] = useState()
    const checkValues = (array, id) => {
        let value;
        let values = array.map((item) => {
            return Object.keys(item)[0];
        });
        if (values.includes(id)) {
            value = false;
        } else {
            value = true;
        }

        return value;
    };


    function handleaddResource(data, incNo, id) {
        setisMenuActive(true)
        setmatchdata(id);
        let group = { [id]: [data] };

        let array = tabName;
        if (array.length) {
            array.map((items) => {
                if (Object.keys(items)[0] == id) {
                    Object.values(items)[0].push(data);
                } else if (checkValues(array, id)) {
                    array.push(group);
                }
            });
        } else {
            array.push(group);
        }
        setTabName(array);
        setincreaseNo(incNo + 1);
    }

    // To toggle the author sidebar
    function handleToggleicon() {
        setIsSidebaropen(!isSidebarOpen)
    }
    function getResourceId(e) {
        setisMenuActive(false)

        setsideNavres(e)
        console.log(e.target.className)
    }


    return (
        <>
            <div className='author-container' id='author-part'>
                <DefaultFactory />
                <Tab.Container id="authortab" defaultActiveKey="first" >
                    <div className="d-flex flex-row page-bottom-content">
                        <AuthorSidebar handleaddResource={handleaddResource} getResourceId={getResourceId} isMenuActive={isMenuActive} listOftab={tabName} matchdata={matchdata} handleToggleicon={handleToggleicon} isSidebarOpen={isSidebarOpen} increaseNo={increaseNo} />
                        <div className={`manage_main_content ${isSidebarOpen ? "fullManageContent" : ""}`}>
                            {/* <Tab.Content>
                                <Tab.Pane eventKey="first"> */}
                            <AuthorRightContent tablist={tabName} sideNavres={sideNavres} isMenuActive={isMenuActive} />
                            {/* </Tab.Pane>
                            </Tab.Content> */}
                        </div>
                    </div>
                </Tab.Container>
            </div>

        </>
    );
}

export default Author;