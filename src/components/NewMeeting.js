import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

class NewMeeting extends Component {
  initialState = {
    meeting: {
      name: "",
      owner: "",
      date: "",
      time: "",
      symptom: ""
    },
    error: false
  };

  state = {
    ...this.initialState
  };

  handleChange = e => {
    this.setState({
      meeting: {
        ...this.state.meeting,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, owner, date, time, symptom } = this.state.meeting;
    if (
      name === "" ||
      owner === "" ||
      date === "" ||
      time === "" ||
      symptom === ""
    ) {
      this.setState({ error: true });
      return;
    }

    const newMeeting = { ...this.state.meeting };
    newMeeting.id = uuid();

    this.props.addNewMeeting(newMeeting);
    this.setState({
      ...this.initialState
    });
  };

  render() {
    const { error } = this.state;

    return (
      <div className="row justify-content-center mt-4">
        <div className="card p-2 col-lg-8 col-xs-12">
          <h5 className="card-title text-center mt-3">Add new meeting</h5>
          <div className="card-body">
            {error ? (
              <div className="alert alert-danger text-center mt-2" role="alert">
                All field are required
              </div>
            ) : null}

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Pet's name</label>
                <input
                  id="name"
                  type="name"
                  className="form-control"
                  placeholder="Enter pet's name"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.meeting.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="owner">Pet's owner</label>
                <input
                  id="owner"
                  type="name"
                  className="form-control"
                  placeholder="Enter pet's owner"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.meeting.owner}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  className="form-control"
                  placeholder="Enter date"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.meeting.date}
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  id="time"
                  type="time"
                  className="form-control"
                  placeholder="Enter time"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.meeting.time}
                />
              </div>
              <div className="form-group">
                <label htmlFor="simptom">Symptom</label>
                <input
                  id="simptom"
                  type="text"
                  className="form-control"
                  placeholder="Enter symptoms"
                  name="symptom"
                  onChange={this.handleChange}
                  value={this.state.meeting.symptom}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

NewMeeting.propTypes = {
  addNewMeeting: PropTypes.func.isRequired
};

export default NewMeeting;
