import React from "react";

function Icon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="none"
      viewBox="0 0 21 21"
    >
      <path
        fill="currentColor"
        d="M16.031 14.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 019 18c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0016 9c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
      ></path>
    </svg>
  );
}

export default Icon;
