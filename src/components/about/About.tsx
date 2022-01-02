import "./About.scss";
<<<<<<< HEAD

=======
>>>>>>> 34385fbe1f95759a2ca61ed7f0e2e5b41af11bba
const About = () => {
  return (
    <div className="about">
      <div>
        <h3>React Basics</h3>
        <p>
          In this tutorial, we’ll show how to build an interactive tic-tac-toe
          game with React. You can see what we’ll be building here: Final
          Result. If the code doesn’t make sense to you, or if you are
          unfamiliar with the code’s syntax, don’t worry! The goal of this
          tutorial is to help you understand React and its syntax. We recommend
          that you check out the tic-tac-toe game before continuing with the
          tutorial. One of the features that you’ll notice is that there is a
          numbered list to the right of the game’s board. This list gives you a
          history of all of the moves that have occurred in the game, and it is
          updated as the game progresses. You can close the tic-tac-toe game
          once you’re familiar with it. We’ll be starting from a simpler
          template in this tutorial. Our next step is to set you up so that you
          can start building the game.
        </p>
      </div>
      <div>
        <p>
          We’ll assume that you have some familiarity with HTML and JavaScript,
          but you should be able to follow along even if you’re coming from a
          different programming language. We’ll also assume that you’re familiar
          with programming concepts like functions, objects, arrays, and to a
          lesser extent, classes. If you need to review JavaScript, we recommend
          reading this guide. Note that we’re also using some features from ES6
          — a recent version of JavaScript. In this tutorial, we’re using arrow
          functions, classes, let, and const statements. You can use the Babel
          REPL to check what ES6 code compiles to.
        </p>
      </div>
      <div>
        <p>
          We’ll get to the funny XML-like tags soon. We use components to tell
          React what we want to see on the screen. When our data changes, React
          will efficiently update and re-render our components. Here,
          ShoppingList is a React component class, or React component type. A
          component takes in parameters, called props (short for “properties”),
          and returns a hierarchy of views to display via the render method. The
          render method returns a description of what you want to see on the
          screen. React takes the description and displays the result. In
          particular, render returns a React element, which is a lightweight
          description of what to render. Most React developers use a special
          syntax called “JSX” which makes these structures easier to write. The{" "}
          <div /> syntax is transformed at build time to
          React.createElement('div'). The example above is equivalent to:
        </p>
      </div>
    </div>
  );
};
export default About;
