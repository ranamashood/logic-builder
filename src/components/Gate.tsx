import { useState } from "react";
import styled from "styled-components";
import { PositionInterface } from "../models";

interface Props {
  state: boolean;
}

interface StyledProps {
  position: PositionInterface;
}

const Gate = (props: Props) => {
  const { state } = props;
  const [previousPosition, setPreviousPosition] = useState<PositionInterface>({
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState<PositionInterface>({ x: 0, y: 0 });

  const dragStartHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setPreviousPosition({
      x: event.clientX - event.currentTarget.offsetLeft,
      y: event.clientY - event.currentTarget.offsetTop,
    });
  };

  const dragEndHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: event.clientX - previousPosition.x,
      y: event.clientY - previousPosition.y,
    });
  };

  return (
    <Wrapper
      position={position}
      draggable={true}
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
    >
      {state ? 1 : 0}
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  background-color: lightgreen;
  padding: 10px;
  position: absolute;
  left: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

export default Gate;
