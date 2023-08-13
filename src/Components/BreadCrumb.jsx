import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumbs = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          {/* {index === items.length - 1 ? (
            <span>{item.label}</span>
          ) : ( */}
            <Link to={item.to}>{item.label}</Link>
          {/* )} */}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
