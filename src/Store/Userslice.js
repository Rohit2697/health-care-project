import { createSlice } from '@reduxjs/toolkit'

const usersInitial = {
    user: [{
        id: 1,
        name: "Maria",
        password: "maria12345",
        gender: "F",
        dateOfBirth: "1996-01-01",
        email: "maria@gmail.com",
        mobileNumber: 1234567890,
        pincode: 123456,
        city: "Bangalore",
        state: "Karnataka",
        country: "India"
    }],
    userAdded: false,
    userAppointment: []
}
export const userSlice = createSlice({
    name: "user-slice",
    initialState: usersInitial,
    reducers: {
        addUser(state, action) {
            const newUser = action.payload;
            const isExistingUser = state.user.find((user) => user.id === newUser.id)
            if (isExistingUser) return alert("Existing User")
            state.userAdded = true;
            state.user = [...state.user, newUser]


        },
        toogeAddUser(state) {
            state.userAdded = false
        },
        addAppointment(state, action) {
            const appointment = action.payload
            state.userAppointment = [...state.userAppointment, appointment]
        }
        // showUser() { }
    }

})
const calculateAge = (date) => {
    const dob = new Date(date);
    //calculate month difference from current date in time  
    const month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format  
    const age_dt = new Date(month_diff);

    //extract year from date      
    const year = age_dt.getUTCFullYear();

    //now calculate the age of the user  
    const age = Math.abs(year - 1970);

    return age
}
export const AddUser = (newUser) => {
    return (dispatch) => {
        //dispatch(userAction.addUser(newUser))
        dispatch(userAction.toogeAddUser())
        const age = calculateAge(newUser.dateOfBirth)
        // console.log(`newUser.name.length: ${newUser.name.length}  newUser.password.length: ${newUser.password.length} age: ${age}  newUser.gender.length: ${newUser.gender.length}`)
        if (newUser && newUser.name.length >= 3 && newUser.name.length <= 50 && newUser.password.length >= 5 && newUser.password.length <= 10
            && age >= 20 && age <= 100 && newUser.gender.length && newUser.mobileNumber.length === 10) {
            dispatch(userAction.addUser(newUser))
        }

        else {
            //if the details are wrong
            alert("Please fill valid details")
        }
    }
}
export const userAction = userSlice.actions