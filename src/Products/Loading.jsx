import React from "react";
import ContentLoader from "react-content-loader";

function Loading() {
  return (
    <ContentLoader
      className="product"
      speed={1}
      width={205}
      height={472}
      viewBox="0 0 205 472"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="7" y="0" rx="6" ry="6" width="205" height="300" />
      <rect x="7" y="307" rx="6" ry="6" width="205" height="50" />
      <rect x="7" y="362" rx="6" ry="6" width="205" height="18" />
      <rect x="7" y="390" rx="6" ry="6" width="205" height="18" />
      <rect x="7" y="420" rx="6" ry="6" width="205" height="18" />
      <rect x="7" y="450" rx="6" ry="6" width="205" height="18" />
    </ContentLoader>
  );
}

export default Loading;
