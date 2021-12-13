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
  background-color: ${({ isOwner, ...props }) => isOwner ? props.chatOwnBackgroundColor : props.chatBackgroundColor};
  border-radius: 12px;
  padding: 4px;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 65%;
`;

export const MessageText = styled.Text.attrs<ChatProps>(props => props)<ChatProps>`
  color: ${({ isOwner, ...props }) => isOwner ? props.chatOwnTextColor : props.chatTextColor};
  font-size: 14px;
  font-weight: bold;
`;

export const ViewAlign = styled.View.attrs<ChatProps>(props => props)<ChatProps>`
  flex: 1;
  flex-direction: row;
  margin-top: ${({ isOwner }) => isOwner ? 16 : 2}px;
  align-items: center;
  justify-content: ${({ isOwner }) => isOwner ? "flex-end" : "flex-start"};
`;

export const Photo = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  margin-right: 12px;
`;

export const Username = styled.Text`
  margin-top: 16px;
  padding-left: 56px;
  font-weight: bold;
  font-size: 10px;
`;