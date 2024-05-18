import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import orderProcess from "../../Assets/OrderProcess.png";
import person from "../../Assets/person.png";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function HeroSection() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div
        id="heroSection"
        className="container-fluid"
        style={{ marginTop: "-15px" }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-sm-0 col-md-1 "></div>
              <div className="col-sm-12 col-md-11">
                <div className="mt-4">
                  <span
                    style={{
                      color: "#F54748",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                      backgroundColor: "#FDECEC",
                      borderRadius: "30px",
                      padding: "11px",
                    }}
                  >
                    Faster and Better
                  </span>
                </div>
                <div className="mt-3">
                  <b>Dialogue </b> <br />
                  <b>Podcasts </b> <br />
                  <div>
                    <b>Generated </b>{" "}
                    <span id="ai" style={{ color: "#F54748" }}>
                      {" "}
                      by AI{" "}
                    </span>
                  </div>
                </div>
                <p>
                  Generate Conversational podcasts using your favourite news
                  articles.
                </p>
                <Link
                  className="btn btn-lg py-3 px-5"
                  style={{ backgroundColor: "#F54748", color: "white" }}
                  to={user ? "podcastGenerator" : "signup"}
                >
                  Try Now
                </Link>
                <a className="pt-2">
                  <img
                    src={orderProcess}
                    style={{ cursor: "pointer", marginBottom: "-40px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <img
              src={person}
              alt=""
              style={{ width: "100%", height: "100%" }}
              className="pb-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
