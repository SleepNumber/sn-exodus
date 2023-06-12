import React from "react";

import contentBlockType from "~/prop-types/contentBlock";
import { dasherize } from "~/util/core/string";

AnchorTarget.propTypes = {
  block: contentBlockType.isRequired,
};
function AnchorTarget({ block }) {
  const id = dasherize(block.name);
  return <div id={id} tabIndex="-1" />;
}

export default AnchorTarget;
