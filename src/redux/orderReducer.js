const initialState = {
    order: []

}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_ORDER": {
            return {
                ...state,
                order: [...state.order, action.payload]
            }
        }
        case "DELETE_FROM_ORDER": {
            return {
                ...state,
                order: state.order.filter(obj => obj.id !== action.payload.id)
            }
        }
        default: return state;
    }
}