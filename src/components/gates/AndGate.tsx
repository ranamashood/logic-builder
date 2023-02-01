import { useEffect, useState } from "react";
import styled from "styled-components";

interface StyledProps {
  wireScale: number;
}

const AndGate = () => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [wireScale, setWireScale] = useState<number>(1);

  const createWire = () => {
    setIsMouseDown(true);
  };

  const extendWire = (event: React.MouseEvent) => {
    setWireScale(event.clientX / 40);
  };

  // useEffect(
  //   (event: React.MouseEvent) => {
  //     if (isMouseDown) {
  //       setWireScale(event.clientX / 50);
  //     }
  //   },
  //   [isMouseDown]
  // );

  return (
    <Wrapper>
      <Body />
      <Bar>
        <Circle onMouseDown={createWire} />
        {isMouseDown && (
          <Circle isEnd={true} onMouseMove={extendWire}>
            <Wire wireScale={wireScale} />
          </Circle>
        )}
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

const Circle = styled.div<{ isEnd?: boolean }>`
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-radius: 50%;
  right: 0;
  transform: translate(90%, -30%) scaleX(1);
`;

const Wire = styled.div<StyledProps>`
  position: absolute;
  width: 30px;
  height: 10px;
  background-color: red;
  left: 120%;
  transform-origin: left;
  transform: scaleX(${(props) => props.wireScale});
`;

export default AndGate;
