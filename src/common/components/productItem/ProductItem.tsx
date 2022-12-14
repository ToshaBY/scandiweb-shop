import React, { ReactElement } from 'react';

import styled from 'styled-components';

const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  align-items: start;
  padding: 16px;
  width: 354px;
  height: 444px;
  border: 1px solid black;

  &:hover {
    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

const ProductImage = styled.img`
  width: 354px;
  height: 330px;
  border: 1px solid violet;
`;

const ProductTitle = styled.div`
  padding-top: 24px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
`;

const Price = styled.div`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
`;

export const ProductItem = (): ReactElement => {
  return (
    <ProductItemWrapper>
      <ProductImage src="#" alt="ProductImage" />
      <ProductTitle>Apollo running Short</ProductTitle>
      <Price>$100</Price>
    </ProductItemWrapper>
  );
};
