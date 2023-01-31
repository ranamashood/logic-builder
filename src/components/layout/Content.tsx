import { useState } from "react";
import styled from "styled-components";
import { GateInterface } from "../../models";
import Button from "../Button";
import Gate from "../Gate";
import Sidebar from "./Sidebar";

const Content = () => {
  const [gates, setGates] = useState<GateInterface[]>([]);

  const addGateHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    let state: boolean = false;
    if (event.currentTarget.innerHTML.toLowerCase() !== "input") {
      state = true;
    }
    setGates([
      ...gates,
      {
        state: state,
        startingPosition: {
          x: event.clientX,
          y: event.clientY,
        },
      },
    ]);
  };

  return (
    <Wrapper>
      <Sidebar addGateHandler={addGateHandler} />
      {/* <Button title="Add" onClick={addGateHandler} /> */}
      <GatesContainer>
        {gates.map((gate, key) => (
          <Gate
            key={key}
            state={gate.state}
            startingPosition={gate.startingPosition}
          />
        ))}
      </GatesContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const GatesContainer = styled.div`
  /* position: relative; */
`;

export default Content;
