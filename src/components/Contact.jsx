import React from 'react'

const Contact = () => {
  return (
    <div>
        {/* contact section */}
    <section class="section" id="contact">
        <div class="container text-center">
            <p class="section-subtitle">How can you communicate?</p>
            <h6 class="section-title mb-5">Contact Me</h6>
            <p class="section-subtitle">I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <form action="mailto:fouad,sh9880@gmail.com" class="contact-form col-md-10 col-lg-8 m-auto">
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <input type="text" size="50" class="form-control" placeholder="Your Name" required />                 
                    </div>
                    <div class="form-group col-sm-6">
                        <input type="email" class="form-control" placeholder="Enter Email"required />                 
                    </div>
                    <div class="form-group col-sm-12">
                        <textarea name="comment" id="comment" rows="6"   class="form-control" placeholder="Write Something"></textarea>
                    </div>
                    <div class="form-group col-sm-12 mt-3">
                        <input type="submit" value="Send Message" class="btn btn-outline-primary rounded"/>                  
                    </div>
                </div>  
            </form>
        </div>
    </section>
    {/* end of contact section  */}
    </div>
    )
}
export default Contact