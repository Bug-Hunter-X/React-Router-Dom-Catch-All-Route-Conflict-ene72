```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route is causing the issue */}
        <Route path="/users/:id/*" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses a catch-all route (`/*`) within a parameter route (`/users/:id`).  This combination can lead to unexpected routing behavior because the catch-all will always match, even if a more specific route exists.

For example, if you navigate to `/users/123/profile`, the catch-all will match and `User` component will be rendered instead of another component designed for `/users/:id/profile` if it were to exist.