import React, { useContext } from "react";
import { Context } from "../context";

const Navbar = () => {
  const { setTheme, theme, themes } = useContext(Context);

  return (
    <>
      <div className="navbar bg-base-100" data-theme={theme}>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">ChatApp</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <a>
                Theme
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                {themes.map((theme, i) => {
                  return (
                    <li key={i}>
                      <button
                        onClick={() => {
                          setTheme(theme);
                        }}
                      >
                        {theme}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
