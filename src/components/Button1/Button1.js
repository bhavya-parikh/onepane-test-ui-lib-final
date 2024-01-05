import React from "react";
import buttonCss from "./Button1.module.css";
function Button1({
  size = "medium",
  color = "primary",
  content = "Button",
  className,
  ...props
}) {
  const buttonClasses = `${buttonCss.button} ${buttonCss[size]} ${buttonCss[color]} ${className}`;
  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
}

export default Button1;
