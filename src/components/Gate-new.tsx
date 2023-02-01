import { useState } from "react";
import styled from "styled-components";
import { PositionInterface } from "../models";
import AndGate from "../svgs/AndGate";

interface Props {
  startingPosition: PositionInterface;
  state: boolean;
}

interface StyledProps {
  position: PositionInterface;
}

const Gate = (props: Props) => {
  const { state, startingPosition } = props;
  const [previousPosition, setPreviousPosition] = useState<PositionInterface>({
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState<PositionInterface>({
    x: startingPosition.x,
    y: startingPosition.y,
  });
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const dragStartHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    // console.log("Mouse: ", event.clientX, event.clientY);
    // console.log(
    //   "Eleme: ",
    //   event.currentTarget.offsetLeft,
    //   event.currentTarget.offsetTop
    // );
    // console.log(
    //   "Subtr: ",
    //   event.clientX - event.currentTarget.offsetLeft,
    //   event.clientY - event.currentTarget.offsetTop
    // );
    setPosition({
      x: event.clientX - event.currentTarget.offsetLeft,
      y: event.clientY - event.currentTarget.offsetTop,
    });
  };

  const dragHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      // console.log("Mouse: ", event.clientX, event.clientY);
      // console.log(
      //   "Eleme: ",
      //   event.currentTarget.offsetLeft,
      //   event.currentTarget.offsetTop
      // );
      setPosition({
        x: event.clientX - previousPosition.x,
        y: event.clientY - previousPosition.y,
      });
    }
  };

  const dragEndHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(false);
    setPosition({
      x: event.clientX - previousPosition.x,
      y: event.clientY - previousPosition.y,
    });
  };

  return (
    <Wrapper
      position={position}
      onMouseDown={dragStartHandler}
      onMouseMove={dragHandler}
      onMouseUp={dragEndHandler}
    >
      {state ? 1 : 0}
      <AndGate />
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  background-color: lightgreen;
  padding: 10px;
  position: absolute;
  left: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
  user-select: none;
`;

export default Gate;
