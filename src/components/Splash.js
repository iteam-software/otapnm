import React from "react";
import { css } from "@emotion/core";

const Splash = ({ title }) => {
  return (
    <div>
      <div
        className="py-5"
        css={css`
          align-items: center;
          justify-content: center;
          background: url("/assets/blue-sky.jpg") no-repeat center fixed;
          background-size: cover;
          display: flex;
          height: 50vh;
          min-height: 300px;
          position: relative;
          width: 100%;
        `}
      >
        <div
          css={css`
            background-color: rgba(255, 255, 255, 0.2);
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          `}
        ></div>
        <div
          css={css`
            color: #222;
            font-size: 36px;
            letter-spacing: 4px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            white-space: nowrap;
          `}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default Splash;
