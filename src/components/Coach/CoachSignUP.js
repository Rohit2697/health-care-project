import { useSelector, useDispatch } from "react-redux"
import { useRef } from "react"
//import { coachAction } from "../../Store/CoachSlice"
import { AddCoach } from "../../Store/CoachSlice"

export const CoachSignUp = () => {

    // id: 1,
    // name: "Rose",
    // password: "rose12345",
    // gender: "F",
    // dateOfBirth: "1996-01-01",
    // mobileNumber: 1234567890,
    // speciality: "Confidence Issues"
    const dispatch = useDispatch()

    const name = useRef()
    const password = useRef()
    const gender = useRef()
    const dateOfBirth = useRef()
    const mobileNumber = useRef()
    const speciality = useRef()

    const coach = useSelector(state => state.coach.coach)
    console.log(coach)

    const coachSubmissionHandler = (e) => {
        e.preventDefault()
        dispatch(AddCoach({
            id: Math.floor(Math.random() * 5),
            name: name.current.value,
            password: password.current.value,
            gender: gender.current.value,
            dateOfBirth: dateOfBirth.current.value,
            mobileNumber: mobileNumber.current.value,
            speciality: speciality.current.value
        }))
    }
    return (

        <div className="container border border-dark card bg-dark" style={{ height: "400px", width: "600px", marginTop: '50px', color: "white" }}>



            <form className="card-body">
                <div style={{
                    display: "grid", alignItems: "center",
                    gridTemplateColumns: ".5fr 1fr",
                    columnGap: "5px"
                }}>
                    <div style={{ height: "80px", width: "80px", marginLeft: "60px" }}>
                        <img src={require("./healthcoach.png")} alt=" " className="card-img-top" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                    </div>
                    <div>
                        <h4 className="card-title">Life Coach Profile</h4>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input ref={name} type="text" className="form-control" aria-describedby="name" />
                    </div>
                    <div className="col">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input ref={password} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input ref={dateOfBirth} type="date" className="form-control" aria-describedby="dob" />
                    </div>
                    <div className="col">
                        <label htmlFor="gender" className="form-label">Gender</label>

                        <div className="form-check">
                            <input ref={gender} type="radio" className="form-check-input" id="male" name="gender" value="male" />
                            <label htmlFor="male" className="form-check-label">Male</label>

                        </div>
                        <div className="form-check">
                            <input ref={gender} type="radio" className="form-check-input" id="female" name="gender" value="female" />
                            <label htmlFor="female" className="form-check-label" >Female</label>
                        </div>

                    </div>
                </div>



                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="mobilenumber" className="form-label">Mobile number</label>
                        <input ref={mobileNumber} type="number" className="form-control" aria-describedby="mobilenumber" />
                    </div>
                    <div className="col">
                        <label htmlFor="speciality" className="form-label">Speciality</label>
                        <input ref={speciality} type="text" className="form-control" id="speciality" />
                    </div>
                </div>


                <div style={{ textAlign: "center", marginTop: "15px", }}>
                    <button onClick={coachSubmissionHandler} style={{ width: "60%" }} type="submit" className="btn btn-success">Register</button>
                </div>
            </form>
        </div>
    )
}