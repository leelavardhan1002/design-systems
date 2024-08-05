import styled from "styled-components";
import { Inline } from "../../../../components/InlinePattern/final";
import { Pad } from "../../../../components/PadPattern/final";
import { Logo } from "../../atoms/Logo";

const MenuContainer = styled(Inline).attrs({
  as: Pad,
  padding: ["l", "xl"],
  gutter: "l",
  align: "center",
  stretch: 1,
})`
  background-color: #0f1623;
  color: white;
  border-block-end: 1px solid #303030;
`;

const NavMenu = styled(Inline).attrs({
  as: "ul",
  gutter: "s",
})`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SearchBar = styled(Pad).attrs(() => ({
  as: "input",
  padding: ["m", "l"],
}))`
  background: #1f2937;
  border: none;
  border-radius: 0.25rem;
  color: white;
`;

const Item = styled(Pad).attrs(() => ({
  padding: ["s", "m"],
  as: "li",
}))`
  background: ${(props) => (props.active ? "#1f2937" : "transparent")};
  border-radius: 0.25rem;
  list-style: none;
`;

const Menubar = () => {
  return (
    <MenuContainer>
      <Logo size="2rem" />
      <nav>
        <NavMenu>
          <Item active>Overview</Item>
          <Item>Position</Item>
          <Item>Candidates</Item>
          <Item>Employer</Item>
        </NavMenu>
      </nav>
      <SearchBar type="text" placeholder="Search" />
      <Logo square size="1.5rem" />
      <Logo size="2rem" />
    </MenuContainer>
  );
};

export default Menubar;
