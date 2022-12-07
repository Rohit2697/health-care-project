export const CoachSignUp = () => {
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
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" aria-describedby="name" />
                    </div>
                    <div className="col">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <label for="dob" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" aria-describedby="dob" />
                    </div>
                    <div className="col">
                        <label for="gender" className="form-label">Gender</label>

                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="male" name="gender" value="male" />
                            <label for="male" className="form-check-label">Male</label>

                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="female" name="gender" value="female" />
                            <label for="female" className="form-check-label" >Female</label>
                        </div>

                    </div>
                </div>



                <div className="row align-items-center">
                    <div className="col">
                        <label for="mobilenumber" className="form-label">Mobile number</label>
                        <input type="number" className="form-control" aria-describedby="mobilenumber" />
                    </div>
                    <div className="col">
                        <label for="speciality" className="form-label">Speciality</label>
                        <input type="text" className="form-control" id="speciality" />
                    </div>
                </div>


                <div style={{ textAlign: "center", marginTop: "15px", }}>
                    <button style={{ width: "60%" }} type="submit" className="btn btn-success">Register</button>
                </div>
            </form>
        </div>
    )
}