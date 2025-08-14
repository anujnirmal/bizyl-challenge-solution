// JobList.jsx
// Sanitized for Bizyl Tech Challenge

import React, { useEffect, useState } from 'react';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    // TODO: Add filter state for job type

    useEffect(() => {
        // TODO: Optimize API
        fetch('http://localhost:8080/api/v1/jobs')
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Job Board</h2>
            {/* TODO: Add job type filter UI */}
            {loading && <div>Loading...</div>}
            {error && <div>Error loading jobs.</div>}
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <strong>{job.title}</strong> ({job.type}) — $
                        {job.salary}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
