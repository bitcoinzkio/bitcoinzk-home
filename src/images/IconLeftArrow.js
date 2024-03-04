const IconLeftArrow = ({ color = "#7622FF" }) => (
  <svg
    width="30"
    height="12"
    viewBox="0 0 30 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_182_2838)">
      <path
        d="M3.405 7H30V5H3.405L7 1.262L5.773 0L0.607 5.372L0 5.996L0.00300217 6L0 6.004L0.607 6.628L5.773 12L7 10.738L3.405 7Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_182_2838">
        <rect
          width="30"
          height="12"
          fill={color}
          transform="matrix(-1 0 0 1 30 0)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default IconLeftArrow;
