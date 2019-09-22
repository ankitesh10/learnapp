import React from "react";
import { connect } from "react-redux";

import { selectCategory } from "../actions";
import './categoryselect.scss'

class CategorySelect extends React.Component {
  onSelectClick = cat => {
    this.props.selectCategory(cat);
  };

  render() {
    return (
      <div className="categoryselect__container">
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                onClick={() => this.onSelectClick('all')}
                className={`categoryselect__btn ${this.props.cat === 'all' ? 'categoryselect__btn--active' : ''}`}
              >
                ALL
              </button>
              <button
                onClick={() => this.onSelectClick('Investing')}
                className={`categoryselect__btn ${this.props.cat === 'Investing' ? 'categoryselect__btn--active' : ''}`}
              >
                Investing
              </button>
              <button
                onClick={() => this.onSelectClick('Trading')}
                className={`categoryselect__btn ${this.props.cat === 'Trading' ? 'categoryselect__btn--active' : ''}`}
              >
                Trading
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
    cat: state.category
  }
}

export default connect(
  mapStateToProps,
  { selectCategory }
)(CategorySelect);
