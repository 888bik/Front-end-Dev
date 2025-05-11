// app/layout.js
import Link from "next/link";
import React from "react";

export interface IProps {
  children?: React.ReactElement;
}
export default function RootLayout(props: IProps) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/a">Link to /a</Link>
          <br />
          <Link href="/b">Link to /b</Link>
        </div>
        {props.children}
      </body>
    </html>
  );
}
