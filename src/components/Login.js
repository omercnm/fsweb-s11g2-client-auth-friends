import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosAuth";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/login`, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/friendlist");
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <h1 className="flex font-extrabold text-5xl justify-center mt-11">
        LOGIN
      </h1>
      <form
        className="flex flex-col gap-5 text-center mt-5 w-1/4 mx-auto"
        onSubmit={handleSubmit}
      >
        <label className="font-extrabold">
          USERNAME:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="p-1 ml-2 border border-black bg-black text-white"
          />
        </label>
        <label className="font-extrabold">
          PASSWORD:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-1 ml-2 border border-black bg-black text-white"
          />
        </label>
        <button
          type="submit"
          className="border border-black bg-black text-white p-1"
        >
          Submit
        </button>
      </form>
    </>
  );
}
