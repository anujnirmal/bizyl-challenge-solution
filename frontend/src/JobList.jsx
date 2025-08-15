// JobList.jsx
// Sanitized for Bizyl Tech Challenge

import React, { useEffect, useState } from 'react';
import JobCard from './Components/JobCard';

const jobTypes = {
    fullTime: 'Full Time',
    partTime: 'Part Time',
    remote: 'Remote',
};

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [jobFilter, setJobFilter] = useState('fullTime');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://bizyl-challenge-solution.onrender.com/api/v1/jobs')
            .then((res) => res.json())
            .then((data) => {
                setJobs(data?.data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="joblist-container">
            <h2 className="title">Job Board</h2>
            <select
                className="job-filter"
                onChange={(e) => setJobFilter(e.target.value)}
            >
                {Object.keys(jobTypes).map((jobTypeId) => {
                    return (
                        <option key={jobTypeId} value={jobTypeId}>
                            {jobTypes[jobTypeId]}
                        </option>
                    );
                })}
            </select>
            {loading && <div>Loading...</div>}
            {error && <div>Error loading jobs.</div>}

            {console.log('He:', jobs)}
            <div className="jobs-card-container">
                {jobs
                    .filter((job) => job.type === jobFilter)
                    .map((job) => (
                        <JobCard key={job.id} job={job} jobTypes={jobTypes} />
                    ))}
            </div>
        </div>
    );
};

export default JobList;
