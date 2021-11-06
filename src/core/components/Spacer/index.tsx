import React, { FunctionComponent } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface SpacerProps {
  style?: StyleProp<ViewStyle>,
  verticalSpace?: number,
  horizontalSpace?: number
}
 
export const Spacer: FunctionComponent<SpacerProps> = ({ style, verticalSpace, horizontalSpace}) => {
  
  let props: any = style || {};
  {
    if (typeof verticalSpace != 'undefined') props.height = verticalSpace;
    if (typeof verticalSpace != 'undefined') props.width = horizontalSpace;
  }

  return (
    <View style={props} />
  );
}
