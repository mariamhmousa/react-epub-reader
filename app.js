import React from "react";
import reactDom from "react-dom";
import epubjs from "epubjs";

class App extends React.Component {
  initializaEpub = () => {
    const book = epubjs("/home/maryam/web/epub-reader/public/anne.epub");
    this.book = book;
    const rendition = book.renderTo("container", {
      manager: "continuous",
      flow: "scrolled",
    });
  };

  render() {
    return (
    <div id="container"></div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
