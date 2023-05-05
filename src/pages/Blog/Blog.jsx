import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import { useRef } from "react"; 

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  const pdfRef = useRef();

  return (
    <div className="bg-blogpage">
      <div></div>
      <Container>
        <div>
          <h3 className="pt-4  text-center">Blog Page</h3>
        </div>
        <section className=" mx-auto py-2">
          <div className="border  bg-blog p-4 rounded">
            <div className="grid gap-2">
              <Pdf targetRef={ref} filename="blog-page.pdf">
                {({ toPdf }) => (
                  <Button className="btn-custom" onClick={toPdf}>
                    <FaFilePdf></FaFilePdf>
                    <span className="mx-2">PDF</span>
                  </Button>
                )}
              </Pdf>

              <div  ref={ref}>
                <div className="  p-4 text-black">
                  <h2>
                    1. Tell us the differences between uncontrolled and
                    controlled components.?
                  </h2>
                  <p>
                    In React, a component can be classified as either a
                    controlled component or an uncontrolled component, depending
                    on how it handles user input. An uncontrolled component
                    manages its own state internally, and any changes made to it
                    are handled by the DOM. For example, an HTML input element
                    that uses the "defaultValue" attribute instead of "value" is
                    an uncontrolled component. In this case, the input element
                    manages its own state, and any changes made to it are
                    reflected in the DOM, but not in the component's state. On
                    the other hand, a controlled component is a component that
                    receives its value and any changes to it via props, and
                    updates its value via callbacks. This means that the
                    component's state is always in sync with the value of the
                    input
                  </p>
                </div>
                <div className="  p-4 text-black">
                  <h2>2. How to validate React props using PropTypes?</h2>
                  <p>
                    PropTypes is a feature in React that enables the validation
                    of the properties passed into a component. With PropTypes,
                    we can define the data type, required or optional status,
                    and other constraints for each prop passed to a component,
                    ensuring that they are of the correct format and structure.
                    To use PropTypes, at first we need to import it from the
                    'prop-types' library. We can then define the propTypes
                    object on the component, which maps the prop names to their
                    respective PropTypes. There are various PropTypes available
                    in the library, such as string, number, bool, object, array,
                    and more.
                  </p>
                </div>
                <div className="  p-4 text-black">
                  <h2>
                    3. Tell us the difference between nodejs and express js.
                  </h2>
                  <p>
                    Node.js and Express.js are both popular web development
                    technologies used in building server-side applications with
                    JavaScript. While they are often used together, they are
                    distinct technologies with different purposes. Node.js is a
                    JavaScript runtime built on Chrome's V8 engine that allows
                    developers to run JavaScript code on the server-side. It
                    provides an event-driven, non-blocking I/O model that makes
                    it ideal for building scalable and high-performance
                    applications. Node.js allows developers to use JavaScript to
                    build full-stack applications, including server-side logic
                    and client-side interactions. Express.js, on the other hand,
                    is a minimalist web framework for Node.js that provides a
                    robust set of features for building web and mobile
                    applications. Express.js simplifies the process of building
                    web applications by providing a set of middleware functions
                    that can be used to handle HTTP requests, process data, and
                    return responses
                  </p>
                </div>
                <div className="  p-4 text-black">
                  <h2>
                    4. What is a custom hook, and why will you create a custom
                    hook??
                  </h2>
                  <p>
                    In React, a custom hook is a JavaScript function that allows
                    us to reuse stateful logic across different components. A
                    custom hook allows to extract complex logic into reusable
                    functions, which can be shared between components or even
                    across different projects. Custom hooks are useful for
                    abstracting away complex logic that may be required in
                    multiple components, allowing us to keep the codebase clean
                    and maintainable. They can also help to reduce the amount of
                    repetitive code that we have to write, which can save time
                    and effort. A custom hook typically takes one or more React
                    hooks, such as useState or useEffect, and combines them into
                    a single function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Blog;
