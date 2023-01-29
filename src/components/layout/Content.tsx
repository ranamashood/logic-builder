import { useState } from "react";
import styled from "styled-components";
import { GateInterface } from "../../models";
import Button from "../Button";
import Gate from "../Gate";
import Sidebar from "./Sidebar";

const Content = () => {
  const [gates, setGates] = useState<GateInterface[]>([]);

  const addGateHandler = () => {
    setGates([...gates, { state: true }]);
  };

  return (
    <Wrapper>
      <Sidebar addGateHandler={addGateHandler} />
      {/* <Button title="Add" onClick={addGateHandler} /> */}
      <GatesContainer>
        {gates.map((gate, key) => (
          <Gate key={key} state={gate.state} />
        ))}
      </GatesContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const GatesContainer = styled.div`
  position: relative;
`;

export default Content;
