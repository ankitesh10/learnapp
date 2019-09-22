import React from "react";
import { connect } from "react-redux";
import { selectTime } from "../actions";

import './timeselectbutton.scss';

class TimeSelectButton extends React.Component {
  onSelectClick = time => {
    this.props.selectTime(time);
  };

  render() {
    return (
      <div className="timeselectbutton__container">
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                onClick={() => this.onSelectClick(0)}
                className={`timeselectbutton ${this.props.time === 0 ? 'timeselectbutton--active' : null}`}
              >
                Upcoming
              </button>
              <button
                onClick={() => this.onSelectClick(1)}
                className={`timeselectbutton ${this.props.time === 1 ? 'timeselectbutton--active' : null}`}
              >
                Recordings
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.time
  }
}

export default connect(
  mapStateToProps,
  { selectTime }
)(TimeSelectButton);
