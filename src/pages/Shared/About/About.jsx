import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <div className="py-5 bg-blog">
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <h2 className="text-center mb-5">About Us</h2>
            <Row>
              <Col lg={6}>
                <Image
                  src="https://thiswaytoitaly.com/wp-content/uploads/2022/11/Gianfranco-Chiarini-Italian-Chefs.webp"
                  className="img-fluid mb-4"
                />
              </Col>
              <Col lg={6}>
                <p className="lead">
                  Chef John Smith started his culinary journey at a young age,
                  helping his mother in the kitchen and experimenting with new
                  flavors and ingredients. After studying at a prestigious
                  culinary school in France, Chef Smith honed his skills in some
                  of the best restaurants in the world, including three
                  Michelin-starred establishments in Paris and New York City.
                </p>
                <p>
                  Chef Smith's cooking style is influenced by his extensive
                  travels and his passion for using fresh, locally sourced
                  ingredients. He believes that food should not only be
                  delicious, but also nourishing and sustainable. In his spare
                  time, Chef Smith enjoys gardening and foraging for wild
                  ingredients in the woods near his home.
                </p>
              </Col>
            </Row>
            <Row className="my-5">
              <Col lg={{ span: 8, offset: 2 }}>
                <h3 className="text-center mb-4">Our Philosophy</h3>
                <p className="text-center">
                  At Chef John Smith's restaurant, we are dedicated to serving
                  our customers with the highest quality food made from the
                  freshest, locally sourced ingredients. We believe that food
                  should not only be delicious, but also nourishing and
                  sustainable. We are committed to reducing food waste and
                  minimizing our environmental impact by composting and
                  recycling whenever possible.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <h3 className="text-center mb-4">Our Team</h3>
              </Col>
              <Col lg={4} className="text-center mb-5">
                <Image
                  src="https://thiswaytoitaly.com/wp-content/uploads/2022/11/Gianfranco-Chiarini-Italian-Chefs.webp"
                  roundedCircle
                  className="mb-3 w-50"
                />
                <h4>Chef John Smith</h4>
                <p className="text-muted">Founder & Head Chef</p>
              </Col>
              <Col lg={4} className="text-center mb-5">
                <Image
                  src="https://thiswaytoitaly.com/wp-content/uploads/2022/11/Gianfranco-Chiarini-Italian-Chefs.webp"
                  roundedCircle
                  className="mb-3 w-50"
                />
                <h4>Michelle Lee</h4>
                <p className="text-muted">Sous Chef</p>
              </Col>
              <Col lg={4} className="text-center mb-5">
                <Image
                  src="https://thiswaytoitaly.com/wp-content/uploads/2022/11/Gianfranco-Chiarini-Italian-Chefs.webp"
                  roundedCircle
                  className="mb-3 w-50"
                />
                <h4>William Chen</h4>
                <p className="text-muted">Pastry Chef</p>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 8, offset: 2 }} className="text-center">
                <p>
                  For catering and private event inquiries, please contact us at{" "}
                  <a href="mailto:info@chefsmith.com">info@chefsmith.com</a>.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
