let initialState = {
    propertyName: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

// const STEP_ONE = 'STEP_ONE';
// const STEP_TWO = 'STEP_TWO';
const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const RESET_STATE = 'RESET_STATE';


export default function reducer(state = initialState, action) {

    switch(action.type) {

        // case STEP_ONE:
        //     return Object.assign({}, state, {
        //                 propertyName: action.payload.propertyName,
        //                 address: action.payload.address,
        //                 city: action.payload.city,
        //                 state: action.payload.state,
        //                 zip: action.payload.zip,
        //                 img: action.payload.img
        //             })

        // case STEP_TWO:
        //     return Object.assign({}, state, {img: action.payload})

        case UPDATE_PROPERTY_NAME:
            return Object.assign({}, state, {propertyName: action.payload})

        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload})

        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})

        case UPDATE_STATE:
            return Object.assign({}, state, {state: action.payload})

        case UPDATE_ZIP:
            return Object.assign({}, state, {zip: action.payload})

        case UPDATE_IMG:
            return Object.assign({}, state, {img: action.payload})

        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {mortgage: action.payload})

        case UPDATE_RENT:
            return Object.assign({}, state, {rent: action.payload})

        case RESET_STATE:
            return Object.assign({},state, {
                propertyName: action.payload.propertyName,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip,
                img: action.payload.img,
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
            })

        default:
            return state
    }
}

// export function updateStepOne(house) {
    
//     return {
//         type: STEP_ONE,
//         payload: {
//             propertyName: house.propertyName,
//             address: house.address,
//             city: house.city,
//             state: house.state,
//             zip: house.zip
//         }
//     }
// }

// export function updateStepTwo(img) {
//     console.log(img)
//     return {
//         type: STEP_TWO,
//         payload: {
            
//         }
//     }
// }

export function updatePropertyName(name) {
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export function resetState() {
    return {
        type: RESET_STATE,
        payload: {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            img: '',
            mortgage: 0,
            rent: 0
        }
    }
}