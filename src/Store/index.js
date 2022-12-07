// const { userAction } = require('./Userslice')
// const { configureStore } = require('@reduxjs/toolkit')
//const {useSelector}=require('react-redux')

import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './Userslice'
import { coachSlice } from './CoachSlice'




const store = configureStore({


    reducer: { user: userSlice.reducer, coach: coachSlice.reducer }
})

export default store





