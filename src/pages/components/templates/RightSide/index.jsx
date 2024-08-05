import React, { Children } from "react";
import styled from "styled-components";
import { Logo } from "../../atoms/Logo";
import { Pad } from "../../../../components/PadPattern/final";
import { Layers } from "../../../../components/Layers/start";
import { Split } from "../../../../components/Split/final";
import { Columns } from "../../../../components/Column/final";
import Buttons from "../../atoms/Buttons";

const Form = styled.div`
  border-inline-start: 1px solid lightgrey;

  > * + * {
    border-block-start: 1px solid lightgrey;
  }
`;

const Inputs = ({ label, children }) => {
  return (
    <Layers gutter="s" as="label">
      {label}
      {children}
    </Layers>
  );
};

const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid lightgrey;
  color: #303030;
  height: 30px;
`;

const SubLabel = styled.span`
  color: grey;
`;

const RightSide = () => {
  return (
    <Form>
      <Pad as="section" padding="l">
        <Layers gutter="l">
          <Layers as="header" gutter="l">
            <h2>General Information</h2>
            <SubLabel>
              These information will be required for the basic verificationn of
              profile
            </SubLabel>
          </Layers>
          <div>
            <Split gutter="l" fraction="auto-end">
              <Layers gutter="l">
                <Inputs label="Username">
                  <Input type="text" id="username" />
                </Inputs>

                <Inputs label="About">
                  <Input as="textarea" type="text" id="about" />
                  <SubLabel>Tell me a brief about yourself.</SubLabel>
                </Inputs>
              </Layers>

              <Inputs label="Image">
                <Logo inverse size="10rem" />
              </Inputs>
            </Split>
          </div>

          <Columns columns={2}>
            <Inputs label="FirstName">
              <Input type="text" id="firstName" />
            </Inputs>

            <Inputs label="LastName">
              <Input type="text" id="lastname" />
            </Inputs>

            <Inputs label="Linkedin">
              <Input type="text" id="linkedin" />
            </Inputs>

            <Inputs label="Employer">
              <Input type="text" id="employer" />
            </Inputs>
          </Columns>
        </Layers>
      </Pad>

      <Buttons />
    </Form>
  );
};

export default RightSide;
