import { Pad } from "../PadPattern/final";
import { Center } from "../CenterPattern/final";

export const Description = (props) => (
  <Pad padding="l">
    <Center centerText>{props.children}</Center>
  </Pad>
);
