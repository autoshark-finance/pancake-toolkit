import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <style>
        {`.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:url(#linear-gradient);}.cls-4{clip-path:url(#clip-path-2);}.cls-5{fill:#fff;}.cls-6{clip-path:url(#clip-path-3);}`}
      </style>
      <defs>
        <clipPath id="clip-path" transform="translate(87.86 0)">
          <path
            className="cls-1"
            d="M104.42,1445.39C37.59,1311.27,0,1160,0,1000,0,447.72,447.72,0,1000,0S2000,447.72,2000,1000c0,160-37.59,311.27-104.42,445.39"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient"
          x1="384.42"
          y1="1642.47"
          x2="1804.72"
          y2="345.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4c58ba" />
          <stop offset="1" stopColor="#5cc6c9" />
        </linearGradient>
        <clipPath id="clip-path-2" transform="translate(87.86 0)">
          <circle className="cls-1" cx="1000" cy="1000" r="1000" />
        </clipPath>
        <clipPath id="clip-path-3" transform="translate(87.86 0)">
          <path
            className="cls-1"
            d="M412.14,1460.32c-66.38,54.92-101.8,98.21-101.8,98.21s11.84-113,58.67-253.21h0l94.34-1.37-63.55-81.29h0a1046.3,1046.3,0,0,1,65.86-132.82h0l161.73,60.64L583.63,936.2h0q19.89-19.69,41.67-37.67a642.67,642.67,0,0,1,57.57-42.3h0l178.76,195L980.49,761.15q26.63-1,52.82.25l118.74,289.8L1333.8,853.92h0A526.69,526.69,0,0,1,1394,897.06q19.32,16.11,37.69,34.1h0l-44.78,219.32,168.33-60.64h0a1023.62,1023.62,0,0,1,65,128.24h0L1553.08,1304l100,1.45h0A1268.72,1268.72,0,0,1,1708.27,1556s-36.93-44.34-104.92-100.08h0l17.39-70.41-69.44,30.33h0c-24.82-17.93-52.35-36.2-82.44-53.9h0l14.69-110L1376,1313.67h0q-23.52-10.68-48.48-20.39h0L1303,1105.38l-142,141.47h0q-26.52-4.57-54.09-7.52h0l-98.27-199.12-99,200.7h0q-27.54,3.28-54,8.13h0L711.39,1105.38l-25,192.07h0q-22.56,8.86-43.89,18.54h0l-111.6-64.08,15.24,114.21h0c-28.73,17-55,34.44-78.79,51.57h0l-73.64-32.16,18.47,74.79Z"
          />
        </clipPath>
      </defs>
      <g id="background">
        <g className="cls-2">
          <circle className="cls-3" cx="1087.86" cy="1000" r="1000" />
        </g>
      </g>
      <g id="white_body" data-name="white body">
        <g className="cls-4">
          <path
            className="cls-5"
            d="M1000,2094.64H2087.86L2054,1964.13s-232-872.49-466.46-1220.52-380-555.88-587.56-555.88S646.87,395.58,412.44,743.61-54,1964.13-54,1964.13l-33.84,130.51Z"
            transform="translate(87.86 0)"
          />
        </g>
      </g>
      <g id="mouth_copy" data-name="mouth copy">
        <g className="cls-6">
          <circle className="cls-3" cx="1087.86" cy="1000" r="1000" />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
