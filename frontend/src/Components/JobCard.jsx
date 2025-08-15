import React from 'react';

const JobCard = ({ job, jobTypes }) => {
    return (
        <div className="card">
            <p className="card-label">{jobTypes[job?.type]}</p>
            <h2 className="card-title">{job?.title}</h2>
            <hr className="card-divider" />
            <p className="card-description">{job.description}</p>
            <p className="card-salary-amount">
                <span>salary:</span> ₹{job?.salary}
            </p>
        </div>
    );
};

export default JobCard;
