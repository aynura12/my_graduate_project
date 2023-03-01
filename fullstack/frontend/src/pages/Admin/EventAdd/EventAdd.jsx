import React , { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../EventAdd/eventAdd.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "../../../schema/Admin/adminSchema";
import { useState} from "react";
import axios from "axios";
import { mainContext } from "../../../Context/ContextProvider";
const EventAdd = () => {
  const { events,getEvents } = useContext(mainContext);
  const [state, setState] = useState({
    image: "",
    day: "",
    month: "",
    title: "",
    watch: "",
    name: "",
    color: "",
    requirements: "",
    text: "",
    date: "",
    category: "",
    phone: "",
    website: "",
    location: "",
  });
  const [id, setId] = useState();
 
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (
      !state.image ||
      !state.day ||
      !state.month ||
      !state.title ||
      !state.watch ||
      !state.name ||
      !state.color ||
      !state.requirements ||
      !state.text ||
      !state.date ||
      !state.category ||
      !state.phone ||
      !state.website ||
      !state.location
    )
      return;
    await axios.post("http://localhost:8080/event", state);
   getEvents()
    setState({
      image: "",
      day: "",
      month: "",
      title: "",
      watch: "",
      name: "",
      color: "",
      requirements: "",
      text: "",
      date: "",
      category: "",
      phone: "",
      website: "",
      location: "",
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
    await axios.delete(`http://localhost:8080/event/${id}`);
    getEvents()
  };

  const handleEditClick = (data) => {
    setState({
      image: data.image,
      day: data.day,
      month: data.month,
      title: data.title,
      watch: data.watch,
      name: data.name,
      color: data.color,
      requirements: data.requirements,
      text: data.text,
      date: data.date,
      category: data.category,
      website: data.website,
      phone: data.phone,
      location: data.location,
    });
    setId(data._id);
  };
  const updateData = async (id) => {
    await axios.put(`http://localhost:8080/event/${id}`, state);
  getEvents()
    setState({
      image: "",
      day: "",
      month: "",
      title: "",
      watch: "",
      name: "",
      color: "",
      requirements: "",
      text: "",
      date: "",
      category: "",
      phone: "",
      website: "",
      location: "",
    });
  };
  return (
    <>
      {" "}
      <Helmet>
        <title>EventAdd</title>
      </Helmet>
      <section className="eventAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="eventAdd_title">
                <h2>Event</h2>
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
                    <th scope="col">Day</th>
                    <th scope="col">Month</th>
                    <th scope="col">Title</th>
                    <th scope="col">Watch</th>
                    <th scope="col">Name</th>
                    <th scope="col">Color</th>
                    <th scope="col"> Requirements</th>
                    <th scope="col">Text</th>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Website</th>
                    <th scope="col">Location</th>
                    <th scope="col">Delete data</th>
                    <th scope="col">Update Data</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => {
                    return (
                      <tr key={event._id}>
                        <td data-label="Image">
                          <img
                            src={event.image}
                            style={{ height: 100 }}
                            alt="alt"
                          />
                        </td>
                        <td data-label="Day">{event.day}</td>
                        <td data-label="Month">{event.month}</td>
                        <td data-label="Title">{event.title}</td>
                        <td data-label="Watch">{event.watch}</td>
                        <td data-label="Name">{event.name}</td>
                        <td data-label="Color">{event.color}</td>
                        <td data-label="Requirements" ><p className="large">{event.requirements}</p></td>
                        <td data-label="Text" ><p className="large">{event.text}</p></td>
                        <td data-label="Date">{event.date}</td>
                        <td data-label="Category">{event.category}</td>
                        <td data-label="Phone">{event.phone}</td>
                        <td data-label="Website">{event.website}</td>
                        <td data-label="Location">{event.location}</td>

                        <td data-label="Delete data">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteData(event._id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td data-label="Update data">
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => handleEditClick(event)}
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
                  type="number"
                  {...register("day")}
                  onChange={handleChange}
                  value={state.day}
                  name="day"
                  placeholder="Add Day..."
                />
                {errors.day ? (
                  <span style={{ color: "red" }}>{errors.day.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("month")}
                  onChange={handleChange}
                  value={state.month}
                  name="month"
                  placeholder="Add Month..."
                />
                {errors.month ? (
                  <span style={{ color: "red" }}>{errors.month.message}</span>
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
                  {...register("watch")}
                  onChange={handleChange}
                  value={state.watch}
                  name="watch"
                  placeholder="Add Watch..."
                />
                {errors.watch ? (
                  <span style={{ color: "red" }}>{errors.watch.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("name")}
                  onChange={handleChange}
                  value={state.name}
                  name="name"
                  placeholder="Add Name..."
                />
                {errors.name ? (
                  <span style={{ color: "red" }}>{errors.name.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="color"
                  {...register("color")}
                  onChange={handleChange}
                  value={state.color}
                  name="color"
                  placeholder="Add color..."
                />
                {errors.color ? (
                  <span style={{ color: "red" }}>{errors.color.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("requirements")}
                  onChange={handleChange}
                  value={state.requirements}
                  name="requirementsr"
                  placeholder="Add Requirements..."
                />
                {errors.requirements ? (
                  <span style={{ color: "red" }}>
                    {errors.requirements.message}
                  </span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("text")}
                  onChange={handleChange}
                  value={state.text}
                  name="text"
                  placeholder="Add Text..."
                />
                {errors.text ? (
                  <span style={{ color: "red" }}>{errors.text.message}</span>
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

                <input
                  type="text"
                  {...register("phone")}
                  onChange={handleChange}
                  value={state.phone}
                  name="phone"
                  placeholder="Add Phone..."
                />
                {errors.phone ? (
                  <span style={{ color: "red" }}>{errors.phone.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("website")}
                  onChange={handleChange}
                  value={state.website}
                  name="website"
                  placeholder="Add Website..."
                />
                {errors.website ? (
                  <span style={{ color: "red" }}>{errors.website.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("location")}
                  onChange={handleChange}
                  value={state.location}
                  name="location"
                  placeholder="Add Location..."
                />
                {errors.location ? (
                  <span style={{ color: "red" }}>
                    {errors.location.message}
                  </span>
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

export default EventAdd;
