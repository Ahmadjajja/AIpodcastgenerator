import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";

const initialState = { email: "" };
export default function ForgetPass() {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    setIsLoading(true);
    const { email } = state;
    try {
      await sendPasswordResetEmail(auth, email);
      // Password reset email sent successfully
      toast.success("Password reset email sent");
      navigate("/login");
      // Add logic to show success message to the user
    } catch (error) {
      // Error occurred, handle it
      toast.error("Error sending password reset email:", error.message);
      // Add logic to show error message to the user
    }
    setIsLoading(false);
  };

  return (
    <div className="mvh-100 loginPage d-flex justify-content-center align-items-center">
      <div className="container ">
        <div className="row">
          <div className="col">
            <Link className="btn btn-home" to="/" style={{ color: "#F54748" }}>
              <BiArrowBack />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card  w-100">
              <div className="div card-body">
                <h3 style={{ color: "#F54748" }}>Forget Password</h3>
                <form onSubmit={handleSubmit}>
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <br />
                  <div className="input-group flex-nowrap">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email here to forget your password"
                      aria-label="Email"
                      name="email"
                      required
                      onChange={handleChange}
                      style={{ backgroundColor: "#FDECEC" }}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn  loginButton mt-3"
                    >
                      {!isLoading ? (
                        "Forget Password Now"
                      ) : (
                        <div className="spinner-border spinner-border-sm"></div>
                      )}
                    </button>
                  </div>
                </form>
                <div style={{ position: "relative" }} className="pt-2">
                  <span className="OR text-center">
                    <i className="fa-solid fa-o"></i>
                    <i className="fa-solid fa-r"></i>
                  </span>
                  <hr />
                </div>
                <div className="text-center">
                  Already have account?{" "}
                  <span>
                    <Link to="/login" style={{ color: "#F54748" }}>
                      Login
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
