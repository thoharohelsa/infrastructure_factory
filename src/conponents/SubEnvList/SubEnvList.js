import React from 'react';
import { Nav, Row, Tab } from 'react-bootstrap';
import reIcon from '../../img/rg-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function SubEnvList(props) {



    return (
        <>
            {Object.entries(props.tablist).map((items, i) => {
                return (
                    Object.entries(items[1]).map((item, index) => {
                        if (item[0] === props.data) {
                            return (
                                <>
                                    {item[1].map((val, valin) => {
                                        return (
                                            <div className='subenvlist'>
                                                <Nav.Link onClick={() => { props.getResourceId(val) }} eventKey={`tabkey` + i + valin} className='position-relative d-flex align-items-center justify-content-between'><div><img src={reIcon} alt="" className='me-2 pipelineImg' />{val}</div>
                                                    <div className="cross" ><FontAwesomeIcon icon={faTimes} /></div>
                                                </Nav.Link>
                                            </div>
                                        )
                                    })}

                                </>
                            )
                        } else {
                            return null
                        }
                    })
                )
            })}
        </>
    );
}

export default SubEnvList;