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
      <div
        style={{
          width: this.props.size + 'px',
          height: this.props.size + 'px',
          borderRadius: '50%',
          backgroundColor: 'black',
        }}
        onClick={() => this.deflate()}
      ></div>
    );
  }
}

export default Balloon;
