//import { userAction } from '../../Store/Userslice'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'



export const UserLogin = () => {
    // <Routes>
    //     <Route path='home' element={<UserHome />} />
    //     <Route path='login' element={<UserLogin />} />
    //     {/* <Route path='signup' element={<UserSignUp />} /> */}
    // </Routes>
    const user = useSelector(state => state.user.user)
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    //const history=useHistory()

    const loginHandler = (e) => {
        e.preventDefault()
        if (email.current.value !== "" && password.current.value !== "") {
            const isUser = user.find(item => item.email === email.current.value && item.password === password.current.value)
            if (!isUser) return alert("Wrong Creds")
            // redirect('ZZBJ')
            //navigate('../user/home')
            navigate(`${isUser.id}/home`)




        }

    }
    return (

        <div className="container border border-dark bg-dark " style={{ width: "450px", textAlign: "center", color: "white", marginTop: "10%" }}>
            <h2>User Login</h2>
            <img src={require('./userlogo.png')} alt="..." style={{ height: "60px" }} />
            <form onSubmit={loginHandler}>
                <div className="mb-3">

                    <input type="email" ref={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' />

                </div>
                <div className="mb-3">

                    <input type="password" ref={password} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' />
                </div>
                <div className="mb-3 form-check">

                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", marginBottom: "10px" }}>Submit</button>
            </form>
        </div>

    )
}