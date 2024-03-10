import React, { useEffect } from "react";
import {Logo} from "../assets";
import { Footer } from "../containers";
import { AuthButton, MainSpinner } from "../components";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { toast } from "react-toastify";
// our custom hook
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { data, isLoading, isError } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    //return back to homescreen
    if (!isLoading && data) {
      navigate("/", { replace: true });
    }
  }, [isLoading, data]);

  //show spinner if loading
  if (isLoading) {
    return <MainSpinner />;
  }

  return (
    <div className="auth-section">
      {/* top-part */}
      <img src={Logo} alt="logo" className="w-10 h-auto object-contain" />

      {/* main-part */}
      <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-3xl lg:text-4xl text-blue-700">
          Welcome to NITUK Tech Club.
        </h1>
        <p className="text-2xl text-gray-600">
          Empowering tomorrow's innovators. Join the Tech Club revolution.
        </p>
        <h2 className="text-2xl text-gray-600">Authenticate</h2>

        <div className=" flex flex-col w-full lg:w-96  items-center justify-start gap-6 rounded-md p-2">
          <AuthButton
            Icon={FaGoogle}
            label={"Sign in with Google"}
            provider={"GoogleAuthProvider"}
          />
          <AuthButton
            Icon={FaGithub}
            label={"Sign in with Github"}
            provider={"GithubAuthProvider"}
          />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Auth;
