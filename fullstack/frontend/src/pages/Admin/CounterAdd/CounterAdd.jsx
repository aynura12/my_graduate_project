import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../CauseAdd/causeAdd.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "../../../schema/Admin/adminSchema";
import { useState } from "react";
import axios from "axios";
import { mainContext } from "../../../Context/ContextProvider";
const CounterAdd = () => {
  const { lefts, getLefts } = useContext(mainContext);
  const [id, setId] = useState();
  const [state, setState] = useState({
    count: 0,
    title: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (!state.count || !state.title) return;
    await axios.post("http://localhost:8080/counter", state);
    getLefts();
    setState({
      count: 0,
      title: "",
    });
  };
  const onSubmit = (data) => {
    console.log(data);
    addData();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(adminSchema),
  });

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/counter/${id}`);
    getLefts();
  };

  const handleEditClick = (data) => {
    setState({
      count: data.count,
      title: data.title,
    });
    setId(data._id);
  };
  const updateData = async (id) => {
    await axios.put(`http://localhost:8080/counter/${id}`, state);
    getLefts();
    setState({
      count: 0,
      title: "",
    });
  };

  return (
    <>
      {" "}
      <Helmet>
        <title>Charity</title>
      </Helmet>
      <section className="causeAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="causeAdd_title">
                <h2>Charity</h2>
                <Link to="/admin">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery_table">
        <div className="container">
          <div className="row">
            <div>
              {" "}
              <table>
                <thead>
                  <tr>
                    <th scope="col">Count</th>
                    <th scope="col">Title</th>
                    <th scope="col">Delete data</th>
                    <th scope="col">Update Data</th>
                  </tr>
                </thead>
                <tbody>
                  {lefts.map((left) => {
                    return (
                      <tr key={left._id}>
                        <td data-label="Text">{left.count}</td>
                        <td data-label="Title">{left.title}</td>
                        <td data-label="Delete data">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteData(left._id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td data-label="Update Data">
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => handleEditClick(left)}
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </div>
      </section>
      <section className="gallery_add">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Add data</h2>
                <input
                  type="number"
                  {...register("count")}
                  onChange={handleChange}
                  value={state.count}
                  name="count"
                  placeholder="Add Count..."
                />
                {errors.count ? (
                  <span style={{ color: "red" }}>{errors.count.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("title")}
                  onChange={handleChange}
                  value={state.title}
                  name="title"
                  placeholder="Add title..."
                />
                {errors.title ? (
                  <span style={{ color: "red" }}>{errors.title.message}</span>
                ) : (
                  <></>
                )}

                <div className="buttons">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => addData()}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => updateData(id)}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterAdd;
