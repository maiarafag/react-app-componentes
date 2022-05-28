import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Perfil from "./components/perfil";
import Repositorios from "./components/repositorios";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Perfil />
              <Repositorios />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
