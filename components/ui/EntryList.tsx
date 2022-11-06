import { DragEvent, FC, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
import { EntryCard } from './';
import styles from './EntryList.module.css'
import { EntryStatus } from '../../interfaces';

interface EntryListStatusProps {
    status: EntryStatus
}

export const EntryList: FC<EntryListStatusProps> = ({ status }) => {

    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, endDragging } = useContext(UIContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const onDropEntry = (e: DragEvent<HTMLDivElement>) => {

        const id = e.dataTransfer.getData('text');

        const entry = entries.find(e => e._id === id)!;

        entry.status = status;

        updateEntry(entry);

        endDragging();

    }

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.isDraggingBackground : ''}>
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s ease' }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}