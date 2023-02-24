import React from "react";
import Language from "./Language";

const LanguageList = ({ languages }) => {
  return (
    <div>
      <ul>
        {languages.map((language, index) => (
          <Language key={index} language={language} />
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
