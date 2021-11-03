export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const toggleFavorite = ()=>{
    console.log('working here')
    return({type: TOGGLE_FAVORITE});
}

export const addFavorite = (obj)=>{
    return({type: ADD_FAVORITE, payload:obj});
}

export const removeFavorite = (id)=>{
    return({type: REMOVE_FAVORITE, payload:id});
}