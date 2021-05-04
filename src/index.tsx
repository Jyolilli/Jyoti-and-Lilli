import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
// Your top level component
import App from "./App";
// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://smashing-earwig-92.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});
// Render your app
if (typeof document !== "undefined") {
  const target = document.getElementById("root");
  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;
  const render = (Comp: Function) => {
    renderMethod(
      <ApolloProvider client={client}>
        <AppContainer>
          <Comp />
        </AppContainer>
        ,
      </ApolloProvider>,
      target
    );
  };
  // Render!
  render(App);
  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./App", () => {
      render(App);
    });
  }
}
// Export your top level component as JSX (for static rendering)
export default App;
