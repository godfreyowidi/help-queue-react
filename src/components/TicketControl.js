import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisiblePage: false
    };
  }

  handleClick = () => {
    this.setState({formVisibleOnPage : true});
  }

  render() {
    let currentlyVisibleState = null;
    let addTicketButton = null;
    if (this.state.formVisiblePage) {
      currentlyVisibleState = <NewTicketForm />
    } else {
      currentlyVisibleState = <TicketList />
      addTicketButton = <button onClick={this.handleClick}>Add Tickets</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addTicketButton}
      </React.Fragment>
    );
  }
}

export default TicketControl;