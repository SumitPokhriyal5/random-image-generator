import React, { useState } from 'react';
import RandomImage from './components/RandomImage';
import ShareButtons from './components/ShareButtons';

const App: React.FC = () => {
  const [imgUrl, setImgUrl] = useState("")

  // Function to handle image refresh
  const handleRefreshImage = (imageUrl: string) => {
    setImgUrl(imageUrl)
  };

  return (
    <div className="container mx-auto p-4">
      {/* RandomImage component */}
      <RandomImage onRefresh={handleRefreshImage} />

      {/* ShareButtons component */}
      <ShareButtons url={imgUrl} />
    </div>
  );
};

export default App;
