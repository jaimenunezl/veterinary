import React from "react";
import PropTypes from "prop-types";

const Meeting = ({ meeting, deleteMeeting }) => (
  <div className="media">
    <div className="media-body">
      <h6 className="text-uppercase font-weight-bold mt-2">{meeting.name}</h6>
      <p className="card-text">
        <span>Owner: </span>
        {meeting.owner}
      </p>
      <p className="card-text">
        <span>Date: </span>
        {meeting.date}
      </p>
      <p className="card-text">
        <span>Time: </span>
        {meeting.time}
      </p>
      <p className="card-text">
        <span>Symptom: </span>
      </p>
      <p className="card-text">{meeting.symptom}</p>

      <button
        className="btn btn-danger"
        onClick={() => deleteMeeting(meeting.id)}
      >
        Delete
      </button>
    </div>
  </div>
);

Meeting.propTypes = {
  meeting: PropTypes.object.isRequired,
  deleteMeeting: PropTypes.func.isRequired
};

export default Meeting;
