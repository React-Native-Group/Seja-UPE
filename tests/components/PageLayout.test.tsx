import React from "react";
import { act, ReactTestRenderer } from "react-test-renderer";
import { PageLayout, Spacer } from "../../src/core/components";
import { create, fireEvent } from "../core";
import Fab from "react-native-fab";

test("render of PageLayout", async () => {
  await act(async () => {
    create(
      <PageLayout
        canGoBack
        showFab
        showTabs
        showHeader
        showSpinner
        fabIcon="search"
      >
        <Spacer/>
      </PageLayout>
    );
  });
});

test("press fab test", async () => {
  function MockedPageLayout() {
    return(
      <PageLayout
        canGoBack
        showFab
      >
        <Spacer/>
      </PageLayout>
    )
      
  }; 
  const tree = create(<MockedPageLayout />);
  const treeRoot = tree.root;

  await act(async () => {
    fireEvent(treeRoot.findByType(Fab), "onClickAction");
  });
  
});