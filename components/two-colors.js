import React from 'react';

class TwoColors extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  changePropsColor(color) {
    this.props.updateProps({
      selectedColor: color
    });
  }

  render() {
    return (
      <div>
        <div
          className="square-green"
          style={{
            backgroundColor: 'green',
            width: '100px',
            height: '100px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => this.changePropsColor('green')}
        >
         Green 
        </div>
        <div
          className="square-orange"
          style={{
            backgroundColor: 'orange',
            width: '100px',
            height: '100px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => this.changePropsColor('orange')}
        >
          Orange
        </div>
      </div>
    );
  }
}

export default TwoColors;