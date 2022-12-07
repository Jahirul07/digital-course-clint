import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What are the components in React?</Accordion.Header>
        <Accordion.Body>
        Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is a state in React?</Accordion.Header>
        <Accordion.Body>
        The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.
The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What are props in React?</Accordion.Header>
        <Accordion.Body>
        Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.
Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default FAQ;