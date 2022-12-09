import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const CoachHome = () => {
    const parms = useParams()
    const coachAppointments = useSelector(state => state.coach.coachAppointment)
    const appointments = coachAppointments.filter(item => item.id === parseInt(parms.coachId))
    console.log(coachAppointments)
    console.log(parms.coachId)
    return (

        <>
            {
                appointments.length ?

                    appointments.map((item) => {

                        return (

                            <div className="card" key={item.appointmentId}>
                                <div className="card-body">
                                    {item.appointmentId}
                                    {item.userName}
                                    {item.date}
                                    {item.timeslot}
                                </div>
                            </div>
                        )
                    })

                    :

                    <div className="card" style={{ width: "350px" }}>
                        <div className="card-body">
                            you Do Not have any Appointment! Have Fun!
                        </div>
                    </div>

            }
        </>
    )
}