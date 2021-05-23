import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProblem } from "../store/actions/tasks";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Submission() {
  const [des, setDes] = useState("");
  const [problemValue, setProblem] = useState("");
  const [cabinetValue, setCabinet] = useState("");
  const { problem, cabinet } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  
  const _save = () => {
    if (des === "" || problemValue === "" || cabinetValue === "") {
      alert("Fill the form");
    } else {
      let data = {
        _id: uuidv4(),
        description: des,
        problem: problemValue,
        cabinet: cabinetValue,
        status: "unsolved",
      };
      dispatch(saveProblem(data));
      setDes("");
      setCabinet("");
      setProblem("");
    }
  };

  return (
    <div className="container-fuild">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand">Help Desk</h1>
          <form className="d-flex">
            <Link to="/review">
              <button className="btn btn-outline-primary" type="button">
                Review
              </button>
            </Link>
          </form>
        </div>
      </nav>
      <div className="container" style={{ marginTop: 20 }}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Problem Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            placeholder="Detail Description"
            rows="3"
          ></textarea>
        </div>
        <div className="row">
          <div className="col-sm col-md">
            <label htmlFor="typeproblem" className="form-label">
              Type of problem
            </label>
            <select
              className="form-select"
              aria-label="Type of problem"
              id="typeproblem"
              value={problemValue}
              onChange={(e) => setProblem(e.target.value)}
            >
              <option defaultValue>Type of problem</option>
              {problem.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm col-md">
            <label htmlFor="cabinetnumber" className="form-label">
              Cabinet number
            </label>
            <select
              className="form-select"
              aria-label="Type of problem"
              id="cabinetnumber"
              value={cabinetValue}
              onChange={(e) => setCabinet(e.target.value)}
            >
              <option defaultValue>Cabinet number</option>
              {cabinet.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <button type="button" className="btn btn-primary" onClick={_save}>
          Save
        </button>
      </div>
    </div>
  );
}
