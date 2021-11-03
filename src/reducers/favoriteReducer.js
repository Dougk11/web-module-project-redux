import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITE } from "../actions/favoriteActions";


const initialState = {
    favorites: [],
    displayFavorites: false
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case TOGGLE_FAVORITE:
            return {
                displayFavorites: !state.displayFavorites,
            }

        default:
            return state;
    
    
    }

}

export default reducer;