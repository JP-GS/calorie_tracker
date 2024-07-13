import { Activity } from "../types";

export type ActivityActions =   
    { type : 'save-action', payload : {newActivity : Activity} }

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities : []
}

export const activityReducer = (

    state: ActivityState = initialState,
    action: ActivityActions

    ) => {

        if( action.type === 'save-action' ) {
            //Estecódigo maneja la lógica que modifica al state
            console.log('desde el type de reducer')
        }

    return state
}