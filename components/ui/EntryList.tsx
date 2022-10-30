import React from 'react';
import { List, Paper } from '@mui/material';
import { EntryCard } from './';

export const EntryList = () => {
    return (
        <div>
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>
                <List sx={{ opacity: 1 }}>
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                </List>
            </Paper>
        </div>
    )
}