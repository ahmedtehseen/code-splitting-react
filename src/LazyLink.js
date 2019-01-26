import React from "react";

export default () => (
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3>He fetched me using React.lazy</h3>
  </a>
);

// const LazyLinkComponent = React.lazy(() => import("./LazyLink"));

{
  /* <Suspense fallback={<h3>Look I'm lazy...</h3>}>
<LazyLinkComponent />
</Suspense> */
}
