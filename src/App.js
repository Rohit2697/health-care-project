
import './App.css';
import { CoachSignUp } from './components/Coach/CoachSignUP';
import { UserSignUp } from './components/User/UserSignUP';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './components/UI/Home';
import { CoachHome } from './components/Coach/CoachHome';
import { CoachLogin } from './components/Coach/CoachLogin';
import { UserHome } from './components/User/UserHome';
import { UserLogin } from './components/User/UserLogin';
import { NopageFound } from './components/UI/NoPageFound';
import { Appointment } from './components/User/Appointment';
import { NavBar } from './components/UI/Navbar';
//import { useSelector } from 'react-redux'
function App() {
  // const user = useSelector(state => state.user.user)
  // console.log(user)
  return (
    <>
      <NavBar />
      <Routes>
        {/* 
      <Route path='/' element={<Home />} />
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='coach/home/' element={<CoachHome />} />
      <Route path='coach/signup' element={<CoachSignUp />} />
      <Route path='coach/login' element={<CoachLogin />} />

     
      <Route  path='user' element={<UserHome />} />
      <Route path='user/signup' element={<UserSignUp />} />
      <Route path='user/login' element={<UserLogin />} />
      <Route path='*' element={<NopageFound />} /> */}


        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='coach' element={<CoachLogin />} />
        <Route path='coach/:coachId/home' element={<CoachHome />} />
        <Route path='coach/login' element={<Navigate to='/coach' />} />
        <Route path='coach/signup' element={<CoachSignUp />} />

        <Route path='user' element={<UserLogin />} />
        <Route path='user/:userId/home' element={<UserHome />} />
        <Route path='user/login' element={<Navigate to='/user' />} />
        <Route path='user/signup' element={<UserSignUp />} />
        <Route path='user/:userId/:coachId/appointment' element={<Appointment />} />

        <Route path='*' element={<NopageFound />} />

      </Routes>

     {/* <UserSignUp></UserSignUp> */}
     {/* <CoachSignUp></CoachSignUp> */}

    </>
  );
}

export default App;
