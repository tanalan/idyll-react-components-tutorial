import React from 'react';

/**
 * props: size
 */
class Balloon extends React.PureComponent {
  constructor(props) {
    super(props);

    this.deflate = this.deflate.bind(this);
  }

  deflate() {
    this.props.updateProps({
      size: this.props.size - this.props.deflationSize,
    });
  }

  render() {
    if (this.props.deflationSize > this.props.size) {
      this.props.updateProps({
        deflationSize: this.props.size,
      });
    }

    return (
      <div>
        <svg
          viewBox={`0 0 ${this.props.size} ${this.props.size}`}
          width={`${this.props.size}`}
          height={`${this.props.size}`}
          onClick={() => this.deflate()}
          style={{
            transition: 'width 1s, height 1s',
          }}
        >
          <circle cx="50%" cy="50%" r={`${this.props.size / 2}`} fill="orange"/>
        </svg>
      </div>
    );
  }
}

export default Balloon;
