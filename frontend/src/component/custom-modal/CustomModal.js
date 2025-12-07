import Modal from "react-bootstrap/Modal";
import "./CustomModal.css";

const CustomModal = (props) => {
  return (
    <Modal show={props?.show} onHide={props?.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={props?.onFormSubmit}>
          {props?.children?.map((ele, index) => {
            switch (ele?.type) {
              case "input":
                return (
                  <div key={ele?.key} className="form-floating mt-2">
                    <input
                      name={ele?.key}
                      className="form-control"
                      required
                      defaultValue={props?.selectedRow?.[ele?.key]}
                    />
                    <label>{ele?.label}</label>
                  </div>
                );
                break;
              case "select":
                return (
                  <div key={ele?.key} className="form-floating mt-2">
                    <select
                      name={ele?.key}
                      className="form-select"
                      onChange={(event) => {
                        ele?.onSelect?.(event.target.value);
                      }}
                    >
                      {ele?.options?.map(({ _id, name }, i) => {
                        return (
                          <option value={_id} key={_id}>
                            {name}
                          </option>
                        );
                      })}
                    </select>
                    <label>{ele?.label}</label>
                  </div>
                );
                break;
              case "button":
                return (
                  <button
                    key={ele?.key}
                    type="submit"
                    className="btn btn-primary mt-2 w-100"
                    disabled={props?.action == "view"}
                  >
                    {ele?.label}
                  </button>
                );
                break;
              case "file":
                return (
                  <div key={ele?.key} className="form-floating mt-2">
                    <input
                      name={ele?.key}
                      className="form-control"
                      required
                      type="file"
                      defaultValue={""}
                    />
                    <label>{ele?.label}</label>
                  </div>
                );
                break;
              case "list":
                return (
                  <>
                    <div className="row m-0 p-0">
                      {ele?.data?.map((priceData, inx) => {
                        return (
                          <>
                            {ele?.header?.map((hEle, j) => {
                              return (
                                <div className="form-floating mt-2 col-md-5">
                                  <input
                                    className="form-control"
                                    name={`price[${inx}].${hEle}`}
                                    defaultValue={priceData?.[hEle]}
                                    required
                                  />
                                  <label>{hEle}</label>
                                </div>
                              );
                            })}
                            <i
                              className="bi bi-x-circle col-md-2 d-flex align-self-center text-danger"
                              onClick={() => {
                                ele?.removeItem(inx);
                              }}
                            ></i>
                          </>
                        );
                      })}
                    </div>
                    <button
                      className="btn btn-warning mt-2 w-100"
                      type="button"
                      onClick={() => {
                        ele?.setData({});
                      }}
                    >
                      Add Price Breakup
                    </button>
                  </>
                );
                break;
            }
          })}
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
