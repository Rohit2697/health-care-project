import { createSlice } from '@reduxjs/toolkit'

const coachInitialState = {
    coach: [{
        id: 1,
        name: "Rose",
        password: "rose12345",
        gender: "F",
        dateOfBirth: "1996-01-01",
        mobileNumber: 1234567890,
        speciality: "Confidence Issues"
    }]
}
export const coachSlice = createSlice({
    name: 'coach-slice',
    initialState: coachInitialState,
    reducers: {
        addCoach(state, action) {
            const newCoach = action.payload
            const isExistingCoach = state.coach.find(coach => coach.id === newCoach.id)
            if (isExistingCoach) return alert("Existing Coach")
            state.coach = [...state.coach, newCoach]
        }
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

export const AddCoach = (newCoach) => {

    return (dispatch) => {
        const age = calculateAge(newCoach.dateOfBirth)  
       console.log(`newCoach.name.length: ${newCoach.name.length}  newCoach.password.length: ${newCoach.password.length} age: ${age}  newCoach.gender.length: ${newCoach.gender.length} newCoach.speciality.length ${newCoach.speciality.length}`)
        
        if (newCoach && newCoach.name.length >= 3 && newCoach.name.length <= 50 && newCoach.password.length >= 5 && newCoach.password.length <= 10
            && age >= 20 && age <= 100 && newCoach.gender.length && newCoach.mobileNumber.length === 10 && newCoach.speciality.length >= 10 && newCoach.speciality.length <= 50) {
            dispatch(coachAction.addCoach(newCoach))
        }
        else {
            alert("Invalid Data")
        }
    }


}

export const coachAction = coachSlice.actions