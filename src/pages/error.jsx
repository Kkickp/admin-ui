import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorRoute() {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-special-mainBg text-center p-4">
      <h1 className="text-4xl font-bold text-primary mb-4">Oops!</h1>
      <p className="text-gray-01 mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-03 text-sm">
        <i>{error?.statusText || error?.message || "Page Not Found"}</i>
      </p>
    </div>
  );
}

export default ErrorRoute;

