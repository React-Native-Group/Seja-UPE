import React from "react";
import { act } from "react-test-renderer";
import { PageLayout, Spacer } from "../../src/core/components";
import { create } from "../core";

test("render of PageLayout", async () => {
  await act(async () => {
    create(
      <PageLayout
        canGoBack
        showFab
        showSpinner 
      >
        <Spacer/>
      </PageLayout>
    );
  });
});