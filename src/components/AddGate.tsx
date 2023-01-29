interface Props {
  name: string;
  onClick: () => void;
}

const AddGate = (props: Props) => {
  const { name, onClick } = props;

  return <div onMouseDown={onClick}>{name}</div>;
};

export default AddGate;
