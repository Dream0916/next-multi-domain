import { SeatStyleName } from "@/config/constants";

interface SeatsProps {
  taken: boolean;
  text: string;
  visiable: boolean;
}

const SeatElement = (props: SeatsProps) => {
  const { taken, text, visiable } = props;
  let className;
  if (taken) {
    className = SeatStyleName.taken;
  } else {
    className = SeatStyleName.empty;
  }
  if (!visiable) {
    className += " invisible";
  }

  return <div className={className}>{text}</div>;
};

export default SeatElement;
