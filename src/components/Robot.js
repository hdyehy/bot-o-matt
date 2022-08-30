import { useState } from "react";
import styled from "styled-components";
import { chores } from "../data";

const Container = styled.div`
  border: 1px solid gray;
`;
const TaskContainer = styled.div``;
const Task = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const TaskTitle = styled.h2``;

const Eta = styled.p``;
const TaskButton = styled.button`
  width: 150px;
  height: 40px;
`;

export default function Robot() {
  const [roboBusy, setRoboBusy] = useState(false);
  const [taskComplete, setTaskComplete] = useState([]);

  function milToSecs(time) {
    if (time === 1000) {
      return `${time / 1000} sec`; //fixed for plural grammar mistake. if 1 second, return "sec", otherwise return "secs"
    } else {
      return `${time / 1000} secs`;
    }
  }

  function taskRunner(time, nTask) {
    setRoboBusy(true);

    console.log(`the robot is running the task: ${nTask}`);
    setTimeout(() => {
      console.log(
        `the robot finished the task ,${nTask}, in ${milToSecs(time)}`
      );
      setRoboBusy(false);

      taskComplete.push(nTask);
      setTaskComplete(taskComplete);
    }, time);

    // chores[index]. taskRunner(task.eta)
  }
  return (
    <Container>
      <TaskContainer>
        {chores.map((task, index) => (
          <Task key={index}>
            <TaskTitle>{task.description}</TaskTitle>
            <Eta>Eta: {milToSecs(task.eta)}</Eta>
            <TaskButton
              onClick={() => taskRunner(task.eta, task.description)}
              disabled={roboBusy || taskComplete.includes(task.description)}
            >
              run
            </TaskButton>
          </Task>
        ))}
      </TaskContainer>
    </Container>
  );
}
