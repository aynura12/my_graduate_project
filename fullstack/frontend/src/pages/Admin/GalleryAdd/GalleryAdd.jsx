import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "../../../schema/Admin/adminSchema";
import { useState} from "react";
import axios from "axios";
import "../GalleryAdd/galleryAdd.scss";
import { mainContext } from "../../../Context/ContextProvider";
const GalleryAdd = () => {
  const { gallerys,getGallery } = useContext(mainContext);

  const [id, setId] = useState();
  const [state, setState] = useState({
    image: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (!state.image) return;
    await axios.post("http://localhost:8080/gallery", state);
   getGallery()
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
    resolver: yupResolver(adminSchema),
  });

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/gallery/${id}`);
    getGallery()
  };

  const handleEditClick = (data) => {
    setState({ image: data.image });
    setId(data._id);
  };
  const updateData = async (id) => {
    await axios.put(`http://localhost:8080/gallery/${id}`, state);
   getGallery()
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
                <h2>Gallery</h2>
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
            {" "}
            <div >
              <table>
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Delete data</th>
                    <th scope="col">Update Data</th>
                  </tr>
                </thead>
                <tbody>
                  {gallerys.map((gallery) => {
                    return (
                      <tr key={gallery._id}>
                        <td data-label="Image">
                          <img
                            src={gallery.image}
                            style={{ height: 100 }}
                            alt="alt"
                          />
                        </td>
                        <td data-label="Delete data">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteData(gallery._id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td data-label="Update Data">
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => handleEditClick(gallery)}
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
          </div>
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
                <div className="buttons">
                  {" "}
                  <button
                    type="button"
                    class="btn btn-primary"
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

export default GalleryAdd;
