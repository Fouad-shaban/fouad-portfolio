import React from 'react'

const Service = () => {
  return (
    <div>
        <section className="section" id="service">
        <div className="container text-center">
            <p className="section-subtitle">What I Do?</p>
            <h6 className="section-title mb-6">Service</h6>

            <div className="row flex flex-wrap justify-center">
                <div className="col-md-6 col-lg-3 ">
                    <div className="service-card">
                        <div className="body">
                            <img src="assets/imgs/pencil-case.svg" alt="" className="icon"/>
                            <h6 className="title font-bold">Front-End Development</h6>
                            <p className="subtitle">I build modern, responsive, and dynamic user interfaces using (React.js).</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 ">
                    <div className="service-card">
                        <div className="body">
                            <img src="assets/imgs/responsive.svg" alt="" className="icon"/>
                            <h6 className="title font-bold">Back-End Development & API Integration</h6>
                            <p className="subtitle">I develop powerful and secure server-side applications using (Node.js) and (Express.js), create RESTful APIs </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 ">
                    <div className="service-card">
                        <div className="body">
                            <img src="assets/imgs/analytics.svg" alt="" className="icon"/>
                            <h6 className="title font-bold">Database Design & Integration</h6>
                            <p className="subtitle">work with both SQL (MySQL) and NoSQL (MongoDB) databases to design scalable, efficient, and secure data structures.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 ">
                    <div className="service-card">
                        <div className="body">
                            <img src="assets/imgs/toolbox.svg " alt="" className="icon"/>
                            <h6 className="title font-bold">Deployment & Maintenance</h6>
                            <p className="subtitle">deploy full-stack applications to platforms like Vercel, Render, Heroku, and DigitalOcean. I also provide ongoing maintenance and support to ensure smooth performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Service