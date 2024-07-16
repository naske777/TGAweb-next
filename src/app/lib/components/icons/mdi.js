const Mdi = ({ path, size = 24, color = "", anim = true, className = "" }) => {
  const animationClass = anim ? "animationStart" : "";

  return (
    <div>
      <i className={`${color} ${className} d-flex ${animationClass}`}>
        <svg
          className="svgFill"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path d={path} />
        </svg>
      </i>
    </div>
  );
};

export default Mdi;
