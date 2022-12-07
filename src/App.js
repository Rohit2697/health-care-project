
import './App.css';
import { CoachSignUp } from './components/Coach/CoachSignUP';
import { UserSignUp } from './components/User/UserSignUP';
//import { useSelector } from 'react-redux'
function App() {
  // const user = useSelector(state => state.user.user)
  // console.log(user)
  return (
    <>
      {/* <UserSignUp></UserSignUp> */}
      <CoachSignUp></CoachSignUp>

    </>
  );
}

export default App;
