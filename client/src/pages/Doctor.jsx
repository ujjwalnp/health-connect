import React from 'react';
import Doc from '../assets/doctor.png';

const Doctor = () => {
    return (
        <section className="bg-slate-200">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card bg-zinc-700">
                            <div className="card-body text-center">
                                <img src={Doc} alt="doctor" className="rounded-full" />
                                <h5 className="my-3 text-white text-bold">John Smith</h5>
                                <p className="text-white mb-1">Psychologist</p>
                                <p className="text-white mb-4">Maitidevi, Kathmandu</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-primary me-1">
                                        Follow
                                    </button>
                                    <button type="button" className="btn btn-outline-primary">
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="card mb-4 bg-zinc-700">
                            <div className="card-body  text-white">
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name:</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Johnatan Smith</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email:</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">example@example.com</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone:</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(097) 234-5678</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Mobile:</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(098) 765-4321</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Address:</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctor;
