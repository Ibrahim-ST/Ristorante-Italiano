import React from 'react';
import { Container } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <Container>
            <div className="container py-5">
      <h2 className="text-center mb-5">What Our Customers Say</h2>
      <div className="row">
        <div className="col-md-4 mb-5">
          <div className="card t-card">
            <div className="card-body text-center">
              <h5 className="card-title">Samantha Johnson</h5>
              <p className="card-subtitle mb-2 text-muted">Food Lover</p>
              <img src="https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Chef" className="testimonial-img mt-3" />
              <p className="card-text">The food was out of this world and the service was top-notch. I will definitely be back!</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card t-card">
            <div className="card-body text-center">
              <h5 className="card-title">Jack Smith</h5>
              <p className="card-subtitle mb-2 text-muted">Food Critic</p>
              <img src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg" alt="Chef" className="testimonial-img mt-3" />
              <p className="card-text">I had the best steak of my life at this restaurant. The staff was also incredibly friendly and attentive.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card t-card">
            <div className="card-body text-center">
              <h5 className="card-title">Emily Wilson</h5>
              <p className="card-subtitle mb-2 text-muted">Food Blogger</p>
              <img src="https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/2019-10/mark_wiens_from_mihai_eminescu_trust.jpg" alt="Chef" className=" mt-3 testimonial-img" />
              <p className="card-text">I can't recommend this place enough. The food, the atmosphere, and the service were all excellent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </Container>
    );
};

export default Testimonial;