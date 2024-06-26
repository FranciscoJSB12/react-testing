import { useState } from 'react';

export const App = () => {
  const [isTextActive, setIsTextActive] = useState(false);

  return (
    <main>
      <h1>Title</h1>
      <button onClick={() => setIsTextActive(prev => !prev)}>
        {isTextActive ? 'Close' : 'Open'}
      </button>
      {isTextActive && <p>Content</p>}
    </main>
  );
};
