'use client'

import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <div>
            <h1>Lead Management Dashboard</h1>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {leads.map((lead) => (
                        <li key={lead.id}>
                            <p>{lead.firstName} {lead.lastName} - {lead.status}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dashboard;
