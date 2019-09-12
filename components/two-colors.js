import React from 'react';

class TwoColors extends React.PureComponent {
  constructor(props) {
    super(props);

    this.changePropsColor = this.changePropsColor.bind(this);
  }

  changePropsColor(color) {
    this.props.updateProps({
      currentColor: color
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: 'green',
            width: '100px',
            height: '100px',
            textAlign: 'center'
          }}
          onClick={() => this.changePropsColor('green')}
        >
         Green 
        </div>
        <div 
          style={{
            backgroundColor: 'orange',
            width: '100px',
            height: '100px',
            textAlign: 'center'
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