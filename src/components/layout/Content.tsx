import { useState } from "react";
import styled from "styled-components";
import { GateInterface } from "../../models";
import Button from "../Button";
import Gate from "../Gate";

const Content = () => {
  const [gates, setGates] = useState<GateInterface[]>([]);

  const addNewGate = () => {
    setGates([...gates, { state: true }]);
  };

  return (
    <>
      <Button title="Add" onClick={addNewGate} />
      <GatesContainer>
        {gates.map((gate) => (
          <Gate state={gate.state} />
        ))}
      </GatesContainer>
    </>
  );
};

const GatesContainer = styled.div`
  display: flex;
`;

export default Content;
