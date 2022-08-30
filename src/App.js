import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import styled from "styled-components";
import Robot from "./components/Robot";

const Container = styled.div`
  background-color: darkgray;
  color: green;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
