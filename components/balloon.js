import React from 'react';

class Balloon extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  deflate() {
    const updatedSize = (this.props.size - this.props.deflationSize).toFixed(2); // handling floating point subtraction
    if (updatedSize > 0) {
      this.props.updateProps({
        size: updatedSize,
      });
    }
  }

  render() {
    if (this.props.deflationSize > this.props.size) {
      this.props.updateProps({
        deflationSize: this.props.size,
      });
    }

    return (
      <div onClick={() => this.deflate()}>
        <svg width="100%" height="auto" viewBox="0 0 400 500" style={{overflow: 'visible'}} >
          <path d="M101.124805,255 C100.146564,233.732769 103.780451,291.312889 116.550101,326.561293 C129.319752,361.809698 147.686331,348.668032 144.832964,375.648791 C141.979596,402.62955 110.037653,406.908957 106.501018,421.583026 C102.964383,436.257095 123.051823,445.402516 130.601671,491.110588" id="Path-3" stroke="#000000" strokeWidth="4" fill="none"></path>
          <g id="Group" transform={`translate(${194/2 * (1-Math.sqrt(this.props.size))},${255* (1-Math.sqrt(this.props.size))}) scale(${Math.sqrt(this.props.size)})`}>
            <path d="M101.124805,255 C155.402086,255 210.611891,140.073889 188.585412,77.1065481 C166.558932,14.1392068 127.46589,5.68434189e-14 101.124805,5.68434189e-14 C74.7066494,5.68434189e-14 15.5948675,12.267268 2.1949056,77.1065481 C-11.2050563,141.945828 46.8475228,255 101.124805,255 Z" id="Path" fill="#D0021B"></path>
            <path d="M28.9961639,135 L60,36 C43.3256612,48.9474492 32.9910492,61.8445106 28.9961639,74.6911843 C25.0012787,87.537858 25.0012787,107.640797 28.9961639,135 Z" id="Path-2" fill="#FE8B99"></path>
          </g>
        </svg>
      </div>
    );
  }
}

export default Balloon;
