import styled from "styled-components";

export const ProductsContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background: #150f0f;
  color: #fff;
`;

export const ProductImg = styled.img`
  height: 300px;
  width: 200px;
  margin-left: 20px;
  marging-right: 20px;
    &:hover {
      transition: 0.2s ease-out;
      transform: scale(0.95);
      cursor: pointer;
    }
`;

export const ProductsHeading = styled.h1`
  font-size: 35px;
  text-align: center;
  margin-bottom: 40px;
`;

