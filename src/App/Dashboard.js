import React from 'react';
import classnames from 'classnames';

const Button = ({ color = 'primary', variant, ...props }) => {
  const _variant = variant ? `-${variant}` : '';
  return (
    <button
      className={classnames('btn', `btn${_variant}-${color}`)}
      {...props}
    />
  );
};

function Dashboard() {
  return (
    <div className="animated fadeIn">
      <div className="card">
        <div className="card-header">Heading</div>
        <div className="card-body">
          <Button color="primary" variant="ghost">
            Primary
          </Button>{' '}
          <Button color="secondary">Secondary</Button>{' '}
          <Button color="info">Info</Button>{' '}
          <Button color="success">Success</Button>{' '}
          <Button color="warning">warning</Button>{' '}
          <Button color="danger">danger</Button>{' '}
          <Button color="teal">Teal</Button> <br />
          <br />
          <br />
          <label className="switch switch-default switch-success">
            <input type="checkbox" className="switch-input" defaultChecked />
            <span className="switch-label" />
            <span className="switch-handle" />
          </label>
        </div>
        <div className="card-footer">Footer</div>
      </div>
    </div>
  );
}

export default Dashboard;
