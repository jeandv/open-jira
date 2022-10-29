import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface EntriesContextProps {
    entries: Entry[];
}

export const EntriesContext = createContext({} as EntriesContextProps);