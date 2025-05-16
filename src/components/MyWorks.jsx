import React from 'react'

const MyWorks = () => {
  return (
    <div>
        <section className="section" id="portfolio">
        <div className="container text-center">
            <p className="section-subtitle">What I Did ?</p>
            <h6 className="section-title mb-6">Portfolio</h6>
            <p className="section-subtitle">Here are some of my works</p>
            
            <div className="flex flex-wrap justify-evenly work-cards ">
                <div className="card-card">
                    <a href="https://e-commerce-flax-theta.vercel.app/" className="portfolio-card" >
                        <img src="assets/imgs/pulse-tech-e-com.png" className="portfolio-card-img" alt=""/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h2 className='font-extrabold'>Pulse Tech</h2>
                                <p className="font-weight-normal">seamless shopping experience.</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
                <div className="card-card">
                    <a href="https://restoo-azure.vercel.app/" className="portfolio-card">
                        <img src="assets/imgs/restaurant.png" className="portfolio-card-img" alt=""/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption ">
                                <h2 className='font-extrabold'>Restoo</h2>
                                <p className="font-weight-normal">Website for a restaurant <br/> that allows visitors to browse the menu </p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
                <div className="card-card">
                    <a href="https://github.com/Fouad-shaban/NotesApp" className="portfolio-card">
                        <img src="assets/imgs/notes.jpg" className="portfolio-card-img" alt=""/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption ">
                                <h2 className='font-extrabold'>notes app</h2>
                                <p className="font-weight-normal"></p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
                <div className="card-card">
                    <a href="https://to-do-list-fawn-eta.vercel.app/" className="portfolio-card">
                        <img src="assets/imgs/TO-DO-LIST.png" className="portfolio-card-img" alt=""/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption ">
                                <h2 className='font-extrabold'>To Do List</h2>
                                <p className="font-weight-normal">A task management application to organize daily activities</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
                <div className="card-card">
                    <a href="https://prayers-times-eight.vercel.app/" className="portfolio-card">
                        <img src="assets/imgs/prayers time.png" className="portfolio-card-img" alt=""/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption ">
                                <h2 className='font-extrabold'>Prayers Times</h2>
                                <p className="font-weight-normal">Stay on time for every prayer</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
                <div className="card-card">
                    <a href="https://trivia-quiz-lime.vercel.app/" className="portfolio-card">
                        <img src="assets/imgs/trivia.jpg" className="portfolio-card-img" alt=""/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption ">
                                <h2 className='font-extrabold'>Trivia Quiz</h2>
                                <p className="font-weight-normal">Interactive trivia game, Challenge your brain.</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
                <div className="card-card">
                    <a href="https://github.com/Fouad-shaban/Cafe-House" className="portfolio-card">
                        <img src="assets/imgs/cafehouse.jpeg" className="portfolio-card-img" alt=""/>    
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption ">
                                <h2 className='font-extrabold'>Cafe House</h2>
                                <p className="font-weight-normal">Responsive café website</p>
                            </span>                         
                        </span>                     
                    </a>
                </div>
                
            </div>
        </div>
            </section>
    </div>
  )
}

export default MyWorks