import React, { Fragment, FunctionComponent } from 'react';
import { PageLayout } from '../../core/components';

export interface CourseProps {
  
}

export const Course: FunctionComponent<CourseProps> = () => {
  return (
    <PageLayout 
      showHeader
      canGoBack
      canScroll
    >
      
    </PageLayout>
  );
}
