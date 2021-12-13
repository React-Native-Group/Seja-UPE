import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { ThemeValue } from '../../providers';
import { VerticalContent } from '../VerticalContent';
import { HorizontalContent } from '../HorizontalContent';

export const ModalContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.8);
`;

export const ViewContainer = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  margin: 24px;
  border-radius: 8px;
  max-height: 400px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.white};
`;

export const RobotBanner = styled.Image.attrs<ThemeValue>(props => props)<ThemeValue>`
  width: 128px;
  height: 128px;
`;

export const Vertical = styled(VerticalContent)`
  justify-content: center;
  align-items: center;
`;

export const Horizontal = styled(HorizontalContent)``;

export const ButtonsRow = styled.View`
  width: 100%;
  height: 64px;
  padding: 8px;
`;

export const Like = styled(AntDesign)`
  margin-right: 4px;
`;

export const Dislike = styled(AntDesign)`
  margin-left: 4px;
`;

export const Star = styled(FontAwesome)`
  margin-left: 4px;
  margin-right: 4px;
`;

export const Clickable = styled.TouchableOpacity``;

export const RobotText = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
  color: ${props => props.blue};
`;
