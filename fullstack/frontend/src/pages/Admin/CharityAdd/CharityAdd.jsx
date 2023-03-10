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
const CharityAdd = () => {
  const { rights, getRights } = useContext(mainContext);
  const [id, setId] = useState();
  const [state, setState] = useState({
    title: "",
    text: "",
    color: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (!state.text || !state.title || !state.color) return;
    await axios.post("http://localhost:8080/charity", state);
    getRights();
    setState({
      title: "",
      text: "",
      color: "",
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
    await axios.delete(`http://localhost:8080/charity/${id}`);
    getRights();
  };

  const handleEditClick = (data) => {
    setState({
      title: data.title,
      text: data.text,
      color: data.color,
    });
    setId(data._id);
  };
  const updateData = async (id) => {
    await axios.put(`http://localhost:8080/charity/${id}`, state);
    getRights();
    setState({
      title: "",
      text: "",
      color: "",
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
                    <th scope="col">Title</th>
                    <th scope="col">Text</th>
                    <th scope="col">Color</th>
                    <th scope="col">Delete data</th>
                    <th scope="col">Update Data</th>
                  </tr>
                </thead>
                <tbody>
                  {rights.map((right) => {
                    return (
                      <tr key={right._id}>
                        <td data-label="Title">{right.title}</td>
                        <td data-label="Text">{right.text}</td>
                        <td data-label="Text">{right.color}</td>
                        <td data-label="Delete data">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteData(right._id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td data-label="Update Data">
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => handleEditClick(right)}
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
                  type="text"
                  {...register("title")}
                  onChange={handleChange}
                  value={state.title}
                  name="title"
                  placeholder="Add Title..."
                />
                {errors.title ? (
                  <span style={{ color: "red" }}>{errors.title.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("text")}
                  onChange={handleChange}
                  value={state.text}
                  name="text"
                  placeholder="Add text..."
                />
                {errors.text ? (
                  <span style={{ color: "red" }}>{errors.text.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("color")}
                  onChange={handleChange}
                  value={state.color}
                  name="color"
                 
                  placeholder="Add Color"
                />
                {errors.text ? (
                  <span style={{ color: "red" }}>{errors.text.message}</span>
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

export default CharityAdd;
