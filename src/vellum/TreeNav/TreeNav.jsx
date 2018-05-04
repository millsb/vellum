import React from "react";
import "./tree-nav.scss";

let renderFuncs = [];
let maximumDepth = 10;

const noRenderFuncsError = () => {
  throw new Error("TreeNav: Cannot Display. No rendering functions provided.");
};

const renderFuncForDepth = depth => {
  if (!renderFuncs.length) {
    noRenderFuncsError();
  }

  return renderFuncs[depth] ? renderFuncs[depth] : renderFuncs[0];
};

const TreeNode = ({ data, render, depth, className }) => {
  const hasChildren = data.children.length;
  return (
    <Fragment>
      <li className={`${className}__item`}>
        {render({ data, depth, className })}
      </li>
      {hasChildren && (
        <TreeList
          data={data.children}
          depth={depth + 1}
          baseClassName={className}
        />
      )}
    </Fragment>
  );
};

const TreeList = ({ data, depth, className }) => {
  if (depth <= maximumDepth) {
    return (
      <ul className={`${baseClassName}__list has-depth-${depth}`}>
        {data.map(nodeData => (
          <TreeNode
            data={nodeData}
            render={renderFuncForDepth(depth)}
            className={className}
          />
        ))}
      </ul>
    );
  }
};

const TreeNav = ({ data, className, maxDepth, renders }) => {
  if (!renders.length) {
    noRenderFuncsError();
  }
  renderFuncs = renders;
  maximumDepth = maxDepth;
  return <nav className={className} />;
};

export default TreeNav;
