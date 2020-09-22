import React from 'react';
import styled from 'styled-components';

interface ITitle {
  value: string | null;
}

const H3 = styled.h3`
  font-size: 28px;
  font-weight: 400;
`;

const H4 = styled.h4`
  font-size: 20px;
  font-weight: 400;
`;


export const TitleH3 = ({ value = 'NA' }: ITitle) => <H3>{value}</H3>;
export const TitleH4 = ({ value = 'NA' }: ITitle) => <H4>{value}</H4>;
