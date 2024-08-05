import React from "react";
import { Inline } from "../../../../components/InlinePattern/final";
import { Pad } from "../../../../components/PadPattern/final";
import styled from "styled-components";

const Button = styled(Pad).attrs(() => ({
  as: "button",
  padding: ["m", "l"],
}))`
  border-radius: 0.25rem;
  border: ${(props) =>
    props.primary ? "1pppx solid transparent" : "1px solid #0f1623"};
  color: ${(props) => (props.primary ? "white" : "#0f1623")};
  background: ${(props) => (props.primary ? "#0f1623" : "transparent")};
`;

const Buttons = () => {
  return (
    <Inline as={Pad} padding="l" gutter="l" justify="end">
      <Button>cancel</Button>
      <Button primary>save</Button>
    </Inline>
  );
};

export default Buttons;
