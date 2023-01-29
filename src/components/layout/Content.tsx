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
        {gates.map((gate, key) => (
          <Gate key={key} state={gate.state} />
        ))}
      </GatesContainer>
    </>
  );
};

const GatesContainer = styled.div`
  position: relative;
`;

export default Content;
