import React from "react";
import buttonCss from "./Button2.module.css";
function Button2({
  size = "small",
  color = "alert",
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

export default Button2;
