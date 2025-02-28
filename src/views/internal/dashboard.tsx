'use client'

import { useGetProtectedDataMutation } from '@/store/InternalApi';
import { SubmittedForm } from '@/types/global';
import { useEffect } from 'react';

import styled from "styled-components";

const Span = styled.span`
  color: blue;
  cursor: pointer;
  padding-left: 20px;
`;

const Dashboard = () => {
    const [getData, { data, isLoading }] = useGetProtectedDataMutation();

    console.log(data)

    useEffect(() => {
        const fetchData = async () => {
            await getData();
        };

        fetchData();
    }, [getData]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Leads</h1>
            {isLoading ? <p>Loading...</p> : (
                <ul>
                    {data?.responseObject?.map((lead: SubmittedForm) => (
                        <li key={lead._id}>
                            <p>{lead.firstName} {lead.lastName} - {lead.status}</p>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dashboard;
