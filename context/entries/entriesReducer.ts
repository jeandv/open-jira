import { EntriesState } from './';

type EntriesActionType =
    | { type: 'Entries - ActionName' }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        // case 'firstCase':
        //     return {
        //         ...state,
        //    }

        default:
            return state;
    }
}