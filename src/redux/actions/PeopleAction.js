import {fetchAllPeople} from '../../api/people'

export const getData = () => ({ type: "FETCHING_DATA" })
export const fetchSuccess = (payload) => ({ type: "FETCHING_DATA_SUCCESS", payload })

export const _fetchAllPeople = () => {
    return dispatch => {
        dispatch(getData())
        fetchAllPeople().then(resp => {
            dispatch(fetchSuccess(resp))
        })
    }
}