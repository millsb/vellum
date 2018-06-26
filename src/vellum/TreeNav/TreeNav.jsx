import React from "react";
import PropTypes from "prop-types";
import "./tree-nav.scss";

const { object, func, number, array, string, arrayOf } = PropTypes;

let renderFuncs = [];
let maximumDepth = 10;

const noRenderFuncsError = () => {
  throw new Error("TreeNav: Cannot Display. No rendering functions provided.");
};

const renderFuncForDepth = depth => {
  if (!renderFuncs.length) {
    noRenderFuncsError();
  }

  return renderFuncs[depth - 1]
    ? renderFuncs[depth - 1]
    : renderFuncs[renderFuncs.length - 1];
};

const TreeNode = ({ data, render, depth, className }) => {
  const hasChildren = data.children && data.children.length > 0;
  return (
    <li className={`${className}__item depth-${depth}`}>
      {render({ data, depth, className })}
      {hasChildren && (
        <TreeList
          data={data.children}
          depth={depth + 1}
          className={className}
        />
      )}
    </li>
  );
};

TreeNode.propTypes = {
  render: func.isRequired,
  data: object.isRequired,
  className: string.isRequired,
  depth: number
};

const TreeList = ({ data, depth, className }) => {
  if (depth <= maximumDepth) {
    return (
      <ul className={`${className}__list depth-${depth}`}>
        {data.map((nodeData, i) => (
          <TreeNode
            key={i}
            data={nodeData}
            depth={depth}
            render={renderFuncForDepth(depth)}
            className={className}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

TreeList.propTypes = {
  data: array.isRequired,
  className: string.isRequired,
  depth: number
};

const TreeNav = ({ data, className, maxDepth, renders }) => {
  if (!renders || !renders.length) {
    noRenderFuncsError();
  }
  renderFuncs = renders;
  maximumDepth = maxDepth || 10;
  return (
    <nav className={className}>
      <TreeList data={data} depth={0} className={className} />
    </nav>
  );
};

TreeNav.propTypes = {
  data: array.isRequired,
  className: string.isRequired,
  renders: arrayOf(func).isRequired,
  maxDepth: number
};

export default TreeNav;
