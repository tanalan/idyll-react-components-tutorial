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
          style={{backgroundColor: 'green'}}
          onClick={() => this.changePropsColor('green')}
        >
         Green 
        </div>
        <div 
          style={{backgroundColor: 'orange'}}
          onClick={() => this.changePropsColor('orange')}
        >
          Orange
        </div>
      </div>
    );
  }
}

export default TwoColors;