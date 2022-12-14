import { DragEvent, FC, useContext } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces';

interface EntryCardProps {
    entry: Entry;
}

export const EntryCard: FC<EntryCardProps> = ({ entry }) => {

    const { startDragging, endDragging } = useContext(UIContext);

    const onDragStart = (e: DragEvent) => {
        e.dataTransfer.setData('text', entry._id);

        startDragging();
    }

    const onDragEnd = () => {
        endDragging();
    }

    return (
        <Card
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            sx={{ marginBottom: 1 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}