import React, { useState } from 'react';
import RandomImage from './components/RandomImage';
import ShareButtons from './components/ShareButtons';

const App: React.FC = () => {
  // State variable to track the refresh count
  const [refreshCount, setRefreshCount] = useState(0);

  // Function to handle image refresh
  const handleRefreshImage = () => {
    // Increment the refresh count by 1
    setRefreshCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container mx-auto p-4">
      {/* RandomImage component */}
      <RandomImage onRefresh={handleRefreshImage} />

      {/* ShareButtons component */}
      <ShareButtons url={window.location.href} />
    </div>
  );
};

export default App;
