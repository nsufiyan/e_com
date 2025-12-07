import "./CustomTable.css";

const CustomTable = (props) => {
  return (
    <div>
      <table className="table table-striped border shadow fs-3">
        <thead>
          <tr>
            {props?.headers?.map((ele, i) => {
              return <th>{ele?.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props?.data?.map((ele, i) => {
            let actionType = props?.headers?.find(
              (eleData) => eleData?.type == "inc-dec"
            )?.type;
            return (
              <tr>
                <td>{i + 1}</td>
                {props?.headers?.map(({ key, type }, i) => {
                  if (i == 0 || !ele?.[key]) {
                    return "";
                  }
                  return (
                    <td>
                      {type == "image" ? (
                        <img
                          className="img-fluid img-thumbnail"
                          src={ele?.[key]}
                          height={100}
                          width={100}
                        />
                      ) : type == "select" ? (
                        <select
                          className="form-select"
                          defaultValue={ele?.status}
                          onChange={(status) => {
                            props?.headers
                              ?.find((head) => head?.type == "select")
                              ?.onChange?.(ele, status?.target?.value);
                          }}
                        >
                          {props?.headers
                            ?.find((head) => head?.type == "select")
                            ?.options?.map(({ label, value }) => {
                              return (
                                <option key={value} value={value}>
                                  {label}
                                </option>
                              );
                            })}
                        </select>
                      ) : (
                        ele?.[key] ?? "NA"
                      )}
                    </td>
                  );
                })}
                {/* <td>{ele?.name}</td>
                <td>{ele?.code}</td> */}
                {!actionType ? (
                  ele?.status == "delivered" ? (
                    <div className="d-flex justify-content-center align-items-center flex-row">
                      <i
                        className={`bi bi-star${
                          ele?.rating >= 1 ? "-fill" : ""
                        }`}
                        onClick={() => {
                          if (ele?.rating || props?.disableRating) {
                            return;
                          }
                          props?.giveRating(ele?._id, 1);
                        }}
                      ></i>
                      <i
                        className={`bi bi-star${
                          ele?.rating >= 2 ? "-fill" : ""
                        }`}
                        onClick={() => {
                          if (ele?.rating || props?.disableRating) {
                            return;
                          }
                          props?.giveRating(ele?._id, 2);
                        }}
                      ></i>
                      <i
                        className={`bi bi-star${
                          ele?.rating >= 3 ? "-fill" : ""
                        }`}
                        onClick={() => {
                          if (ele?.rating || props?.disableRating) {
                            return;
                          }
                          props?.giveRating(ele?._id, 3);
                        }}
                      ></i>
                      <i
                        className={`bi bi-star${
                          ele?.rating >= 4 ? "-fill" : ""
                        }`}
                        onClick={() => {
                          if (ele?.rating || props?.disableRating) {
                            return;
                          }
                          props?.giveRating(ele?._id, 4);
                        }}
                      ></i>
                      <i
                        className={`bi bi-star${
                          ele?.rating >= 5 ? "-fill" : ""
                        }`}
                        onClick={() => {
                          if (ele?.rating || props?.disableRating) {
                            return;
                          }
                          props?.giveRating(ele?._id, 5);
                        }}
                      ></i>
                    </div>
                  ) : (
                    <td style={{ width: "10%" }}>
                      <div className="d-flex justify-content-around">
                        {!props?.hideView && (
                          <i
                            className="bi bi-eye-fill text-secondary"
                            onClick={() => {
                              props?.onViewRowClicked(ele);
                            }}
                          ></i>
                        )}
                        {!props?.hideEdit && (
                          <i
                            className="bi bi-pencil-fill text-primary"
                            onClick={() => {
                              props?.onEditRowClicked(ele);
                            }}
                          ></i>
                        )}
                        {!props?.hideDelete && (
                          <div
                            onClick={() => {
                              props?.onDeleteRowClicked(ele);
                            }}
                          >
                            {props?.customDeleteIcon ? (
                              ele?.status == "packed" ? (
                                props?.customDeleteIcon
                              ) : (
                                ""
                              )
                            ) : (
                              <i className="bi bi-trash-fill text-danger"></i>
                            )}
                          </div>
                        )}
                      </div>
                    </td>
                  )
                ) : (
                  actionType == "inc-dec" && (
                    <td>
                      <div className="d-flex align-self-center">
                        <button
                          className="btn btn-success"
                          onClick={() => props?.onIncreement(ele)}
                        >
                          <i className="bi bi-plus-square"></i>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => props?.onDecreement(ele)}
                        >
                          <i className="bi bi-dash-square"></i>
                        </button>
                      </div>
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
