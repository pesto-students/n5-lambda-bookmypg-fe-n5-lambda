import React from "react";
import ResponsiveDrawer from "admin/components/responsivedrawer/ResponsiveDrawer";

export default function Tablefile(props) {
  return (
    <div className="Table">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <h1>Hi</h1>
      </ResponsiveDrawer>
    </div>
  );
}
