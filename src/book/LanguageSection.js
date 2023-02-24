import React from "react";
import LanguageList from "./LanguageList";
import PropTypes from "prop-types";

const LanguageSection = ({ header, languages }) => {
  // do some changes in languages
  const formattedLanguages = languages.map((language) =>
    language.toUpperCase()
  );
  return (
    <div>
      <h1> {header} </h1>
      <LanguageList languages={formattedLanguages} />
    </div>
  );
};

LanguageSection.propTypes = {
  header: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
};

export default LanguageSection;
