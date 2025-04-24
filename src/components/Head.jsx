import React from 'react'

const Head = () => {
  return (
    <div>
      <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am Fouad Shaban</span>
          </h1>
          <p className="header-subtitle">Software Engineer</p>

          <a
            className="btn btn-primary big-shoulders hover:underline"
            href="#portfolio"
          >
            Visit My Works
          </a>
        </div>
      </header>
    </div>
  )
}

export default Head