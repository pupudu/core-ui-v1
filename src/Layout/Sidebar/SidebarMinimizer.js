import React from 'react';
import { sidebarMinimize } from '../handlers';

function SidebarMinimizer() {
  return (
    <button
      className="sidebar-minimizer"
      type="button"
      onClick={sidebarMinimize}
    />
  );
}

export default SidebarMinimizer;
