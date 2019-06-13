import React from 'react';

function sidebarMinimize() {
  document.body.classList.toggle('sidebar-minimized');
}

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
