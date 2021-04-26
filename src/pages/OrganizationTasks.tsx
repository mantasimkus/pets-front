import { loader } from 'graphql.macro';
import React from 'react';

import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Page from './Page';

const GET_ORGANIZATION_TASKS_QUERY = loader('../graphql/queries/organization-tasks.graphql');

export default function OrganizationTasksPage() {
    return (
        <Page title="Organization Tasks">
            <OrganizationTasksList />
        </Page>
    );
}

export function OrganizationTasksList() {
    const { data, loading, error } = useQuery(GET_ORGANIZATION_TASKS_QUERY);

    if (loading) {
        return <Skeleton variant="text" height="70vh" width="100%" />;
    }
    if (error) {
        return <h1>Ooops! Something went wrong...</h1>;
    }
    if (!data?.organizationTasks.length) {
        return <h1>Sorry, no data found.</h1>;
    }

    return (
        <Box>
            {data.organizationTasks.map(task => (
                <div key={task.id}>
                    <p>{task.title?.length && <span>{task.title}</span>}</p>
                    <p>{task.description?.length && <span>{task.description}</span>}</p>
                    <p>{task.isDone ? 'Task is done' : 'Task to be taken'}</p>
                </div>
            ))}
        </Box>
    );
}

/* export function TaskCard({
    title,
    description,
    id,
    isDone = false
}: {
    title?: string;
    description?: string;
    id: number;
    isDone?: boolean;
}); */
