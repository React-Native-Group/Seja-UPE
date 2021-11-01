import React, { Fragment, FunctionComponent } from "react";

export interface RenderProps {
  if: boolean,
  children: React.ReactNode
}

export const Render: FunctionComponent<RenderProps> = ({ if: condition, children }: RenderProps) => {
  return condition ? (
    <Fragment>
      {children}
    </Fragment>
  ) : (
    <Fragment />
  );
}
