import React from "react";
// import PropTypes from "prop-types";
// props coming from Comment.js
const Language = ({ language }) => {
  return (
    <div>
      <li> {language} </li>
    </div>
  );
};

/*
Language.propTypes = {
  // languages: PropTypes.array.isRequired,
};

*/

export default Language;
