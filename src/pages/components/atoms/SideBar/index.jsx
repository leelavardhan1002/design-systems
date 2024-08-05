import React from "react";
import styled from "styled-components";
import { Layers } from "../../../../components/Layers/start";
import { Logo } from "../Logo";
import { Inline } from "../../../../components/InlinePattern/final";
import { Pad } from "../../../../components/PadPattern/final";

const SideMenu = styled(Layers).attrs(() => ({
  as: "ul",
  gutter: "s",
}))`
  list-style: none;
  padding-left: 0;
`;

const SideMenuItem = styled(Inline).attrs(() => ({
  as: Pad,
  gutter: "l",
  padding: ["m", "l"],
  align: "center",
}))`
  border-inline-start: 0.25rem solid transparent;
  ${(props) =>
    props.active &&
    `
border-inline-start-color: #324972;
background: #1f29371c
`}
`;

const SideBar = () => {
  return (
    <Pad as="nav" padding={["l", "none"]}>
      <SideMenu>
        <SideMenuItem active>
          <Logo square inverse size="1rem" />
          <li>Profile</li>
        </SideMenuItem>
        <SideMenuItem>
          <Logo square inverse size="1rem" />
          <li>Settings</li>
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse size="1rem" />
          <li>Authentication</li>
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse size="1rem" />
          <li>Email</li>
        </SideMenuItem>
        <SideMenuItem>
          <Logo square inverse size="1rem" />
          <li>Plans</li>
        </SideMenuItem>
        <SideMenuItem>
          <Logo inverse size="1rem" />
          <li>APIs</li>
        </SideMenuItem>
      </SideMenu>
    </Pad>
  );
};

export default SideBar;
