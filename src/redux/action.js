export const addProd = (data) => {
    return {
        type: 'prod/add',
        payload: data
    }
}

export const updateProd = (data) => {
    return {
        type: 'prod/update',
        payload: {
            id: data.id,
            quanity: data.quanity,
        }
    }
}

export const deleteProd = (id) => {
    return {
        type: 'prod/delete',
        payload: id
    }
}