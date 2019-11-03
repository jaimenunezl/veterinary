import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NewMeeting from "./components/NewMeeting";
import ListMeeting from "./components/ListMeeting";

class App extends Component {
  state = { meetings: [] };

  componentDidMount() {
    const meetingsLS = localStorage.getItem("meetings");
    if (meetingsLS) {
      this.setState({ meetings: JSON.parse(meetingsLS) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("meetings", JSON.stringify(this.state.meetings));
  }

  addNewMeeting = data => {
    const meetings = [...this.state.meetings, data];
    this.setState({ meetings });
  };

  deleteMeeting = id => {
    const currentMeetings = [...this.state.meetings];
    const meetings = currentMeetings.filter(meeting => meeting.id !== id);
    this.setState({ meetings: meetings });
  };

  render() {
    return (
      <div className="container">
        <Header title="Administrador de pacientes veterinaria" />
        <NewMeeting addNewMeeting={this.addNewMeeting} />
        <ListMeeting
          meetings={this.state.meetings}
          deleteMeeting={this.deleteMeeting}
        />
      </div>
    );
  }
}

export default App;
