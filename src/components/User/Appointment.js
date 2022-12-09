import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { userAction } from "../../Store/Userslice"
import { coachAction } from "../../Store/CoachSlice"
export const Appointment = () => {
    const navigate = useNavigate()
    const users = useSelector(state => state.user.user)
    const coaches = useSelector(state => state.coach.coach)
    const parms = useParams()
    const dispatch = useDispatch()
    const date = useRef()
    console.log(parms)
    const bookAppointment = (e) => {
        e.preventDefault();

        let slot = undefined
        const ele = document.getElementsByName('flexRadioDefault')
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) slot = ele[i].value
        }

        const user = users.find(item => item.id === parseInt(parms.userId))

        const coach = coaches.find(item => item.id === parseInt(parms.coachId))
        const userAppointment = {

            id: user.id,
            coachName: coach.name,
            coachSpeicality: coach.speciality,
            date: date.current.value,
            timeslot: slot
        }
        const coachAppointment = {
            appointmentId:Math.floor(Math.random()*100),
            id: coach.id,
            userName: user.name,
            date: date.current.value,
            timeslot: slot

        }

        dispatch(userAction.addAppointment(userAppointment))
        dispatch(coachAction.coachAppointment(coachAppointment))
        navigate(`../user/${parms.userId}/home`)

    }


    return (

        <div className="container border border-dark  bg-dark" style={{ width: "700px", textAlign: "center", color: "white", marginTop: "10%" }}>
            <div className="mb-3">

                <p>Appointment Date & Slot</p>
                <input type="date" className="form-control" placeholder="name@example.com" ref={date} />
                <p>Preferred Slot</p>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="col form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="10AM-12PM" checked />
                        <label className="form-check-label" htmfor="flexRadioDefault1">
                            10AM-12PM
                        </label>
                    </div>
                    <div className="col form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="12PM-2PM" />
                        <label className="form-check-label" htmfor="flexRadioDefault2">
                            12PM-2PM
                        </label>
                    </div>
                    <div className="col form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="2PM-4PM" />
                        <label className="form-check-label" htmfor="flexRadioDefault2">
                            2PM-4PM
                        </label>
                    </div>
                    <div className="col form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="4PM-6PM" />
                        <label className="form-check-label" htmfor="flexRadioDefault2">
                            4PM-6PM
                        </label>
                    </div>
                </div>
                <div className="card-body">
                    <Link to={`../${parms.name}/home`} onClick={bookAppointment} className='btn btn-primary' style={{ width: "100%" }}>Book an Appointment</Link>
                </div>
            </div>

        </div>
    )
}