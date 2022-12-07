
import { useSelector, useDispatch } from 'react-redux'
import { AddUser } from '../../Store/Userslice'
import { useRef } from 'react'
export const UserSignUp = () => {

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    console.log(user)

    const name = useRef()
    const password = useRef()
    const dob = useRef()
    const gender = useRef()
    const mNo = useRef()
    // const speciality = useRef()
    const pincode = useRef()
    const city = useRef()
    const state = useRef()
    const country = useRef()
    const email = useRef()


    const registerHandler = (e) => {

        e.preventDefault()
        // console.log(dob.current.value)
        dispatch(AddUser({

            id: Math.floor(Math.random() * 1000),
            name: name.current.value,
            password: password.current.value,
            gender: gender.current.value,
            dateOfBirth: dob.current.value,
            email: email.current.value,
            mobileNumber: mNo.current.value,
            pincode: pincode.current.value,
            city: city.current.value,
            state: state.current.value,
            country: country.current.value

        }))

    }

    return (

        <div className="container border border-dark card bg-dark" style={{ height: "550px", width: "600px", marginTop: '50px', color: "white" }}>
            <form className="card-body">
                <div style={{
                    display: "grid", alignItems: "center",
                    gridTemplateColumns: ".5fr 1fr",
                    columnGap: "5px"
                }}>
                    <div style={{ height: "80px", width: "80px", marginLeft: "100px" }}>
                        <img src={require('./userlogo.png')} alt=" " className="card-img-top" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                    </div>
                    <div>
                        <h4 className="card-title">User Profile</h4>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input ref={name} type="text" className="form-control" aria-describedby="name" />
                    </div>
                    <div className="col">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input ref={password} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <label for="dob" className="form-label">Date of Birth</label>
                        <input ref={dob} type="date" className="form-control" aria-describedby="dob" />
                    </div>
                    <div className="col">
                        <label for="gender" className="form-label">Gender</label>

                        <div className="form-check">
                            <input ref={gender} type="radio" className="form-check-input" id="male" name="gender" value="male" />
                            <label for="male" className="form-check-label">Male</label>

                        </div>
                        <div className="form-check">
                            <input ref={gender} type="radio" className="form-check-input" id="female" name="gender" value="female" />
                            <label for="female" className="form-check-label" >Female</label>
                        </div>

                    </div>
                </div>



                <div className="row align-items-center">
                    <div className="col">
                        <label for="mobilenumber" className="form-label">Mobile number</label>
                        <input ref={mNo} type="number" className="form-control" aria-describedby="mobilenumber" />
                    </div>
                    <div className="col">
                        <label for="mobilenumber" className="form-label">Email</label>
                        <input ref={email} type="text" className="form-control" aria-describedby="email" />
                    </div>
                    {/* <div className="col">
                        <label for="speciality" className="form-label">Speciality</label>
                        <input ref={speciality} type="text" className="form-control" id="speciality" />
                    </div> */}
                </div>



                <div className="row align-items-center">
                    <div className="col">
                        <label for="pincode" className="form-label">pincode</label>
                        <input ref={pincode} type="number" className="form-control" aria-describedby="pincode" />
                    </div>
                    <div className="col">
                        <label for="city" className="form-label">city</label>
                        <input ref={city} type="text" className="form-control" id="city" />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <label for="state" className="form-label">state</label>
                        <input ref={state} type="text" className="form-control" aria-describedby="state" />
                    </div>
                    <div className="col">
                        <label for="country" className="form-label">country</label>
                        <input ref={country} type="text" className="form-control" id="country" />
                    </div>
                </div>



                <div style={{ textAlign: "center", marginTop: "15px", }}>
                    <button onClick={registerHandler} style={{ width: "60%" }} type="submit" className="btn btn-success">Register</button>
                </div>
            </form>
        </div>
    )
}