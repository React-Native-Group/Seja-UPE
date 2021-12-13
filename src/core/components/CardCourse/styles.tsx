import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export const Container = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: column;
  height: 170px;
  elevation: 3;
  border-radius: 8px;
  background-color: ${props => props.white};
`;

export const Footer = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  background-color: ${props => props.blue};
  min-height: 48px;
  width: 100%;
`;

export const FooterLabel = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 24px;
  text-align: center;
  color: #e3e3e3;
`;

export const BannerContainer = styled.View`
  flex: 1;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 100%;
`;
