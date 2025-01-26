# React Router Dom Catch-All Route Conflict

This repository demonstrates a common issue in React Router Dom involving unexpected routing behavior when using a catch-all route (`/*`) within a parameterized route.  The catch-all route unintentionally overrides more specific routes.

## Problem
The provided `bug.js` file showcases a scenario where a catch-all route within a parameter route causes incorrect component rendering.  Navigating to a URL that should match a more specific route instead triggers the catch-all route, leading to an unexpected user experience.

## Solution
The `bugSolution.js` file offers a solution by restructuring the routes to prevent the conflict.  Specific routes are prioritized before the catch-all to ensure correct behavior.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the unexpected routing behavior by navigating to various URLs.

## Contributing
Feel free to submit issues or pull requests to improve this example.