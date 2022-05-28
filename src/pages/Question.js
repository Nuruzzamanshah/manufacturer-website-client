import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 className='text-center text-4xl'>Queshion answer</h1>
            <h2>1.How will you improve the performance of a React Application?</h2>
            <p>Answer:
           ** Keeping component state local where necessary
           ** Memoizing React components to prevent unnecessary re-renders
           ** Code-splitting in React using dynamic import()
           ** Windowing or list virtualization in React
           ** Lazy loading images in React
            </p>
            <h2 className='my-2'>2.What are the different ways to manage a state in a React application?</h2>
            <p>Answer:
           ** Local state.
           ** Global state.
           ** Server state.
           ** URL state.
            </p>

            <h2 className='my-2'>3.How does prototypical inheritance work?</h2>
            <p>Answer:
           ** The Prototypal Inheritance is a feature
            in javascript used to add methods and properties
             in objects. It is a method by which an object
              can inherit the properties and methods of another object
            </p>

            <h2 className='my-2'>4.What is a unit test? Why should write unit tests?</h2>
            <p>Answer:
           ** Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended
            </p>
        </div>
    );
};

export default Question;