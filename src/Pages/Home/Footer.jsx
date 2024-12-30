import { Link } from "react-scroll";
import React from "react";
import { useState, useEffect } from "react";

function Footer() {
     const [navActive, setNavActive] = useState(false);
    const closeMenu = () => {
        setNavActive(false);
      };
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./images/ILHAME_logo__1_-removebg-preview.png" alt="Log"  style={{
          width: '90px',
          height: 'auto',
     
        }} />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
             Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
         mySkills
            </Link>
          </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
         
            <li>
              <a
                href="https://www.linkedin.com/in/ilhame-kaddi-ab2267244/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="var(--primary)"
                  />
                </svg>
              </a>
            </li>

            <li>
  <a
    href="mailto:ilhamkaddi2004@gmail.com"
    className="navbar--content"
    target="_blank"
    rel="noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 33 33"
      fill="none"
    >

      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.33341 7.65479H26.6667C27.8723 7.65479 28.8334 8.61591 28.8334 9.82145V23.1548C28.8334 24.3603 27.8723 25.3215 26.6667 25.3215H6.33341C5.12787 25.3215 4.16675 24.3603 4.16675 23.1548V9.82145C4.16675 8.61591 5.12787 7.65479 6.33341 7.65479ZM6.66675 9.65479V10.8215L16.5001 16.9881L26.3334 10.8215V9.65479H6.66675ZM6.66675 12.9879V23.1548H26.3334V12.9879L16.5001 19.1548L6.66675 12.9879Z"
        fill="var(--primary)"
      />
    </svg>
  </a>
</li>
<li>
  <a
    href="https://github.com/IlhamKaddi"
    className="navbar--content"
    target="_blank"
    rel="noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 33 33"
      fill="none"
      className="footer-icons"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 2.65479C9.29158 2.65479 3.5 8.44637 3.5 15.6548C3.5 21.5755 7.60475 26.5185 13.0958 28.0204C13.7791 28.141 14.0162 27.7292 14.0162 27.376C14.0162 27.0651 14.004 26.2792 14 25.093C10.5465 25.8008 9.84216 23.8367 9.84216 23.8367C9.2926 22.4717 8.5021 22.1356 8.5021 22.1356C7.42964 21.4998 8.59134 21.5148 8.59134 21.5148C9.78225 21.5968 10.3986 22.717 10.3986 22.717C11.4751 24.5642 13.1673 24.0593 13.7835 23.7518C13.8834 22.9816 14.1816 22.453 14.5048 22.1356C11.6017 21.8222 8.55199 20.5325 8.55199 15.4965C8.55199 14.1373 9.04053 12.9748 9.81266 12.0463C9.68621 11.7283 9.27566 10.531 9.94538 8.97534C9.94538 8.97534 10.9627 8.63745 13.9965 10.5805C14.9601 10.323 15.9799 10.1948 16.9996 10.1895C18.0193 10.1948 19.0391 10.323 20.0037 10.5805C23.0375 8.63745 24.0548 8.97534 24.0548 8.97534C24.7245 10.531 24.3139 11.7283 24.1875 12.0463C24.9596 12.9748 25.4482 14.1373 25.4482 15.4965C25.4482 20.5463 22.3903 21.8157 19.4729 22.1215C19.8656 22.4815 20.2275 23.2046 20.2275 24.3058C20.2275 25.9102 20.2086 27.0286 20.2086 27.376C20.2086 27.7292 20.4466 28.1457 21.1374 28.0162C26.6284 26.5185 30.7332 21.5755 30.7332 15.6548C30.7332 8.44637 24.9416 2.65479 16.5 2.65479Z"
        fill="var(--primary)"
      />
    </svg>
  </a>
</li>

          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖  by  <span className="made-by-ilhame"> Ilhame Kaddi </span> </p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;