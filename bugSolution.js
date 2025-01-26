```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
        {/* Catch-all route moved to the end */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
The solution reorders the routes.  More specific routes are defined before the catch-all route (`/*`). This ensures that the specific routes are matched first, preventing the catch-all from overriding them.  A `NotFound` component is introduced to handle unmatched routes.