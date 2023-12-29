'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const buttonStyles = css`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const Button = styled.button`
  ${buttonStyles};
  background-color: #3498db;
  color: #fff;

  &:hover {
    background-color: #2980b9;
  }
`;
