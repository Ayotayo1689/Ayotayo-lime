import React from "react";
import ReactDOMServer from "react-dom/server";

 const extractTextFromComponent = (Component) => {
  const htmlString = ReactDOMServer.renderToString(<Component />);
  console.log(htmlString);
  const textContent = htmlString.replace(/<[^>]*>?/gm, ""); // Strip HTML tags
  return textContent;
};
