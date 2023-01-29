import styled from "styled-components";

interface Props {
  state: boolean;
}

const Gate = (props: Props) => {
  const { state } = props;

  return <Wrapper draggable={true}>{state ? 1 : 0}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: lightgreen;
  padding: 10px;
`;

export default Gate;
