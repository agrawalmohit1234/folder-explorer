import React, { useState } from "react";
import PropTypes from "prop-types";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer?.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)}>{explorer?.name}</div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "24px" }}
        >
          {explorer?.items?.map((ex) => {
            return <Folder explorer={ex} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>{explorer?.name}</div>
      </div>
    );
  }
};

Folder.propTypes = {
  explorer: PropTypes.object.isRequired,
};

export default Folder;
