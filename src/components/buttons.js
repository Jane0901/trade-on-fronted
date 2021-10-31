import React from 'react'
import styled from 'styled-components'

/* button/btn_small */
const SmallButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  width: 93px;
  height: 36px;
  padding: 14px 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  background: ${(props) => props.theme.primary_200};
  border-radius: 4px;
  border: none;

  /* brand/secondary/purple */
  color: ${(props) => props.theme.secondary};
`
// label：寫按鈕上面的文字
export const ButtonSmall = ({ label }) => <SmallButton>{label}</SmallButton>

/* button/btn_small */
const MediumButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  width: 160px;
  height: 51px;
  padding: 12px 36px;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${(props) => props.theme.primary_200};
  border-radius: 4px;
  border: none;

  /* brand/secondary/purple */
  color: ${(props) => props.theme.secondary};
`
// label：寫按鈕上面的文字
export const ButtonMedium = ({ label }) => <MediumButton>{label}</MediumButton>
