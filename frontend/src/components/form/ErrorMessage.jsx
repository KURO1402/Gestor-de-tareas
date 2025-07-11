import React from "react";

const ErrorMessage = ({ error, className = "text-red-400 text-xs" }) => {
  if (!error) return null;
  return <span className={className}>{error.message}</span>;
};

export default React.memo(ErrorMessage);