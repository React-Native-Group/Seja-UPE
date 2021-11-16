import React, { FunctionComponent } from 'react';
import { PageLayout } from '../../core/components';

export interface WelcomeProps { }

export const Welcome: FunctionComponent<WelcomeProps> = () => {
  return (
    <PageLayout 
      showHeader
      canScroll
    >
      
    </PageLayout>
  );
}