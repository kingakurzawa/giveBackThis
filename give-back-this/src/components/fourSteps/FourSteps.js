import React from "react";
// import { NavLink } from "react-router-dom";
import "./fourSteps.scss";

class FourSteps extends React.Component {
  render() {
    return (
      <div className="fourSteps">
        <div className="container">
          <h2>Wystarczą 4 proste kroki</h2>
          <svg
            className="decoration"
            xmlns="http://www.w3.org/2000/svg"
            width="253"
            height="33"
            viewBox="0 0 253 33"
          >
            >
            <defs />
            <defs>
              <clipPath id="a">
                <path fill="none" d="M0 0h253v33H0z" />
              </clipPath>
            </defs>
            <g
              fill="none"
              stroke="#1a1818"
              stroke-linecap="round"
              stroke-miterlimit="10"
              clip-path="url(#a)"
            >
              <path
                stroke-width="1.788"
                d="M126.495 27.426l8.965-8.732-8.965-8.732-8.955 8.732 8.965 8.732"
              />
              <path
                stroke-width="1.788"
                d="M126.495 18.712l8.965-8.732-8.965-8.732-8.955 8.732z"
              />
              <path stroke-width="1.811" d="M99.222 17.154H.906" />
              <path
                stroke-width="1.788"
                d="M154.236 17.162l-5.638 5.491-11.054-10.765 2.155-2.1 4.679 4.558-4.679 4.558-13.21-12.866-13.19 12.866-4.678-4.561 4.679-4.558 2.155 2.1-11.053 10.766-5.638-5.491"
              />
              <path stroke-width="1.811" d="M252.094 17.154h-98.316" />
              <path
                stroke-width="1.788"
                d="M121.307 26.678l5.193-5.193 5.058 5.058-5.193 5.193z"
              />
              <path
                stroke-width="1.788"
                d="M158.362 21.965h-4.3l-5.428-5.287-9.673 9.422-12.464-12.14-12.464 12.14-9.673-9.422-5.428 5.287h-4.3"
              />
            </g>
          </svg>
          <div className="fourSteps-box">
            <div className="fourSteps-item">
              <img
                src="../../assets/Background-Form.jpg"
                alt="t-shirt img"
              ></img>
              <h3>Wybierz rzeczy</h3>
              <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className="fourSteps-item">
              <img src="../../assets/Icon2.png" alt="bag img"></img>
              <h3>Spakuje je</h3>
              <p>skorzystaj z worków</p>
            </div>
            <div className="fourSteps-item">
              <img src="../../assets/Icon3.png" alt="loupe img"></img>
              <h3>Zdecyduj komu chcesz pomóc</h3>
              <p>wybierz zaufane miejsce</p>
            </div>
            <div className="fourSteps-item">
              <img src="../../assets/Icon4.png" alt="round arrows img"></img>
              <h3>Zamów kuriera</h3>
              <p>kurier przyjedzie w dowolnym terminie</p>
            </div>
          </div>
        </div>
        <button className="bigBtn">
          oddaj rzeczy
          {/*
          <NavLink to="/login">
            <li>Login</li>
          </NavLink> */}
        </button>
      </div>
    );
  }
}
export default FourSteps;
