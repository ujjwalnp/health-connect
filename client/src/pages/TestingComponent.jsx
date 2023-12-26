import React from "react"

const TestingComponent = () => {
    const name = 'Srijan'
    const email = 'srijan@gmail'
  return (
    <div>
      <h2>Your Details</h2>

      <div className="row d-flex">
        <div className="col-lg-4 ">
          <div className="card mb-4 ">
            <div className="card-body text-center">
              <img
                src="{ profile_pic }"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: "150px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{ name }</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{ email }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestingComponent