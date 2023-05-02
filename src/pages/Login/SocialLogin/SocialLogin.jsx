import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubLogin = () => {
    githubLogin()
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div
        className=" d-flex gap-2 mt-2 px-1"
        role="group"
        aria-label="Button group example"
      >
        <button
          type="button"
          className=" btn btn-bg  "
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>
        <button
          type="button"
          className="btn btn-bg"
          onClick={handleGitHubLogin}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
