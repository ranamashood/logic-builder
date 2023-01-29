import styled from "styled-components";

interface Props {
  name: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const AddGate = (props: Props) => {
  const { name, onClick } = props;

  return <Wrapper onMouseDown={onClick}>{name}</Wrapper>;
};

const Wrapper = styled.div`
  user-select: none;
`;

export default AddGate;
