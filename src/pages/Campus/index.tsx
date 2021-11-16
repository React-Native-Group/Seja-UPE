import React, { Fragment, FunctionComponent } from 'react';
import { PageLayout } from '../../core/components';

export interface CampusProps {
  
}

export const Campus: FunctionComponent<CampusProps> = () => {
  return (
    <PageLayout 
      showHeader
      canGoBack
      canScroll
    >
      
    </PageLayout>
  );
}
