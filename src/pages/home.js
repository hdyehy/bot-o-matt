import React, { useState } from "react";
import styled from "styled-components";

import RoboBuild from "../components/RoboBuild";

const Container = styled.div``;

const Header = styled.div``;
const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BeginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Begin = styled.button`
  background-color: transparent;
  color: green;
`;

export default function Home() {
  const [active, setActive] = useState("default");

  return (
    <Container>
      <Header>
        <Title>Welcome to bot-o-mat 8000</Title>
        <BeginContainer>
          <Begin onClick={() => setActive("renderRB")}>
            click here to begin
          </Begin>
        </BeginContainer>
      </Header>
      {active === "renderRB" && <RoboBuild />}
    </Container>
  );
}
