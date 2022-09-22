import { useEffect, useState } from "react";
import ManageNewService from "../ManageNewService/ManageNewService";
import "./RightContent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faExchange, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Baseurl } from "../Baseurl";
function RightContent() {
  const [isServiceShow, setIsServiceShow] = useState(false)
  const [dataList, setdataList] = useState([])
  const [dataitems, setdataitems] = useState([])
  const [isData, setisData] = useState(false)

  function handleNewService() {
    setIsServiceShow(true)
  }
  function handleHideService(data) {
    setIsServiceShow(data)
  }

  function handleDeleteData(rowdata) {
    console.log(rowdata.id)
    const requestOptions = {
      method: 'DELETE',

    };
    fetch(`${Baseurl}/api/DevOps/DeleteServiceConnection?organization=movvabhushan220&projectId=8a5fa9cf-4b69-4592-b955-0fa9547a07d9&serviceConnectionId=${rowdata.id}&personalAccessToken=5xaa5uczbjfcz6xj4wptr56tbm2okbgeopoo2zc6w6nnrr5nmu6q`, requestOptions)
      .then(() => {
        alert("Delete Successfully")
        window.location.reload(true)
      });



  }
  useEffect(() => {
    async function getServiceData() {
      try {
        var res = await fetch(`${Baseurl}/api/DevOps/GetServiceConnections?organization=movvabhushan220&project=IAC&personalAccessToken=5xaa5uczbjfcz6xj4wptr56tbm2okbgeopoo2zc6w6nnrr5nmu6q`)
        const result = await res.json();
        if (result.success === true) {
          setdataList(result.serviceConnections)
          setdataitems(result.serviceConnections.value)
        }
        else {
          setisData(true)
        }
      } catch (e) {
        console.log(e)
      }
    }
    getServiceData();

  }, [])

  return (
    <>
      {isServiceShow ? <ManageNewService cusClass={isServiceShow} handleHideService={handleHideService} /> : ""}
      <div className="row RightContent">
        <div className="col-12 mt-3">
          <h4> Service Connections</h4>
          <p className="mt-4 results">
            Service Connections defines the connection information needed to connect to a cloud subscription.
          </p>
          <button className="bg-transparent border-0 ms-2" onClick={handleNewService}>
            <FontAwesomeIcon icon={faPlus} className="text-primary" />
            <span className="ms-2">New</span>
          </button>
          <p className="border-bottom mt-2"></p>
          <div className="row align-items-center manage_form">
            <div className="col-lg-3">
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-transparent border-end-0 py-1 ps-2"
                  id="basic-addon1"
                >
                  <FontAwesomeIcon icon={faFilter} />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 p-1"
                  placeholder="Filter by name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <button className="border bg-transparent button_form py-0 px-3">
                <span className="p-1"> Annotations :</span>
                <span className="fw-bold p-1">
                  <strong>Any</strong>
                </span>
              </button>
            </div>
          </div>
          {isData ? <><div className="bg-light text-center p-5"><h5 className=" fw-bold">Data Not Found</h5></div></> :
            <><p className="mt-2 results">Showing {dataList.count + " - " + dataList.count + " of " + dataList.count} items</p>
              <div className="table-responsive servicedata">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        Name <FontAwesomeIcon icon={faExchange} className="ms-3" />
                      </th>
                      <th>
                        Subscirption Name  <FontAwesomeIcon icon={faExchange} className="ms-3" />
                      </th>
                      <th>
                        Subscription ID<FontAwesomeIcon icon={faExchange} className="ms-3" />
                      </th>
                      <th>
                        Environment <FontAwesomeIcon icon={faExchange} className="ms-3" />
                      </th>
                      <th>Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataitems.map((items) => {
                      return (
                        <tr>
                          <td>{items.name}</td>
                          <td>{items.data.subscriptionName}</td>
                          <td>{items.data.subscriptionId}</td>
                          <td>{items.data.environment}</td>
                          <td><div className="ms-3" onClick={() => handleDeleteData(items)}><FontAwesomeIcon icon={faTrashAlt} className="text-danger" /></div></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default RightContent;
