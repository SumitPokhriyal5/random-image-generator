import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

interface ShareButtonsProps {
  url: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url }) => {
  return (
    <div className="flex justify-center mt-6">
      {/* Facebook share button */}
      <FacebookShareButton url={url}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded">
          Share on Facebook
        </button>
      </FacebookShareButton>

      {/* Twitter share button */}
      <TwitterShareButton url={url}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded">
          Share on Twitter
        </button>
      </TwitterShareButton>

      {/* WhatsApp share button */}
      <WhatsappShareButton url={url}>
        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
          Share on WhatsApp
        </button>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
