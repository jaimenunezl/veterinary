import React from "react";
import Meeting from "./Meeting";
import PropTypes from "prop-types";

const ListMeeting = ({ meetings, deleteMeeting }) => {
  const message =
    Object.keys(meetings).length === 0 ? "No hay citas" : "Listado de citas";

  return (
    <div className="row justify-content-center mt-4">
      <div className="card p-2 col-lg-8 col-xs-12">
        <h5 className="card-title text-center mt-3">{message}</h5>
        <div className="card-body lista-citas">
          {meetings.map(meeting => (
            <Meeting
              key={meeting.id}
              meeting={meeting}
              deleteMeeting={deleteMeeting}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ListMeeting.propTypes = {
  meetings: PropTypes.array.isRequired,
  deleteMeeting: PropTypes.func.isRequired
};

export default ListMeeting;
