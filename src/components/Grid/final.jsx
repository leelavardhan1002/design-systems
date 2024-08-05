import { styled } from "styled-components";
import { spaceSchema as spacingSchema } from "../../utils/spaces";
import Card from "./card";

export const Grid = styled.div`
  display: grid;
  gap: ${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth}, 100%), 1fr)
  );
`;

const Cards = () => {
  return (
    <Grid gutter="x" minItemWidth="24rem">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default Cards;
