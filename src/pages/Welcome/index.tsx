import React, { Fragment, FunctionComponent } from 'react';
import { Text } from 'react-native';

import { ButtonGoogle, Header } from '../../core/components';
import { Scrollable } from './styles';

export interface WelcomeProps { }

export const Welcome: FunctionComponent<WelcomeProps> = () => {
  return (
    <Fragment>
      <Scrollable>
        <Header canGoBack={true}/>
        <ButtonGoogle 
          onPress={() => {}} 
          text="Entrar com Google" 
        />
        <Text>Teste</Text>
      </Scrollable>
    </Fragment>
  );
}
