import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://smashing-earwig-92.hasura.app/v1/graphql",
  }),

  
  cache: new InMemoryCache(),
});

if (typeof document !== "undefined") {
  const target = document.getElementById("root");
  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate // .hydrate will not change the node but only attach eventHandlers
    : ReactDOM.render;
  const render = (Comp: Function) => {
    renderMethod(
      <ApolloProvider client={client}>
        <AppContainer>
          <Comp />
        </AppContainer>
      </ApolloProvider>,
      target
    );
  };

  render(App);
  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./App", () => {
      render(App);
    });
  }
}

export default App;
