const initial = {
    images: [],
    favourite: []
};

const reducer = (state = initial, action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return {
                ...state, images: action.payload
            }

        case 'SET_FAVOURITE':
            if (state.favourite.find(item => item.title === action.payload.title))
                return {
                    ...state, favourite: state.favourite.filter(item => item.title !== action.payload.title)
                }
            else
                return {
                    ...state, favourite: [...state.favourite, action.payload]
                }

        default:
            return state
    }
}
export default reducer;