import styled from "styled-components";

const AndGate = () => {
  const createWire = () => {};

  return (
    <Wrapper>
      <Body />
      <Bar>
        <Circle onMouseDown={createWire} />
        <Wire />
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  width: 70px;
  height: 50px;
  border: 2px solid black;
  border-radius: 8px 25px 25px 8px;
`;

const Bar = styled.div`
  position: relative;
  width: 30px;
  height: 4px;
  background-color: grey;
`;

const Circle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-radius: 50%;
  right: 0;
  transform: translate(90%, -30%);
`;

export default AndGate;
