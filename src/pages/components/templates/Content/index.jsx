import React from "react";
import { styled } from "styled-components";
import { Pad } from "../../../../components/PadPattern/final";
import { Split } from "../../../../components/Split/final";
import { Center } from "../../../../components/CenterPattern/final";
import { Layers } from "../../../../components/Layers/start";
import SideBar from "../../atoms/SideBar";
import RightSide from "../RightSide";

const ContentArea = styled(Pad).attrs(() => ({ padding: "xl" }))`
  background-image: linear-gradient(
    to bottom,
    #0f1623 14rem,
    rgb(242, 242, 242) 14rem
  );
`;

const Header = styled.header`
  color: white;
`;

const Panel = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;

const Content = () => {
  return (
    <ContentArea>
      <Center as={Layers} gutter="l" maxWidth="85rem">
        <Header>
          <h1>Account Settings</h1>
        </Header>
        <Panel>
          <SideBar />
          <RightSide />
        </Panel>
      </Center>
    </ContentArea>
  );
};

export default Content;
