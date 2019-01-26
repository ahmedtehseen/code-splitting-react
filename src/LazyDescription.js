import React from "react";

export default () => <h3>Dynamic import got me here!</h3>;

// state = {
//   FunComponent: null
// };

// componentDidMount() {
//   setTimeout(() => {
//     import("./LazyDescription").then(module =>
//       this.setState({ FunComponent: module.default })
//     );
//   }, 3000);
// }

// {this.state.FunComponent !== null ? (
//   <this.state.FunComponent />
// ) : (
//   <h3>Fetching dynamically imported component...</h3>
// )}
