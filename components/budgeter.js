import React from 'react';
import PieChart from 'react-minimal-pie-chart';

class Budgeter extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="budgeter-container">
        <div>
          What expense?
          What how much
        </div>
        <div style={{backgroundColor: 'lightGreen'}}>
          <PieChart
            data={[
              { title: 'One', value: 10, color: '#E38627' },
              { title: 'Two', value: 15, color: '#C13C37' },
              { title: 'Three', value: 20, color: '#6A2135' },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default Budgeter;