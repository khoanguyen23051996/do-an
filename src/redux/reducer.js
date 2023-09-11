const initState = {
    prods: [],
}

//xử lí reducer
const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'prod/add':
            const list = state.prods.filter(prod => prod.id !== action.payload.id)

            return {
                prods: [
                    ...list,
                    action.payload
                ]
            }
        case 'prod/update':
            let prods = state.prods
            let prodIndex = prods.findIndex((item) => item.id === action.payload.id)
            prods[prodIndex] = {...prods[prodIndex], quanity: action.payload.quanity}

            return {
                prods
            }
        case 'prod/delete':
            return {
                prods: state.prods.filter(prod => prod.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default rootReducer