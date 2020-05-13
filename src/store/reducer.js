import * as actionType from './actions/actionType'

const initialState={
    data:[],
    error:null,
    count:null,
    isDetailPage:false
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionType.FECTH_DATA_SUCCESS:
            const newData={...action.data}
            return{
                ...state,
                data:newData,
                count:action.count,
                isDetailPage:true
            }
        case actionType.FECTH_DATA_FAILED:
            return{
                ...state,
                error:action.error,
                isDetailPage:false
            }
        case actionType.GO_BACK:
            return{
                ...state,
                isDetailPage:false,
                count:-1
            }
        default:
            return state
    }
}

export default reducer;