import React from "react";

export const ShowError = ({ location = {} }) => {
  //   const { data, from, status }
  return location.state ? (
    <h1>
      {location.state.status} {location.state.data.msg}
    </h1>
  ) : (
    <h1>404 : Page not found :(</h1>
  );
};
