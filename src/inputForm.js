import React from "react";
import { connect } from "react-redux";
import {
  updateInitialAmount,
  updateInterestRate,
  updatePaymentAmount,
} from "./actions";
import { TextField, makeStyles, Grid, Button } from "@material-ui/core";

let useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

class MainFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monthsLeft: 0 };
  }

  handleSubmit = (event) => {
    alert("Your total is :" + this.state.val1 * this.state.val2);
    event.preventDefault();
  };

  changeit1 = (event) => {
    this.props.updateInitialAmount(event.target.value);
  };

  changeit2 = (event) => {
    this.props.updateInterestRate(event.target.value);
  };

  changeit3 = (event) => {
    this.props.updatePaymentAmount(event.target.value);
  };

  calculatePayoff(amount, rate, payment) {
    if (amount && rate && payment) {
      let temp = amount;
      let boi = 0;
      let months = 0;
      let yearAmount = amount;
      while (temp > 0 && months < 600) {
        boi = +temp + (+yearAmount * +rate * 0.01) / 12 - +payment;
        months++;
        if (months % 12 == 0) {
          yearAmount = boi;
        }
        temp = boi;
      }
      return months / 12;
    }
    return 0;
  }

  setMonths(left) {
    this.state.monthsLeft = left;
  }

  render() {
    return (
      <div>
        <form>
          <Grid>
            <div>
              <TextField
                label="Initial Amount"
                onChange={this.changeit1}
                type="number"
                name="num1"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                label="Interest Rate"
                onChange={this.changeit2}
                type="number"
                name="num2"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                label="Payment Amount"
                onChange={this.changeit3}
                type="number"
                name="num2"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                value={this.calculatePayoff(
                  this.props.form.initialAmount,
                  this.props.form.interestRate,
                  this.props.form.paymentAmount
                )}
                type="number"
                name="num3"
                variant="outlined"
              ></TextField>
            </div>

            <Button>Submit</Button>
          </Grid>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: {
      initialAmount: state.form.initialAmount,
      interestRate: state.form.interestRate,
      paymentAmount: state.form.paymentAmount,
    },
  };
};

export default connect(mapStateToProps, {
  updateInitialAmount,
  updateInterestRate,
  updatePaymentAmount,
})(MainFormComponent);
