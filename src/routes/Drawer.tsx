import React, { FunctionComponent } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Welcome } from '../pages';

const Drawer = createDrawerNavigator();

export interface DrawerRoutesProps { }
 
export const DrawerRoutes: FunctionComponent<DrawerRoutesProps> = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false
      }}
    >
      <Drawer.Screen 
        name="Welcome" 
        component={Welcome} 
      />
    </Drawer.Navigator>
  );
}
