import React from "react";
import { connect } from "react-redux";
import { updateInitialAmount, updateInterestRate } from "./actions";
import { TextField, makeStyles, Grid, Button } from "@material-ui/core";

let useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

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
      <div>
        <form>
         
          <Grid >
          <div>
          <TextField
            label='Initial Amount'
             onChange={this.changeit1} type="number" name="num1" variant="outlined">
            </TextField>
            </div>
            <div>
          <TextField
            label='Interest Rate'
             onChange={this.changeit2} type="number" name="num2" variant="outlined"></TextField>
          </div>
          <div>
          <TextField
            value={this.props.form.initialAmount}
            type="number"
            name="num3" variant="outlined"></TextField>
            </div>
         

          <Button onClick={this.handleSubmit}>Submit</Button>
          </Grid>
          
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
