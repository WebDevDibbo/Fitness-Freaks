import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h1 className='ques-sec' >Question Section</h1>
            <div>
                <h2>How does react work?</h2>
                <p>Ans :  While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.</p>
            </div>
            <div>
            <h2>Difference between props and state</h2>
                <div className='props'>
                <h3>Props</h3>
                <p>1.The Data is passed from one component to another.</p>
                <p>2.It is Immutable (cannot be modified).</p>
                <p>3.Props can be used with state and functional components.</p>
                <p>4.Props are read-only.</p>
                </div>
                <div className='state'>
                <h3>State</h3>
                <p>1.The Data is passed within the component only.</p>
                <p>2.It is Mutable ( can be modified).</p>
                <p>3.State can be used only with the state components/class component (Before 16.0).</p>
                <p>4.State is both read and write.</p>
                </div>
            </div>
            <div>
                <h3>What does useEffect do except loading data?</h3>
                <p>The Effect Hook lets you perform side effects in function components.Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.There are two common kinds of side effects in React components: those that don't require cleanup, and those that do.</p>
            </div>
        </div>
    );
};

export default Question;