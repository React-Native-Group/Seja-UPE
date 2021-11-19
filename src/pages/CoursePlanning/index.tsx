import React, { FunctionComponent } from 'react';
import { WebView } from 'react-native-webview';
import { Dimensions } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';

import { WebViewContainer } from './styles';
import { useTheme } from '../../core/hooks';
import { AssetWidgetPlanningIcon } from '../../assets';
import { PageLayout, Render, Spacer, TitleOutline } from '../../core/components';


export interface CoursePlanningProps {
  
}

export const CoursePlanning: FunctionComponent<CoursePlanningProps> = () => {
  const [theme] = useTheme();
  const {height} = Dimensions.get('window');
  
  const url = 'https://www.ufjf.br/cursocomputacao/files/2018/09/PPC-2018.pdf';
  const isPdf = url.toLocaleLowerCase().endsWith('.pdf');

  return (
    <PageLayout 
      showHeader
      canGoBack
      canScroll
    >
      <TitleOutline title="Projeto Pedagógico" icon={AssetWidgetPlanningIcon} />
      <Spacer verticalSpace={32} />

      <WebViewContainer style={{ height: height - 240 }} {...theme}>

        <Render if={isPdf}>
          <PDFReader 
            style={{ height: height - 240 }} 
            source={{ uri: url }}>
          </PDFReader>
        </Render>

        <Render if={!isPdf}>
          <WebView 
            useWebkit
            nestedScrollEnabled
            scrollEnabled
            source={{ uri: url}} />
        </Render>

      </WebViewContainer>

    </PageLayout>
  );
}
