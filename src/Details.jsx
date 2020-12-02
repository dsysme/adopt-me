import React from "react";

const Details = function details(props) {
  //   return <h1>Goodbye blue sky</h1>;
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Details;
