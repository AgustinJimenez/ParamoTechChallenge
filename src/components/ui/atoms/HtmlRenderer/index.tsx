import React from "react";

function HtmlRenderer({ htmlString }: { htmlString: string }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>;
}

export default HtmlRenderer;
