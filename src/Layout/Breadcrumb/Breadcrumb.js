import React from 'react';
import { Link, Router } from '@reach/router';
import routesNames from './routesNames';

const getPaths = () => {
  const pathname = window.location.pathname;
  const paths = ['/'];

  if (pathname === '/') {
    return paths;
  }

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const BreadcrumbItem = ({ path }) => {
  const name = routesNames[path];
  if (name) {
    return window.location.pathname === path ? (
      <div className="breadcrumb-item active">{name}</div>
    ) : (
      <div className="breadcrumb-item">
        <Link to={path || ''}>{name}</Link>
      </div>
    );
  }
  return null;
};

const Breadcrumbs = () => {
  return (
    <div className="breadcrumb">
      {getPaths().map((path, i) => (
        <BreadcrumbItem key={i} path={path} />
      ))}
    </div>
  );
};

export default function BreadCrumb() {
  return (
    <Router>
      <Breadcrumbs default />
    </Router>
  );
}
