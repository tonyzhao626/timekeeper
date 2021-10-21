import React from 'react';
import * as d3 from 'd3';

class Sector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      opacity: 'arc'
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({
      text: '',
      opacity:'arc-hover'
    });

    let percent = (this.props.data.value / this.props.total) * 100;
    percent = percent.toFixed(1);

    this.setState({
      text: percent + " %"
    });
  }

  onMouseOut() {
    this.setState({
      text: '',
      opacity:'arc'
    });
  }

  render() {
    const outerRadius = this.props.width / 2.2;
    const innerRadius = this.props.width / 3.5;
    const arc = d3.svg.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);
    const data = this.props.data;
    const center = "translate(" + arc.centroid(data) + ")";
    const percentCenter = "translate(0,3)";
    const color = this.props.colors;
    return (
      <g onMouseOver={this.onMouseOver}
         onMouseOut={this.onMouseOut}
         className="pie-chart-g">
        <path className={this.state.opacity}
              fill={color[this.props.ikey]}
              d={arc(this.props.data)}></path>
        <text fill="white"
              transform={center}
              textAnchor="middle"
              fontSize="15px">
        </text>
        <text fill={color[this.props.ikey]}
              stroke={color}
              fontSize="32px"
              transform={percentCenter}
              textAnchor="middle">
              {this.state.text}
        </text>
      </g>
    );
  }
}

export default Sector;
