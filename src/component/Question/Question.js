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
                <h3>How does useEffect work?</h3>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.</p>
            </div>
        </div>
    );
};

export default Question;