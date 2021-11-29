import React from "react";
import styled from "styled-components";

const index = ({ img, text }) => {
  return (
    <Wrap>
      <Image src={img} />
      <Text>{text}</Text>
    </Wrap>
  );
};

export default index;

const Wrap = styled.div`
  cursor: pointer;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  width: 150px;
  height: 150px;
  border-radius: 14px;
  box-shadow: 1px 2px 5px rgb(189 189 189);
  &:hover{
      img,h4{
          transform: scale(1.1);
      }
  }
`;
const Image = styled.img`
  width: 50px;
  margin-bottom: -10px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

`;
const Text = styled.h4`
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

`;
