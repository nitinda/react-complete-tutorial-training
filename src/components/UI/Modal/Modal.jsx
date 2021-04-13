import React, {Component} from "react";

import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.showOrderSummary !== this.props.showOrderSummary
  }

  componentDidUpdate () {
    console.log("[Model] Will update")
  }

  render () {
    const open = this.props.showOrderSummary
    const handleClose = () => {
      this.props.orderChangeUP();
    };

    return (
      <div>
        <Dialog
          onClose={handleClose}
          TransitionComponent={Transition}
          aria-labelledby="customized-dialog-title"
          aria-describedby="alert-dialog-slide-description"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Order Summary
          </DialogTitle>
          <DialogContent>
              A delicious burger with the following ingredients
          </DialogContent>
          <DialogContent dividers>
            <Typography gutterBottom component={'span'}>{this.props.children}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
            <ShoppingCartIcon />
              CheckOut
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  
};

export default Modal;
