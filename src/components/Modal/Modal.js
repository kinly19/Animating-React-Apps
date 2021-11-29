import React from 'react';
import Transition from 'react-transition-group/Transition';
import './Modal.css';

// ============================== Notes ==============================
// react-transition-group - Exposes simple components useful for defining 
//  entering and exiting transitions. React Transition Group is not an animation library like React-Motion, 
//  it does not animate styles by itself. Instead it exposes transition stages, manages classes and group elements 
//  and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier.
//  https://reactcommunity.org/react-transition-group/ 

// Transition - component lets you describe a transition from one component state to another over time with a simple declarative API
//  Most commonly it's used to animate the mounting and unmounting of a component
//  https://reactcommunity.org/react-transition-group/transition


// join() - method creates and returns a new string by concatenating... 
//  all of the elements in an array 
// ===================================================================

const modal = (props) => {
  return (
    <Transition mountOnEnter unmountOnExit in={props.show} timeout={300}>
      {(transitionState) => {
        const cssClasses = [
          "Modal",
          transitionState === "entering"
            ? "ModalOpen"
            : transitionState === "exiting"
            ? "ModalClosed"
            : null,
        ];

        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;