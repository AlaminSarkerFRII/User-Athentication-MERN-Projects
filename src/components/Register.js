import React, { useState } from "react";

const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    const {name,value} = e.target;
    setInputValue((previousValue)=>{
        return { 
            ...previousValue,
            [name] : value,
        }
    })
  };

  return (
    <div className="main my-20 w-1/2 mx-auto rounded-2xl ">
      <div className="content flex flex-row sm:flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center user-info shadow-2xl rounded-md bg-slate-100 py-10 px-10">
          <h2 className="my-4 text-2xl font-bold">Sign Up</h2>
          <input
            className="w-full mb-4 border-emerald-200 border-2 outline-none py-2  px-6 rounded-md "
            type="text"
            name="name"
            placeholder="enter your name"
            onChange={handleChange} value={inputValue.name}
          />
          <input
            className="w-full mb-4 border-emerald-200 border-2 py-2 px-6 outline-none rounded-md "
            type="text"
            name="email"
            placeholder="enter your email"
            onChange={handleChange} value={inputValue.email}
          />
          <input
            className="w-full mb-4 border-emerald-200 border-2 py-2 px-6 rounded-md outline-none "
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={handleChange} value={inputValue.password}
          />
          <input
            className="w-full  mb-4 border-emerald-200 border-2 py-2 px-6 rounded-md outline-none "
            type="password"
            name="cpassword"
            placeholder="confirm password"
            onChange={handleChange} value={inputValue.cpassword}
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
              <a href="/" className="text-blue-600 font-bold">
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
        </div>
        <div className="imgs-logo">
          <h3>Logo Will be here</h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
