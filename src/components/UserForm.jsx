import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/userform.css";

const UserForm = ({
  createUser,
  update,
  updateUser,
  setUpdate,
  isShow,
  setIsShow,
}) => {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(update);
  }, [update]);

  const submit = (data) => {
    if (update) {
      updateUser("/users", update.id, data);
      setUpdate();
    } else {
      createUser("/users", data);
    }

    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    setIsShow(false);
  };

  const handleClose = () => {
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    setIsShow(false);
    setUpdate();
  };

  return (
    <div className={`userform ${isShow && "active"}`}>
      <form className="userform_form" onSubmit={handleSubmit(submit)}>
        <div className="userform_header">
          <h2>{update ? "Update User" : "New User"}</h2>
          <button
            onClick={handleClose}
            className="userform_close"
            type="button"
          >
            x
          </button>
        </div>

        <div className="userform_item">
          <input
            {...register("first_name")}
            id="first_name"
            placeholder="Enter your name"
            className="input"
            type="text"
          />
        </div>

        <div className="userform_item">
          <input
            {...register("last_name")}
            id="last_name"
            placeholder="Enter your last name"
            className="input"
            type="text"
          />
        </div>

        <div className="userform_item">
          <input
            {...register("email")}
            id="email"
            placeholder="Enter your email"
            className="input"
            type="text"
          />
        </div>

        <div className="userform_item">
          <input
            {...register("password")}
            id="password"
            placeholder="*********"
            className="input"
            type="password"
          />
        </div>

        <div className="userform_item">
          <input
            {...register("birthday")}
            id="birthday"
            className="input"
            placeholder="birthday"
            type="date"
          />
        </div>
        <button className="userform_btn">
          {update ? "Update User" : "Add New User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
