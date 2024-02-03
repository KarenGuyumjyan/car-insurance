import {createEvent, createStore, EventCallable} from 'effector';

type AddedDamageAreaEvent = EventCallable<string>;

export const $damageList = createStore<string[]>([]);
export const addDamageList: AddedDamageAreaEvent = createEvent();

$damageList.on(addDamageList, (state, addedArea) => {
        const index = state.findIndex(item => item === addedArea)
        if(index !== -1){
            state.splice( index, 1);
            return state;
        } else{
            return [...state, addedArea];
        }
    }
);