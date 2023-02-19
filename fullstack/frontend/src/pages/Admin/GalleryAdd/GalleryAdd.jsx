import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../../schema/formSchema";
import { useState, useEffect, useContext } from "react";
// import { mainContext } from "../../../Context/ContextProvider";
import axios from "axios";
import "../GalleryAdd/galleryAdd.scss";
const GalleryAdd = () => {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    image: "",
  });
  const [id, setId] = useState();

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/gallery");
    setUsers(res.data);
  };

  useEffect(() => {
    addData();
    getData();
  }, []);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (!state.image) return;
    await axios.post("http://localhost:8080/gallery", state);
    getData();
    setState({
      image: "",
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
    resolver: yupResolver(formSchema),
  });

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/gallery/${id}`);
    getData();
  };

  const handleEditClick = (data) => {
    setState({ image: data.image });
    setId(data._id);
  };
  const updateData = async (id) => {
    await axios.put(`http://localhost:8080/gallery${id}`, state);
    getData();
    setState({
      image: "",
    });
  };
  return (
    <>
      <Helmet>
        <title>GalleryAdd</title>
      </Helmet>
      <section className="galleryAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="galleryAdd_title">
                <h2>GalleryAdd</h2>
                <Link to="/admin">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Delete data</th>
              <th scope="col">Update Data</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <img src={user.image} style={{ height: 100 }} alt="alt" />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteData(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleEditClick(user)}
                    >
                      Success
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                <button onClick={() => addData()}>Add</button>
                <button onClick={() => updateData(id)}>update</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryAdd;
