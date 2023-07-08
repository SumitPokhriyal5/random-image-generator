import React from 'react';
import ImageDisplay from './ImageDisplay';

interface RandomImageProps {
  onRefresh: (imageUrl: string) => void;
}

const RandomImage: React.FC<RandomImageProps> = ({ onRefresh }) => {
  // Render the ImageDisplay component and pass the onRefresh function as a prop
  return <ImageDisplay onRefresh={onRefresh} />;
};

export default RandomImage;
