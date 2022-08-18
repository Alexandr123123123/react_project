import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={190}
    height={257}
    viewBox="0 0 190 257"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="91" cy="125" r="75" /> 
    <rect x="35" y="205" rx="0" ry="0" width="110" height="15" />
    <rect x="35" y="225" rx="0" ry="0" width="110" height="15" />
  </ContentLoader>
)

export default MyLoader