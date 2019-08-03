# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS makes it easy to make reusable "view components" that "encapsulate" logic and HTML into a class and makes it easier to build module applications. 

2. What does it mean to think in react?

    Step 1: Break The UI Into A Component Hierarchy
    The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. If you’re working with a designer, they may have already done this, so go talk to them! Their Photoshop layer names may end up being the names of your React components!
    Step 2: Build A Static Version in React- The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing
    Step 3: Identify The Minimal (but complete) Representation Of UI State
    Step 4: Identify Where Your State Should Live
    Step 5: Add Inverse Data Flow

3. Describe state.

    To make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with state.

4. Describe props.

    Props is what is used when components need to share state

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    A side effect is anything that affects something outside the scope of the function being executed. 

    We sync effects by passing in a dependency array as the second argument to the effect hook.
