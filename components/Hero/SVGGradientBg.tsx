export default function SVGGradientBg() {
  return (
    <div className="absolute inset-0 w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-full h-full"
          style={{
            aspectRatio: "1512 / 589",
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1512 589"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_10_25)">
              <path
                d="M322.4 372.48C207.557 406.602 137.98 422.99 29.5878 423.955C13.1949 424.101 0 410.691 0 394.298V30C0 13.4315 13.4314 0 30 0H1482C1498.57 0 1512 13.4315 1512 30V379.511C1512 395.288 1499.77 408.434 1484 409.137C1407.55 412.547 1358.03 405.817 1284.08 382.08C1276.56 379.668 1270.36 374.264 1266.67 367.284C1232.77 303.049 1201.26 267.299 1123.74 213.595C1059.41 178.101 1016.15 164.014 929.388 148.368C927.891 148.098 926.327 147.939 924.806 147.903C844.112 146.006 798.802 151.972 719.476 172.433C557.6 235.577 470.029 276.569 330.475 368.71C328.005 370.34 325.237 371.637 322.4 372.48Z"
                fill="url(#paint0_linear_10_25)"
              />
              <path
                d="M322.4 372.48C207.557 406.602 137.98 422.99 29.5878 423.955C13.1949 424.101 0 410.691 0 394.298V30C0 13.4315 13.4314 0 30 0H1482C1498.57 0 1512 13.4315 1512 30V379.511C1512 395.288 1499.77 408.434 1484 409.137C1407.55 412.547 1358.03 405.817 1284.08 382.08C1276.56 379.668 1270.36 374.264 1266.67 367.284C1232.77 303.049 1201.26 267.299 1123.74 213.595C1059.41 178.101 1016.15 164.014 929.388 148.368C927.891 148.098 926.327 147.939 924.806 147.903C844.112 146.006 798.802 151.972 719.476 172.433C557.6 235.577 470.029 276.569 330.475 368.71C328.005 370.34 325.237 371.637 322.4 372.48Z"
                stroke="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_10_25"
                x="-164.5"
                y="-164.5"
                width="1841"
                height="752.956"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="82"
                  result="effect1_foregroundBlur_10_25"
                />
              </filter>
              <linearGradient
                id="paint0_linear_10_25"
                x1="1512"
                y1="179.85"
                x2="18.4502"
                y2="294.309"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CA14AF" />
                <stop offset="0.449226" stopColor="#770F97" />
                <stop offset="1" stopColor="#DA1489" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
