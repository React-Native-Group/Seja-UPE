import styled from 'styled-components/native';
import { ThemeValue } from '../../providers';
import { Feather, FontAwesome } from '@expo/vector-icons';

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
  max-height: 500px;
  max-width: 400px;
  width: 80%;
  height: 80%;
  padding: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${props => props.white};
`;

export const CloseButton = styled(Feather)`
  font-size: 32px;
  margin-left: 8px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  height: 32px;
  border-radius: 8px;
  justify-content: center;
  padding-left: 8px;
  background-color: ${props => props.blue};
`;

export const HeaderTitle = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  font-size: 14px;
  color: ${props => props.white};
`;

export const Input = styled.TextInput.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  border-color: ${props => props.gray};
  background-color: ${props => props.white};
  margin-right: 24px;
  color: ${props => props.black};
`;

export const InputContainer = styled.View.attrs<ThemeValue>(props => props)<ThemeValue>`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border-color: ${props => props.gray};
  border-width: 1px;
  padding-left: 8px;
  padding-right: 8px;
  height: 32px;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Photo = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  margin-right: 12px;
`;

export const SendIcon = styled(FontAwesome).attrs<ThemeValue>(props => props)<ThemeValue>`
  position: absolute;
  right: 8px;
`;