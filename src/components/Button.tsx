import styled from "styled-components";

interface Props {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 5px 10px;
`;

export default Button;
