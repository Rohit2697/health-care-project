import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
//import { Appointment } from "./Appointment"
export const UserHome = () => {

    const coaches = useSelector(state => state.coach.coach)
    //console.log(coaches)

    const parms = useParams()
    console.log(parms)

    return (
        <>

            {/* <Route path={`${location.pathname}/appointment`} element={<Appointment />}></Route> */}


            <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {/*item.gender === 'F' ? require('../../../public/femalecoach.png') : require('../../../public/malecoach.png')*/}
                    {coaches.length && coaches.map(item => {
                        return (
                            <div className="col border border-dark card bg-dark" key={item.id} style={{ width: "18rem", textAlign: "center", color: "white" }}>
                                <img src={require(`../Coach/${item.gender === 'F' ? 'femalecoach' : 'malecoach'}.png`)} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Coach ID:{item.id}</p>
                                    <p className="card-text">Mobile No:{item.mobileNumber}</p>
                                    <p className="card-text">speciality:{item.speciality}</p>
                                    <Link to={`../user/${parms.userId}/${item.id}/appointment`} className="btn btn-primary">Book an Appointment</Link>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>

        </>
    )

}