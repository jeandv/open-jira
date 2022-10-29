import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

interface EntriesProviderProps {
    children: JSX.Element | JSX.Element[];
}

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, dolore.',
            status: 'pending',
            createdAt: Date.now() - 140630
        },
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur',
            status: 'in-progress',
            createdAt: Date.now() - 1201030
        },
        {
            _id: uuidv4(),
            description: 'adipisicing elit. Facere, dolore.',
            status: 'finished',
            createdAt: Date.now() - 203300
        },
    ],
}

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{
            ...state,
        }}>
            {children}
        </EntriesContext.Provider>
    )
}