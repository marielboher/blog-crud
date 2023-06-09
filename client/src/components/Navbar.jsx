import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar-blog">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/create">Create new post</a>
          </li>
          <div className="btn-nav">
            <button className="cssbuttons-io-button">
              {" "}
              Get started
              <div className="iconn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
