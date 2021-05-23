import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../store/actions/tasks";
import { Link } from "react-router-dom";

export default function Review() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  
  useEffect(() => {
    let unsolved = tasks.sort((a, b) => (a.status < b.status ? 1 : -1));
    setData(unsolved);
  }, [tasks]);
  
  // Change status
  const _changeStatus = () => {
    dispatch(changeStatus(id));
  };

  return (
    <div className="container-fuild">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand">Administrator Review</h1>
          <form className="d-flex">
            <Link to="/">
              <button className="btn btn-outline-dark" type="button">
                Back
              </button>
            </Link>
          </form>
        </div>
      </nav>
      <div className="container" style={{ marginTop: 20 }}>
        <table className="table table-striped  table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Problem</th>
              <th scope="col">Description</th>
              <th scope="col">Cabinet</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.problem}</td>
                <td>{item.description}</td>
                <td>{item.cabinet}</td>
                <td>{item.status}</td>
                <td>
                  {item.status !== "solve" && (
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#alertModal"
                      onClick={() => setId(item._id)}
                    >
                      Solve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="alertModal"
        tabIndex="-1"
        aria-labelledby="alertModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="alertModalLabel">
                Problem status
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Problem solved?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-success"
                onClick={_changeStatus}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
