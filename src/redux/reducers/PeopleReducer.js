
const initialState = {
    data: [],
    loading: false,
    isError: false
}

const PeopleReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCHING_DATA":
            return {
                ...state,
                data: [],
                loading: true,
                isError: false
            }
        case "FETCHING_DATA_FAILURE":
            return {
                ...state,
                data: [],
                loading: false,
                isError: true
            }
        case "FETCHING_DATA_SUCCESS":
            return {
                ...state,
                data: action.payload,
                loading: false,
                isError: false
            }
        default: 
            return state
    }
}

export default PeopleReducer