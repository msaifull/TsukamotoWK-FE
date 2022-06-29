import { Button } from "react-bootstrap";
import React from "react";

function ComponentButton({
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {loading ? "loading..." : children}
    </Button>
  );
}

export default ComponentButton;

// function Button({ name, onClick, loading }) {
//   return (
//     <button onClick={onClick} disabled={loading ? true : false}>
//       {loading ? "Loading..." : name}
//     </button>
//   );
// }

// export default Button;
