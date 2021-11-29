import React from "react";
import styled from "styled-components";
import Ways from "../JoinWay/index";
import CreateAccIcon from "./ion_person-add.svg";
import LoginAccIcon from "./ion_person.svg";

const index = () => {
  return (
    <Container>
      <Text>
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Text>
      <JoinWays>
        <Ways img={CreateAccIcon} text="Create Account" />
        <Ways img={LoginAccIcon} text="Log In" />
      </JoinWays>
    </Container>
  );
};

export default index;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Text = styled.div`
h1{
    font-size: 3rem;
    font-weight: 100;
    margin: 0;
}
`;
const JoinWays = styled.div`
  display: flex;
`;
