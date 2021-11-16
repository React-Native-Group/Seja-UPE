import React, { FunctionComponent } from 'react';
import { PageLayout } from '../../core/components';

export interface SuggestionsProps {
  
}

export const Suggestions: FunctionComponent<SuggestionsProps> = () => {
  return (
    <PageLayout 
      showHeader
      showTabs
      canGoBack
      canScroll
      onTabClick={console.log}
    >
      
    </PageLayout>
  );
}
