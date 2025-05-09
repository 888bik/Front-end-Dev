import React, { memo } from "react";
export interface RouteParams {
  slug: string;
  posts: string;
}
export interface IProps {
  children?: React.ReactElement;
  params?: RouteParams;
}
const Template = memo(({ children }: IProps) => {
  return (
    <div>
      <div className="nav-bar">我是 template,我被layout包裹</div>

      {children}
    </div>
  );
});

Template.displayName = "template";
export default Template;
