import React, { Fragment, FunctionComponent } from 'react';
import { Text } from 'react-native';

import { Header } from '../../core/components';
import { Scrollable } from './styles';

export interface WelcomeProps { }

export const Welcome: FunctionComponent<WelcomeProps> = () => {
  return (
    <Fragment>
      <Scrollable>
        <Header canGoBack={true}/>
        <Text>Teste</Text>
      </Scrollable>
    </Fragment>
  );
}
