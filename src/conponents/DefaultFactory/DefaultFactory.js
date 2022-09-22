import '../../conponents/DefaultFactory/DefaultFactory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faRepeat, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
function DefaultFactory() {
  return (
    <>
      <div className="page_top_bar">
        <div class="container-fluid">
          <div className="row justify-content-between border-bottom p-2">

            <div className="col">

              <span className="ms-3 text_light_grey">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                Validate All
              </span>
              <span className="ms-3 text_light_grey">
                <FontAwesomeIcon icon={faUpload} className="me-2" />
                Publish all
              </span>
            </div>

            <div className="col text-end">
              <span className="pe-4">
                <FontAwesomeIcon icon={faRepeat} />
              </span>
              <span className="">
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultFactory;
