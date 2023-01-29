import { gates } from "../../data";
import AddGate from "../AddGate";

interface Props {
  addGateHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Sidebar = (props: Props) => {
  const { addGateHandler } = props;

  return (
    <div>
      Gates
      {gates.map((gate, key) => {
        const { name } = gate;
        return <AddGate key={key} name={name} onClick={addGateHandler} />;
      })}
    </div>
  );
};

export default Sidebar;
