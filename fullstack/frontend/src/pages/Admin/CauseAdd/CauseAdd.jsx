import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../CauseAdd/causeAdd.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "../../../schema/Admin/adminSchema";
import { useState} from "react";
import axios from "axios";
import { mainContext } from "../../../Context/ContextProvider";
const CauseAdd = () => {
  const { causes,getCause } = useContext(mainContext);
  const [id, setId] = useState();
  const [state, setState] = useState({
    image: "",
    title: "",
    text: "",
    goal: "",
    raised: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (
      !state.image ||
      !state.text ||
      !state.title ||
      !state.goal ||
      !state.raised
    )
      return;
    await axios.post("http://localhost:8080/cause", state);
    getCause();
    setState({
      image: "",
      title: "",
      text: "",
      goal: "",
      raised: "",
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
    await axios.delete(`http://localhost:8080/cause/${id}`);
    getCause()
  };

  const handleEditClick = (data) => {
    setState({
      image: data.image,
      title: data.title,
      text: data.text,
      goal: data.goal,
      raised: data.raised,
    });
    setId(data._id);
  };
  const updateData = async (id) => {
    await axios.put(`http://localhost:8080/cause/${id}`, state);
   getCause()
    setState({
      image: "",
      title: "",
      text: "",
      goal: "",
      raised: "",
    });
  };

  return (
    <>
      {" "}
      <Helmet>
        <title>Cause</title>
      </Helmet>
      <section className="causeAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="causeAdd_title">
                <h2>Cause</h2>
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
            <div className="col-lg-12 col-md-12">
              {" "}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Text</th>
                    <th scope="col">Goal</th>
                    <th scope="col">Raised</th>
                    <th scope="col">Delete data</th>
                    <th scope="col">Update Data</th>
                  </tr>
                </thead>
                <tbody>
                  {causes.map((cause) => {
                    return (
                      <tr key={cause._id}>
                        <td>
                          <img
                            src={cause.image}
                            style={{ height: 100 }}
                            alt="alt"
                          />
                        </td>

                        <td>{cause.title}</td>
                        <td>{cause.text}</td>
                        <td>{cause.goal}</td>
                        <td>{cause.raised}</td>

                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteData(cause._id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => handleEditClick(cause)}
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
                  {...register("image")}
                  onChange={handleChange}
                  value={state.image}
                  name="image"
                  placeholder="Add Image..."
                />
                {errors.image ? (
                  <span style={{ color: "red" }}>{errors.image.message}</span>
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
                  type="number"
                  {...register("goal")}
                  onChange={handleChange}
                  value={state.goal}
                  name="goal"
                  placeholder="Goal..."
                />
                {errors.goal ? (
                  <span style={{ color: "red" }}>{errors.goal.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="number"
                  {...register("raised")}
                  onChange={handleChange}
                  value={state.raised}
                  name="raised"
                  placeholder="Add Raised..."
                />
                {errors.raised ? (
                  <span style={{ color: "red" }}>{errors.raised.message}</span>
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

export default CauseAdd;
