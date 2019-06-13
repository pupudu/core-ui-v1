import React from 'react';
import { Link, Router } from '@reach/router';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
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

const BreadcrumbsItem = ({ path }) => {
  const name = routesNames[path];
  if (name) {
    return window.location.pathname === path ? (
      <BreadcrumbItem active>{name}</BreadcrumbItem>
    ) : (
      <BreadcrumbItem>
        <Link to={path || ''}>{name}</Link>
      </BreadcrumbItem>
    );
  }
  return null;
};

const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      {getPaths().map((path, i) => (
        <BreadcrumbsItem key={i} path={path} />
      ))}
    </Breadcrumb>
  );
};

export default function BreadCrumb() {
  return (
    <Router>
      <Breadcrumbs default />
    </Router>
  );
}
