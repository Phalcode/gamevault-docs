import React from "react";
import clsx from "clsx";
import Content from "@theme/DocSidebar/Desktop/Content";

/**
 * @param {{ path: string, sidebar: any, onCollapse: () => void, isHidden: boolean }} props
 */
function DocSidebarDesktop({ path, sidebar, isHidden }) {
  return (
    <div className={clsx("gv-sidebar", isHidden && "gv-sidebar--hidden")}>
      <div className="gv-sidebar-panel">
        <div className="gv-sidebar-header">
          <span className="gv-sidebar-heading">Documentation</span>
        </div>
        <Content path={path} sidebar={sidebar} className="gv-sidebar-nav" />
      </div>
    </div>
  );
}

export default React.memo(DocSidebarDesktop);
