import React from 'react';

function sidebarMinimize() {
  document.body.classList.toggle('sidebar-minimized');
}

function brandMinimize() {
  document.body.classList.toggle('brand-minimized');
}

function SidebarMinimizer() {
  return (
    <button
      className="sidebar-minimizer"
      type="button"
      onClick={event => {
        sidebarMinimize();
        brandMinimize();
      }}
    />
  );
}

export default SidebarMinimizer;
