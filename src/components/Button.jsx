import classNames from "classnames";

const Button = ({
  variant,
  onClick,
  children,
  isLoading,
  disabled,
  icon,
  ...props
}) => {
  const baseStyles = "py-2 px-4 rounded focus:outline-none";

  const variantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 text-white";
      case "secondary":
        return "bg-gray-300 text-gray-700";
      default:
        return "bg-blue-primary text-white";
    }
  };

  const buttonStyles = classNames(baseStyles, variantStyles(), {
    "opacity-50 cursor-not-allowed": disabled,
  });

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {isLoading && (
        <span className="mr-2">
          <i className="fas fa-spinner animate-spin"></i>
        </span>
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
