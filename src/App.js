import TopBar from "./components/TopBar";
import User from "./components/User";
import Repos from "./components/Repos";

import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="sm">
      <TopBar />
      <User />
      <Repos />
    </Container>
  );
};

export default App;