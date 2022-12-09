import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const CoachLogin = () => {

    const coach = useSelector(state => state.coach.coach)
    const navigate = useNavigate()
    const name = useRef()
    const password = useRef()
    const coachLoginHandler = (e) => {
        e.preventDefault()
        const coachName = name.current.value;
        const coachPassword = password.current.value
        if (coachName === "" && coachPassword === "") {
            return alert("Please Fill first")
        }
        const isCoach = coach.find(item => item.name === coachName && item.password === coachPassword)
        if (!isCoach) return alert("Coach Not Exist")

        navigate(`../coach/${isCoach.id}/home`)
    }
    return (

        <div className="container border border-dark bg-dark " style={{ width: "450px", textAlign: "center", color: "white", marginTop: "10%" }}>
            <h2>Coach Login</h2>
            <img src={require('./healthcoach.png')} alt="..." style={{ height: "60px" }} />
            <form>
                <div className="mb-3">

                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your name' ref={name} />

                </div>
                <div className="mb-3">

                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' ref={password} />
                </div>
                <div className="mb-3 form-check">

                </div>
                <button type="submit" onClick={coachLoginHandler} className="btn btn-primary" style={{ width: "100%", marginBottom: "10px" }}>Login</button>
            </form>
        </div>

    )
}