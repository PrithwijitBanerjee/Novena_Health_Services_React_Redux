import React from 'react'

const CoreDoctorHeader = () => {
    return (
        <>
            <section className="page-title bg-1">
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <span className="text-white">All Doctors</span>
                                <h1 className="text-capitalize mb-5 text-lg">Specalized doctors</h1>
                                {/* <ul class="list-inline breadcumb-nav">
      <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
      <li class="list-inline-item"><span class="text-white">/</span></li>
      <li class="list-inline-item"><a href="#" class="text-white-50">All Doctors</a></li>
    </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CoreDoctorHeader