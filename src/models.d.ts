export interface GateInterface {
  state: boolean;
  startingPosition: PositionInterface;
}

export interface PositionInterface {
  x: number;
  y: number;
}

export interface GateInfoInterface {
  name: string;
  image: string;
}
