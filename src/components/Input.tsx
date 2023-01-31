interface Props {
  state: boolean;
}

const Input = (props: Props) => {
  const { state } = props;

  return <div>{state ? 1 : 0}</div>;
};

export default Input;
