import React, { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export interface StackRoutesProps { }
 
export const StackRoutes: FunctionComponent<StackRoutesProps> = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        options={{
          headerShown: false
        }}
      /> */}
    </Stack.Navigator>
  );
}

