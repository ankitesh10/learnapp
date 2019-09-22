import React from "react";

import TimeSelectButton from "./TimeSelectButton";

import "./header.scss";
import "../typography.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.btnRef = React.createRef();
    this.headerRef = React.createRef();

  }

  componentDidMount() {
    this.btnRef.current.addEventListener("click", this.onBurgerClick);
  }

  

  onBurgerClick = () => {
    this.btnRef.current.classList.toggle("nav__burger--active");
  };

  render() {
    return (
      <header ref={this.headerRef} className="header">
        <nav className="nav">
          <ul className="nav__list">
            <div className="container">
              <div className="row align-items-center">
                <li className="nav__item col-md-5">
                  <img src="img/logo-white.svg" alt="logo" className="logo" />
                </li>
                <li className="nav__item col-md-7">
                  <button ref={this.btnRef} className="nav__burger"></button>

                  <div className="nav__sub">
                    <a href="./" className="nav__sub-item nav__link">
                      All Courses
                    </a>
                    <a href="./" className="nav__sub-item nav__link">
                      Live classes
                    </a>
                    <button className="nav__sub-item btn btn-white u-mr-s">
                      Enroll
                    </button>
                    <button className="nav__sub-item btn btn-outline">
                      Sign in <span>&rarr;</span>
                    </button>
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </nav>

        <div className="header__text-container">
          <h1 className="heading-1">
            Live classes taught by <br /> practioners
          </h1>
          <div className="header__point u-mt-l">
            <svg>
              <use xlinkHref="img/sprite.svg#live-qa-blue"></use>
            </svg>
            <p>Get the questions answered realtime</p>
          </div>
          <div className="header__point">
            <svg>
              <use xlinkHref="img/sprite.svg#live-play-blue"></use>
            </svg>
            <p>Recording available for 5 days</p>
          </div>
        </div>

        <TimeSelectButton />
      </header>
    );
  }
}

export default Header;
