import React from "react";
import { useContext } from "react";
import { mainContext } from "../../../Context/ContextProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../NewsAdd/newsAdd.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "../../../schema/Admin/adminSchema";
import { useState } from "react";
import axios from "axios";
const NewsAdd = () => {
  const { news, getNews } = useContext(mainContext);
  const [state, setState] = useState({
    image: "",
    date: "",
    title: "",
    text: "",
    color: "",
    detailText: "",
    detailImage: "",
    detailTitle: "",
    category: "",
  });
  const [id, setId] = useState();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (
      !state.image ||
      !state.date ||
      !state.text ||
      !state.title ||
      !state.color ||
      !state.detailText ||
      !state.detailImage ||
      !state.detailTitle ||
      !state.category
    )
      return;
    await axios.post("http://localhost:8080/news", state);
    getNews();
    setState({
      image: "",
      date: "",
      title: "",
      text: "",
      color: "",
      detailText: "",
      detailImage: "",
      detailTitle: "",
      category: "",
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
    await axios.delete(`http://localhost:8080/news/${id}`);
    getNews();
  };

  const handleEditClick = (data) => {
    setState({
      image: data.image,
      date: data.date,
      title: data.title,
      text: data.text,
      color: data.color,
      detailText: data.detailText,
      detailImage: data.detailImage,
      detailTitle: data.detailTitle,
      category: data.category,
    });
    setId(data._id);
  };
  const updateData = async (id) => {
    await axios.put(`http://localhost:8080/news/${id}`, state);
    getNews();
    setState({
      image: "",
      date: "",
      title: "",
      text: "",
      color: "",
      detailText: "",
      detailImage: "",
      detailTitle: "",
      category: "",
    });
  };
  return (
    <>
      {" "}
      <Helmet>
        <title> News</title>
      </Helmet>
      <section className="newsAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="newsAdd_title">
                <h2> NewsAdd </h2>
                <Link to="/admin">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery_table">
        <div className="container-fluid">
          <div className="row">
            <div>
              {" "}
              <table>
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Date</th>
                    <th scope="col">Title</th>
                    <th scope="col">Text</th>
                    <th scope="col">Color</th>
                    <th scope="col">TextDetail</th>
                    <th scope="col">ImageDetail</th>
                    <th scope="col">Titledetail</th>
                    <th scope="col">Category</th>
                    <th scope="col">Delete data</th>
                    <th scope="col">Update Data</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((n) => {
                    return (
                      <tr key={n._id}>
                        <td data-label="Image">
                          <img
                            src={n.image}
                            style={{ height: 100 }}
                            alt="alt"
                          />
                        </td>
                        <td data-label="Date">{n.date}</td>
                        <td data-label="Title">{n.title}</td>
                        <td data-label="Text">
                          <p className="large">{n.text}</p>
                        </td>
                        <td data-label="Color">{n.color}</td>
                        <td data-label="TextDetail">
                          <p className="large">{n.detailText}</p>
                        </td>
                        <td data-label="ImageDetail">{n.detailImage}</td>
                        <td data-label="Titledetail">{n.detailTitle}</td>
                        <td data-label="Category">{n.category}</td>

                        <td data-label="Delete data">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteData(n._id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td data-label="Update data">
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => handleEditClick(n)}
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
                  {...register("date")}
                  onChange={handleChange}
                  value={state.date}
                  name="date"
                  placeholder="Add Date..."
                />
                {errors.date ? (
                  <span style={{ color: "red" }}>{errors.date.message}</span>
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
                  type="text"
                  {...register("color")}
                  onChange={handleChange}
                  value={state.color}
                  name="color"
                  style={{ backgroundColor: "rgb(238, 79, 16)" }}
                />
                {errors.color ? (
                  <span style={{ color: "red" }}>{errors.color.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("detailText")}
                  onChange={handleChange}
                  value={state.detailText}
                  name="detailText"
                  placeholder="Add DetailText..."
                />
                {errors.detailText ? (
                  <span style={{ color: "red" }}>
                    {errors.detailText.message}
                  </span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("detailImage")}
                  onChange={handleChange}
                  value={state.detailImage}
                  name="detailImage"
                  placeholder="Add DetailImage..."
                />
                {errors.detailImage ? (
                  <span style={{ color: "red" }}>
                    {errors.detailImage.message}
                  </span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("detailTitle")}
                  onChange={handleChange}
                  value={state.detailTitle}
                  name="detailTitle"
                  placeholder="Add DetailTitle..."
                />
                {errors.detailTitle ? (
                  <span style={{ color: "red" }}>
                    {errors.detailTitle.message}
                  </span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("category")}
                  onChange={handleChange}
                  value={state.category}
                  name="category"
                  placeholder="Add Category..."
                />
                {errors.category ? (
                  <span style={{ color: "red" }}>
                    {errors.category.message}
                  </span>
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

export default NewsAdd;
