// import "./App.css";
import React, { useState } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";

const ownStyles = {
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    display: "none",
  },
};

function Book3() {
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
  };
  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        url="http://localhost:3000/little-women.epub"
        epubOptions={{
          flow: "scrolled",
          manager: "continuous",
        }}
        styles={ownStyles}
      />
    </div>
  );
}

export default Book3;
