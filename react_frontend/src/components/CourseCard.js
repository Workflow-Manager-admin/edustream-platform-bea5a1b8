import React from "react";

// PUBLIC_INTERFACE
/**
 * Card for displaying a single course/video. Embeds YouTube video.
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.youtubeId
 */
const CourseCard = ({ title, description, youtubeId }) => (
  <div className="bg-white dark:bg-secondary rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700">
    <div className="aspect-w-16 aspect-h-9 bg-black">
      <iframe
        className="w-full h-52"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allowFullScreen
        frameBorder="0"
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-semibold text-lg text-primary dark:text-white mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{description}</p>
    </div>
  </div>
);

export default CourseCard;
