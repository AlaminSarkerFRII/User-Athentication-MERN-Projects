import React, { useState } from "react";
import bannerLogo from "../assests/sign-in.png";

const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputValue((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };


  //form submission 

  const handleOnSubmit = (e) =>{
    e.preventDefault()
    console.log("values");
  }



  return (
    <div className="my-20 lg:w-11/12 w-full mx-auto rounded-2xl flex flex-col md:flex-row lg:flex-row-reverse justify-center items-center gap-10 ">
      <form onSubmit={handleOnSubmit} className="flex flex-col justify-center items-center shadow-2xl rounded-md bg-slate-100 py-10 px-10">
        <h2 className="my-4 text-2xl font-bold">Sign Up</h2>
        <input
          className="w-full mb-4 border-emerald-200 border-2 outline-none py-2  px-6 rounded-md "
          type="text"
          name="name"
          placeholder="enter your name"
          onChange={handleChange}
          value={inputValue.name}
        />
        <input
          className="w-full mb-4 border-emerald-200 border-2 py-2 px-6 outline-none rounded-md "
          type="text"
          name="email"
          placeholder="enter your email"
          onChange={handleChange}
          value={inputValue.email}
        />
        <input
          className="w-full mb-4 border-emerald-200 border-2 py-2 px-6 rounded-md outline-none "
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={handleChange}
          value={inputValue.password}
        />
        <input
          className="w-full  mb-4 border-emerald-200 border-2 py-2 px-6 rounded-md outline-none "
          type="password"
          name="cpassword"
          placeholder="confirm password"
          onChange={handleChange}
          value={inputValue.cpassword}
        />

        <input
          className="w-1/2 font-bold bg-gradient-to-r from-indigo-700 hover:bg-gradient-to-l hover:from-indigo-900 text-xl px-3 py-2 cursor-pointer rounded-full"
          type="submit"
          name="submit"
          value="Register"
        />
        <div className="logins my-3 ">
          <h2>
            already have an account{" "}
            <a href="/login" className="text-blue-600 font-bold">
              Please Login Now
            </a>
          </h2>
          <div className="my-6">
            <i className="mr-4 my-6 border-1 bg-red-200 border-solid rounded-full px-4 py-2">
              google
            </i>
            <i className="mr-4 my-6 border-1 bg-red-200 border-solid rounded-full px-4 py-2">
              facebook
            </i>
            <i className="mr-4 my-6 border-1 bg-red-200 border-solid rounded-full px-4 py-2">
              instagram
            </i>
          </div>
        </div>
      </form>
      <div className="my-20 w-full mx-auto">
        <img className="w-full " src={bannerLogo} alt="bannerLogo" />
      </div>
    </div>
  );
};

export default Register;
