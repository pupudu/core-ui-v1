import React from 'react';

function Dashboard() {
  return (
    <div className="animated fadeIn">
      <button className="btn btn-primary">Primary</button>{' '}
      <label className="switch switch-default switch-success">
        <input type="checkbox" className="switch-input" defaultChecked />
        <span className="switch-label" />
        <span className="switch-handle" />
      </label>
    </div>
  );
}

export default Dashboard;
