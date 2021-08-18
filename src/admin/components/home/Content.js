import React from "react";
import ResponsiveDrawer from "../responsivedrawer/ResponsiveDrawer";

export default function Tablefile(props) {
  console.log(props);
  return (
    <div className="Table" data-testid="content">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <h1>Hi</h1>
      </ResponsiveDrawer>
    </div>
  );
}
