import styled from "styled-components/native";
import { ThemeValue } from "../../providers";

export interface ChatProps extends ThemeValue {
  isOwner: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
`;

export const MessageContainer = styled.View.attrs<ChatProps>(props => props)<ChatProps>`
  background-color: ${({ isOwner, ...props }) => isOwner ? props.chatOwnBackgroundColor : props.chatTextBackgroundColor};
  border-radius: 12px;
  padding: 4px;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 65%;
  margin-bottom: ${({ isOwner }) => isOwner ? '0px' : '8px'};
`;

export const MessageText = styled.Text.attrs<ChatProps>(props => props)<ChatProps>`
  color: ${({ isOwner, ...props }) => isOwner ? props.chatOwnTextColor : props.chatTextColor};
  font-size: 14px;
  font-weight: bold;
`;

export const ViewAlign = styled.View.attrs<ChatProps>(props => props)<ChatProps>`
  flex: 1;
  flex-direction: row;
  margin-top: ${({ isOwner }) => isOwner ? 8 : 2}px;
  align-items: center;
  justify-content: ${({ isOwner }) => isOwner ? "flex-end" : "flex-start"};
`;

export const Photo = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  margin-right: 12px;
`;

export const Username = styled.Text.attrs<ThemeValue>(props => props)<ThemeValue>`
  margin-top: 16px;
  padding-left: 56px;
  font-weight: bold;
  font-size: 10px;
  color: ${props => props.black};
`;