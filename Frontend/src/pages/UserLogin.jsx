import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="p-9">
      <div>
        <div className="w-full flex justify-center mb-10">
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
        </div>
        <form>
          <h3 className="text-xl mb-2">What's your Email?</h3>
          <input
            className="border bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-xm"
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
          />
          <h3 className="text-xl mb-2 mt-10">Enter Password</h3>
          <input
            className="border bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-xm"
            required
            type="password"
            name="pass"
            id="pass"
            placeholder="Password"
          />
          <button className="bg-[#000000] font-semibold text-white mt-12 rounded px-4 py-2 w-full text-lg placeholder:text-xm">
            Login
          </button>
          <p className="text-lg">New Here? <Link to='/capreg' className="mt-3 text-lg text-blue-600">Create new Acocunt</Link></p>
        </form>
      </div>
      <div>
        <button className="bg-[#ffff49] font-semibold text-black mt-5 rounded px-4 py-2 w-full text-lg placeholder:text-xm">
            Sign in as Captain
          </button>
      </div>
    </div>
  );
};

export default UserLogin;
