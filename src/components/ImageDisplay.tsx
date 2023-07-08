import React from 'react';

// Function to generate a random image URL
const getRandomImage = () => {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/id/${randomId}/500/500`;
};

interface ImageDisplayProps {
  onRefresh: (imageUrl: string) => void;
}

class ImageDisplay extends React.Component<ImageDisplayProps> {
  // Set initial state with an empty imageUrl
  state = {
    imageUrl: '',
  };

  componentDidMount() {
    // When the component mounts, call the refreshImage function
    this.refreshImage();
  }

  // Function to refresh the image
  refreshImage = () => {
    // Generate a new random image URL
    const imageUrl = getRandomImage();
    // Update the state with the new imageUrl
    this.setState({ imageUrl });
    // Call the onRefresh function provided as a prop to notify the parent component
    this.props.onRefresh(imageUrl);

  };

  render() {
    // Retrieve the imageUrl from the component state
    const { imageUrl } = this.state;

    return (
      <div className="flex flex-col items-center justify-center">
        {/* Display the random image */}
        <img src={imageUrl} alt="Random" className="max-w-full h-auto rounded shadow-lg" />
        {/* Button to refresh the image */}
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition duration-300"
          onClick={this.refreshImage}
        >
          Refresh Image
        </button>
      </div>
    );
  }
}

export default ImageDisplay;
