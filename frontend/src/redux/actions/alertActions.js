export const errorAction = (error) => { 
    return { type: 'ADD_ERROR', error }
}
export const messageAction = (message) => { 
    return { type: 'ADD_MESSAGE', message }
}