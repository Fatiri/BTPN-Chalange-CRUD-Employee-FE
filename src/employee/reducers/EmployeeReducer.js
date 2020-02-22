const initialState = {
    employee: [],
    dataEmployeePagination: [],
    dataInputEmployee: {
        photo: "",
        firstName: "",
        lastName: "",
        age: ""
    },
    dataUpdateEmployee: {
        photo: "",
        firstName: "",
        lastName: "",
        age: ""
    },
    paginationCardEmployee:{
        size: 8,
        position:0,
        data:[]
    }
};

export function employeeReducer(state = initialState, action) {

    switch (action.type) {
        case 'FETCH_DATA_EMPLOYEE_SUCCESS':
            return {...state, employee: action.employee};
        case 'FETCH_DATA_EMPLOYEE_BY_ID_SUCCESS':
            return {...state, dataUpdateEmployee: action.dataUpdateEmployee};
        case 'SUCCESS_RESET_STATE':
            return {
                ...state,
                dataInputEmployee: {...state.dataInputEmployee, photo: "", firstName: "", lastName: "", age: ""}
            };
        case 'SUCCESS_URL_PHOTO':
            return {...state, dataInputEmployee: {...state.dataInputEmployee, photo: action.urlPhoto}};
        case 'SUCCESS_FIRST_NAME':
            return {...state, dataInputEmployee: {...state.dataInputEmployee, firstName: action.firstName}};
        case 'SUCCESS_LAST_NAME':
            return {...state, dataInputEmployee: {...state.dataInputEmployee, lastName: action.lastName}};
        case 'SUCCESS_AGE':
            return {...state, dataInputEmployee: {...state.dataInputEmployee, age: action.age}};
        case 'SUCCESS_UPDATE_URL_PHOTO':
            return {...state, dataUpdateEmployee: {...state.dataUpdateEmployee, photo: action.urlPhoto}};
        case 'SUCCESS_UPDATE_FIRST_NAME':
            return {...state, dataUpdateEmployee: {...state.dataUpdateEmployee, firstName: action.firstName}};
        case 'SUCCESS_UPDATE_LAST_NAME':
            return {...state, dataUpdateEmployee: {...state.dataUpdateEmployee, lastName: action.lastName}};
        case 'SUCCESS_UPDATE_AGE':
            return {...state, dataUpdateEmployee: {...state.dataUpdateEmployee, age: action.age}};
        case 'SUCCESS_PAGINATION_SIZE':
            return {...state, paginationCardEmployee: {...state.paginationCardEmployee, size: action.size}};
        case 'SUCCESS_PAGINATION_POSITION':
            return {...state, paginationCardEmployee: {...state.paginationCardEmployee, position: action.position}};
        case 'SUCCESS_PAGINATION_DATA':
            return {...state, paginationCardEmployee: {...state.paginationCardEmployee, data: action.data}};
        default:
            return state;
    }

}
