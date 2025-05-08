import React, { memo } from "react";

interface IProps {
  children: React.ReactElement;
}
const Template = memo(({ children }: IProps) => {
  return (
    <div>
      我是 template,我被layout包裹
      {children}
    </div>
  );
});

Template.displayName = "template";
export default Template;
