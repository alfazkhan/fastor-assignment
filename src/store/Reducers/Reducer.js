const initialState = {
    user_id: null,
    user_email: null,
    user_name: null,
    user_mobile: null,
    token: null,
    userLogin: false
}


const reducer = (state = initialState, action) => {
    let updatedState
    switch (action.type) {
        case "USER_LOGIN":
            updatedState = { 
                ...state,
                user_id: action.data.user_id,
                user_email: action.data.user_email,
                user_name: action.data.user_name,
                user_mobile: action.data.user_mobile,
                token: action.data.token,
                userLogin: true
            }
            // console.log(updatedState)
            // localStorage.setItem('state',JSON.stringify(updatedState))
            return updatedState
    }
}

export default reducer