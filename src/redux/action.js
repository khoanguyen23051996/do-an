// Trang khai báo method để xử reducer: add, update, del

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
            quantity: data.quantity,
        }
    }
}

export const deleteProd = (id) => {
    return {
        type: 'prod/delete',
        payload: id
    }
}