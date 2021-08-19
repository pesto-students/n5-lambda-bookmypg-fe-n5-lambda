import React from "react";
import ResponsiveDrawer from "admin/components/responsivedrawer/ResponsiveDrawer";

export default function Tablefile(props) {
  return (
    <div className="Table" data-testid="content">
      <ResponsiveDrawer headersData={props.responsivedrawerData}>
        <h1>Admin Dashboard</h1>
      </ResponsiveDrawer>
    </div>
  );
}
