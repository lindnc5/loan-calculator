import React from "react";
import { connect } from "react-redux";
import { updateInitialAmount, updateInterestRate } from "./actions";

class MainFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { va1: 0, val2: 0 };
  }

  handleSubmit = (event) => {
    alert("Your total is :" + this.state.val1 * this.state.val2);
    event.preventDefault();
  };

  changeit1 = (event) => {
    this.props.updateInitialAmount(event.target.value);
  };

  changeit2 = (event) => {
    this.setState({ val2: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Num1:
            <input onChange={this.changeit1} type="number" name="num1" />
          </label>
          <label>
            Num2:
            <input onChange={this.changeit2} type="number" name="num2" />
          </label>
          <input
            value={this.props.form.initialAmount}
            type="number"
            name="num3"
          />

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: { initialAmount: state.form.initialAmount, interestRate: state.val2 },
  };
};

export default connect(mapStateToProps, { updateInitialAmount })(
  MainFormComponent
);
