import React, { PropTypes } from 'react';
import DuckImage from 'assets/Duck.jpg';
import classes from './styles.scss';

export default class IndexLayout extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.shape({
      doubleAsync: PropTypes.func.isRequired,
      increment: PropTypes.func.isRequired,
    }),
  };

  incrementByOne = () => this.props.actions.increment(1);

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-xs-2 col-xs-offset-5">
            <img className={classes.duck}
              src={DuckImage}
              alt="This is a duck, because Redux."
            />
          </div>
        </div>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:
          {' '}
          <span className={classes['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className="btn btn-default" onClick={this.incrementByOne}>
          Increment
        </button>
        {' '}
        <button className="btn btn-default" onClick={this.props.actions.doubleAsync}>
          Double (Async)
        </button>
      </div>
    );
  }
}
