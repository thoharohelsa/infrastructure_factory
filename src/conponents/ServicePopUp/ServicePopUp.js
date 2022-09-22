import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Baseurl } from '../Baseurl';
import './ServicePopUp.css'
function ServicePopUp(props) {
    const [dataitems, setdataitems] = useState([])
    const [show, setshow] = useState(props.show)
    const [selectedService, setselectedService] = useState("")
    // const [border, setborder] = useState()

    useEffect(() => {
        async function getServiceData() {
            try {
                var res = await fetch(`${Baseurl}/api/DevOps/GetServiceConnections?organization=movvabhushan220&project=IAC&personalAccessToken=5xaa5uczbjfcz6xj4wptr56tbm2okbgeopoo2zc6w6nnrr5nmu6q`)
                const result = await res.json();
                if (result.success === true) {
                    setdataitems(result.serviceConnections.value)
                }
                else {
                }
            } catch (e) {
                console.log(e)
            }
        }
        getServiceData();

    }, [])





    function handleSelectedService(e) {

        setselectedService(e.target.value)
    }


    // console.log(selectedService);
    return (
        <>
            <Modal show={show}
                onHide={() => props.handleClose(!show)}
                centered
                className="environment-popup"
            >
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-end py-4'>
                    <div className=" mb-3 text-start">
                        <label className='fw-bold mb-1'>Environment Name</label>
                        <input type="text" className='form-control   d-block' placeholder='Environment Name' onChange={handleSelectedService} />
                    </div>
                    <div className="d-flex mb-3 align-items-center flex-wrap selectEnvironment">
                        <label className='fw-bold mb-1'>Service Connection</label>
                        <select class="form-select" aria-label="Default select example" onChange={handleSelectedService}>
                            <option selected>Select an Service Connection</option>
                            {dataitems.map((items, i) => {
                                return (

                                    <>
                                        <option value={items.name}> {items.name}</option>
                                    </>
                                )
                            })}
                        </select>

                    </div>
                    <Button variant="primary" className='ms-2 modal-btn ' onClick={() => { props.addService(selectedService) }}>
                        Submit
                    </Button>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default ServicePopUp;