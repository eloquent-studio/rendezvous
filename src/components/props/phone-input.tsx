"use client";

import React, { useState } from "react";

const phoneItems = [
  {
    id: 1,
    countryCode: "+1",
    name: "United States",
    svg: (
      <svg
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 me-2"
        viewBox="0 0 20 15"
      >
        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        <mask
          id="a"
          width="20"
          height="15"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        </mask>
        <g mask="url(#a)">
          <path
            fill="#D02F44"
            fillRule="evenodd"
            d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
            clipRule="evenodd"
          />
          <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
          <g filter="url(#filter0_d_343_121520)">
            <path
              fill="url(#paint0_linear_343_121520)"
              fillRule="evenodd"
              d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
              clipRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_343_121520"
            x1=".933"
            x2=".933"
            y1="1.433"
            y2="6.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#F0F0F0" />
          </linearGradient>
          <filter
            id="filter0_d_343_121520"
            width="6.533"
            height="5.667"
            x=".933"
            y="1.433"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_343_121520"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_343_121520"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    countryCode: "+44",
    name: "United Kingdom",
    svg: (
      <svg className="h-4 w-4 me-2" fill="none" viewBox="0 0 20 15">
        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        <mask
          id="a"
          width="20"
          height="15"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        </mask>
        <g mask="url(#a)">
          <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
            clipRule="evenodd"
          />
          <path
            stroke="#DB1F35"
            strokeLinecap="round"
            strokeWidth=".667"
            d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
          />
          <path
            fill="#E6273E"
            fillRule="evenodd"
            d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    countryCode: "+61",
    name: "Australia",
    svg: (
      <svg
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 me-2"
        viewBox="0 0 20 15"
      >
        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        <mask
          id="a"
          width="20"
          height="15"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        </mask>
        <g mask="url(#a)">
          <path
            fill="#D02F44"
            fillRule="evenodd"
            d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
            clipRule="evenodd"
          />
          <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
          <g filter="url(#filter0_d_343_121520)">
            <path
              fill="url(#paint0_linear_343_121520)"
              fillRule="evenodd"
              d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
              clipRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_343_121520"
            x1=".933"
            x2=".933"
            y1="1.433"
            y2="6.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#F0F0F0" />
          </linearGradient>
          <filter
            id="filter0_d_343_121520"
            width="6.533"
            height="5.667"
            x=".933"
            y="1.433"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_343_121520"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_343_121520"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    countryCode: "+49",
    name: "Germany",
    svg: (
      <svg
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 me-2"
        viewBox="0 0 20 15"
      >
        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        <mask
          id="a"
          width="20"
          height="15"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        </mask>
        <g mask="url(#a)">
          <path
            fill="#D02F44"
            fillRule="evenodd"
            d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
            clipRule="evenodd"
          />
          <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
          <g filter="url(#filter0_d_343_121520)">
            <path
              fill="url(#paint0_linear_343_121520)"
              fillRule="evenodd"
              d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
              clipRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_343_121520"
            x1=".933"
            x2=".933"
            y1="1.433"
            y2="6.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#F0F0F0" />
          </linearGradient>
          <filter
            id="filter0_d_343_121520"
            width="6.533"
            height="5.667"
            x=".933"
            y="1.433"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_343_121520"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_343_121520"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    id: 5,
    countryCode: "+33",
    name: "France",
    svg: (
      <svg
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 me-2"
        viewBox="0 0 20 15"
      >
        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        <mask
          id="a"
          width="20"
          height="15"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        </mask>
        <g mask="url(#a)">
          <path
            fill="#D02F44"
            fillRule="evenodd"
            d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
            clipRule="evenodd"
          />
          <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
          <g filter="url(#filter0_d_343_121520)">
            <path
              fill="url(#paint0_linear_343_121520)"
              fillRule="evenodd"
              d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
              clipRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_343_121520"
            x1=".933"
            x2=".933"
            y1="1.433"
            y2="6.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#F0F0F0" />
          </linearGradient>
          <filter
            id="filter0_d_343_121520"
            width="6.533"
            height="5.667"
            x=".933"
            y="1.433"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_343_121520"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_343_121520"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
];

export default function PhoneInput() {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  console.log("COUNTRY CODE" + selectedCountryCode);

  const handleCountryCode = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="w-full h-full">
        <label
          htmlFor="Phone Number"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Phone Number
        </label>
        <div className="flex items-center">
          <button
            id="dropdown-phone-button"
            data-dropdown-toggle="dropdown-phone"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
            onClick={toggleDropdown}
          >
            <svg
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 me-2"
              viewBox="0 0 20 15"
            >
              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
              <mask
                id="a"
                width="20"
                height="15"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
              </mask>
              <g mask="url(#a)">
                <path
                  fill="#D02F44"
                  fillRule="evenodd"
                  d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                  clipRule="evenodd"
                />
                <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                <g filter="url(#filter0_d_343_121520)">
                  <path
                    fill="url(#paint0_linear_343_121520)"
                    fillRule="evenodd"
                    d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                    clipRule="evenodd"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_343_121520"
                  x1=".933"
                  x2=".933"
                  y1="1.433"
                  y2="6.1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset="1" stopColor="#F0F0F0" />
                </linearGradient>
                <filter
                  id="filter0_d_343_121520"
                  width="6.533"
                  height="5.667"
                  x=".933"
                  y="1.433"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="1" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_343_121520"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_343_121520"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            {selectedCountryCode ? selectedCountryCode : "+1"}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="relative w-full">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              pattern="[0-9]{10}"
              placeholder="1234567890"
              required
            />
          </div>
        </div>
        {/* <p
          className="mt-2 mb-4 text-sm text-gray-500"
        >
          We will send you an SMS with a verification code.
        </p> */}
      </div>
      {isDropdownOpen && (
        <div
          id="dropdown-phone"
          className="z-10 absolute md:left-1/2 md:bottom-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-52"
        >
          <Country countryCode={"+1"} handleCountryCode={handleCountryCode} />
          <Country countryCode={"+44"} handleCountryCode={handleCountryCode} />
          <Country countryCode={"+69"} handleCountryCode={handleCountryCode} />
          <ul className="py-2 text-sm text-gray-700">
            {/* {phoneItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  name="countryCode"
                  id="countryCode"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    handleCountryCode(item.countryCode);
                  }}
                >
                  <div className="inline-flex items-center">
                    {item.svg}
                    {item.name} {item.countryCode}
                  </div>
                </button>
              </li>
              ))} */}
          </ul>
        </div>
      )}
    </div>
  );
}


const Country = ({
  countryCode,
  full,
  handleCountryCode,
}: {
  countryCode: string;
  full?: boolean;
  handleCountryCode: (countryCode: string) => void;
}) => {
  return (
    <button
      type="button"
      className={`border border-gray-300 hover:bg-lime-200 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none block ${
        full == true &&
        "text-white bg-gray-300 rounded focus:outline-none hover:bg-gray-300"
      }`}
      disabled={full}
      onClick={() => {
        handleCountryCode(countryCode);
      }}
    >
      {countryCode}
    </button>
  );
};
