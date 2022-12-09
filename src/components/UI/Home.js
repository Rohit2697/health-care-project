import { Link } from 'react-router-dom'
export const Home = () => {

    return (
        <div className="container px-4" style={{ marginTop: "10%", textAlign: "center" }}>
            <div className="row gx-5 ">

                <div className="col card bg bg-dark border border-light" style={{ width: "10rem", alignItems: "center" }}>
                    <img src={require('../Coach/healthcoach.png')} className="card-img-top" alt="..." style={{ height: "100%", width: "30%" }} />
                    <div className="card-body">

                        <Link to="../coach/signup" className="btn btn-primary">Coach SignIn Page</Link>
                    </div>
                    <div className="card-body">

                        <Link to="../coach/login" className="btn btn-primary">Coach Login Page</Link>
                    </div>
                </div>


                <div className="col card bg bg-dark border border-light" style={{ width: "10rem", alignItems: "center" }}>
                    <img src={require('../User/userlogo.png')} className="card-img-top" alt="..." style={{ height: "100%", width: "30%" }} />
                    <div className="card-body">

                        <Link to="/user/signup" className="btn btn-primary">User SignIn Page</Link>
                    </div>
                    <div className="card-body">

                        <Link to="../user/login" className="btn btn-primary">User Login Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}