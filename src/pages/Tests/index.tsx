import React, { FunctionComponent } from 'react';

import { MapView, PageLayout, TitleOutline } from '../../core/components';

export interface TestsProps { }

export const Tests: FunctionComponent<TestsProps> = () => {

  return (
    <PageLayout 
      canScroll={true} 
      showHeader={true} 
      canGoBack={true}
    >
      <TitleOutline title="Teste de mapa" />

      <MapView 
        height="200px"
        region={{
          latitude: -8.8833723,
          longitude: -36.4970813,
          latitudeDelta: 0,
          longitudeDelta: 0.003,
        }}
        points={[
          {
            title: 'Universidade de Pernambuco',
            description: 'Campus Garanhuns',
            coords: {
              latitude: -8.8833723,
              longitude: -36.4970813
            }
          }
        ]}        
      />
    </PageLayout>
  );
}