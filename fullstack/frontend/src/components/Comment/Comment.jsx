import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import { useState, useEffect } from "react";
// import { format } from 'date-fns'
import "../Comment/comment.scss";
import axios from "axios";
import ReplyModal from "../ReplyModal/ReplyModal";
import { mainContext } from "../../Context/ContextProvider";
import { useContext } from "react";
const Comment = () => {
  const { comments,getComment } = useContext(mainContext);
  const [state, setState] = useState({
    image: "",
    fullName: "",
    email: "",
    comment: "",
  });
  const handleChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (!state.fullName || !state.email || !state.comment) return;
    await axios.post("http://localhost:8080/causeComment", state);
  getComment()
    setState({
      // image: "",
      fullName: "",
      email: "",
      comment: "",
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

  return (
    <div className="causes_detail_comment ">
      <h2 style={{ fontFamily: " Playfair Display, serif", marginTop: "40px" }}>
        Comments
      </h2>
      {comments?.map((comment) => {
        return (
          <div className="detail_comment_bottom" key={comment._id}>
            {/* <div className="w-100">
              <img src={datas.image} alt="img" />
            </div> */}
            <div className="bottom_title">
              <div className="title_left">
                <div className="left">
                  <h4>{comment.fullName}</h4>
                  {/* <span >{format(datas.updateAt, 'yyyy-mm-dd')}</span>
                  <span>{datas.createdAt}</span> */}
                </div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@getbootstrap"
                >
                  Reply
                </button>
              </div>
              <p>{comment.comment}</p>
            </div>
          </div>
        );
      })}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Leave a Comment</h3>
        {/* <input
            type="text"
            {...register("image")}
            onChange={handleChange}
            value={state.image}
            name="image"
            placeholder="Your image..."
          />
          {errors.image ? (
            <span style={{ color: "red" }}>{errors.image.message}</span>
          ) : (
            <></>
          )} */}
        <div>
          <input
            type="text"
            {...register("fullName")}
            onChange={handleChange}
            value={state.fullName}
            name="fullName"
            placeholder="Full Name..."
          />
        </div>

        {errors.fullName ? (
          <p style={{ color: "red" }}>{errors.fullName.message}</p>
        ) : (
          <></>
        )}
        <div>
          {" "}
          <input
            type="email"
            {...register("email")}
            onChange={handleChange}
            value={state.email}
            name="email"
            placeholder="E-mail..."
          />
        </div>

        {errors.email ? (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        ) : (
          <></>
        )}
        <div>
          <textarea
            type="text"
            {...register("comment")}
            onChange={handleChange}
            value={state.comment}
            name="comment"
            placeholder="Leavee a Comment..."
          />
        </div>

        {errors.comment ? (
          <p style={{ color: "red" }}>{errors.comment.message}</p>
        ) : (
          <></>
        )}
        <button onClick={() => addData()}>submit now</button>
      </form>
      <ReplyModal />
    </div>
  );
};

export default Comment;
