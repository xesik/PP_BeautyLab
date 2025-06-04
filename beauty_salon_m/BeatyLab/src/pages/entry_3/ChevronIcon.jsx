const ChevronIcon = ({ className = "", rotate = false }) => {
  return (
    <svg
      width="16"
      height="29"
      viewBox="0 0 16 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-[16px] h-[29px] ${rotate ? 'rotate-90' : ''} ${className}`}
    >
      <path
        d="M0 1.83736L1.576 0L16 14.5L1.576 29L0 27.1626L12.596 14.5L0 1.83736Z"
        fill="black"
      />
    </svg>
  );
};

export default ChevronIcon;
