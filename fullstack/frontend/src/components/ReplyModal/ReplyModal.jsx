import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import { useState, useEffect } from "react";
import axios from "axios";
import { mainContext } from "../../Context/ContextProvider";
import { useContext } from "react";
const ReplyModal = () => {
  const { getComment} = useContext(mainContext);
  const [state, setState] = useState({
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
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Full Name:
                  </label>
                  <div>
                    <input
                      type="text"
                      {...register("fullName")}
                      onChange={handleChange}
                      value={state.fullName}
                      name="fullName"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>

                  {errors.fullName ? (
                    <p style={{ color: "red" }}>{errors.fullName.message}</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Email Address:
                  </label>
                  <div>
                    <input
                      type="email"
                      {...register("email")}
                      onChange={handleChange}
                      value={state.email}
                      name="email"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>

                  {errors.email ? (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Comment:
                  </label>
                  <div>
                    <textarea
                      type="text"
                      {...register("comment")}
                      onChange={handleChange}
                      value={state.comment}
                      name="comment"
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>

                  {errors.comment ? (
                    <p style={{ color: "red" }}>{errors.comment.message}</p>
                  ) : (
                    <></>
                  )}
                </div>
                <button onClick={() => addData()} class="btn btn-warning">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
