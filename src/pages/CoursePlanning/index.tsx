import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/core";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";
import PDFReader from "rn-pdf-reader-js";
import Constants from "expo-constants";

import { WebViewContainer } from "./styles";
import { useTheme } from "../../core/hooks";
import { RoutesParamList } from "../../routes";
import { AssetWidgetPlanningIcon } from "../../assets";
import { PageLayout, Render, Spacer, TitleOutline } from "../../core/components";

export interface CoursePlanningProps { }

export const CoursePlanning: FunctionComponent<CoursePlanningProps> = () => {
  const [theme] = useTheme();
  const {height} = Dimensions.get("window");
  const [ppcUrl, setPpcUrl] = useState("about:blank");
  const [isPdf, setIsPdf] = useState(false);
  
  const routes = useRoute<RouteProp<RoutesParamList, "CoursePlanning">>();

  useEffect(() => {
    setPpcUrl(routes.params.ppcUrl)
    setIsPdf(routes.params.ppcUrl.toLocaleLowerCase().endsWith(".pdf"))
  }, [routes])

  return (
    <PageLayout 
      showHeader
      canGoBack
    >
      <TitleOutline title="Projeto Pedagógico" icon={AssetWidgetPlanningIcon} />
      <Spacer verticalSpace={32} />

      <WebViewContainer style={{ height: height - (224 + Constants.statusBarHeight) }} {...theme}>

        <Render if={isPdf}>
          <PDFReader 
            onError={() => {}}
            style={{ height: height - (224 + Constants.statusBarHeight) }} 
            source={{ uri: ppcUrl }}>
          </PDFReader>
        </Render>

        <Render if={!isPdf}>
          <WebView 
            useWebkit
            nestedScrollEnabled
            scrollEnabled
            source={{ uri: ppcUrl}} />
        </Render>

      </WebViewContainer>

    </PageLayout>
  );
}
