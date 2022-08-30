import { typesRobot } from "../data";
import styled from "styled-components";
import { useState } from "react";
import Robot from "./Robot";

const Container = styled.div``;
const BuildText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const NameText = styled.p``;
const TypeText = styled.p``;

//forms
const RoboForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Name = styled.div``;
const NameInput = styled.input``;
const Types = styled.div``;
const TypesSelect = styled.select``;
const RobotSubmit = styled.button``;

const RoboGreeting = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default function RoboBuild() {
  const [roboType, setRoboType] = useState("");
  const [roboName, setRoboName] = useState("");
  const [rActive, setActive] = useState("default");

  function buildFunction(e) {
    if (roboName === "") {
      console.log("please enter a name");
    } else {
      setActive("renderR");
      console.log(`${roboName}, your ${roboType} is ready`);
    }
  }

  const handleType = (event) => {
    setRoboType(event.target.value);
  };
  const handleName = (event) => {
    setRoboName(event.target.value);
  };

  return (
    <Container>
      <BuildText>
        <NameText>Please name your robot!</NameText>
        <TypeText> Select the type of robot you want!</TypeText>
      </BuildText>
      {/* robot form */}
      <RoboForm>
        <Name>
          <NameInput
            type="text"
            placeholder="name"
            id="nameInput"
            onChange={handleName}
          />
        </Name>
        <Types>
          <TypesSelect onChange={handleType}>
            {typesRobot.map((option, index) => (
              <option key={index} value={option.type}>
                {option.type}
              </option>
            ))}
          </TypesSelect>
        </Types>
        <RobotSubmit onClick={() => buildFunction()}>
          Build your robot!
        </RobotSubmit>
      </RoboForm>
      {rActive === "renderR" && (
        <RoboGreeting>
          {roboName}, your {roboType} robot is ready
        </RoboGreeting>
      )}
      {rActive === "renderR" && <Robot />}
    </Container>
  );
}
