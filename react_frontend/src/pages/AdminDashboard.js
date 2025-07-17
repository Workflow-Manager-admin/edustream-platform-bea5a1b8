import React, { useState } from "react";
import CourseCard from "../components/CourseCard";

// Dummy videos (can extend in state, but no persistence yet)
const initialVideos = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the basics of React.js in this comprehensive course.",
    youtubeId: "Ke90Tje7VS0",
  },
  {
    id: 2,
    title: "Tailwind CSS Crash Course",
    description: "Style modern web apps effortlessly with Tailwind CSS.",
    youtubeId: "dFgzHOX84xQ",
  },
];

// PUBLIC_INTERFACE
/**
 * Admin dashboard for uploading new videos (UI only, dummy state).
 */
const AdminDashboard = () => {
  const [videos, setVideos] = useState(initialVideos);
  const [form, setForm] = useState({ title: "", description: "", youtubeId: "" });
  const [message, setMessage] = useState("");

  const handleAddVideo = (e) => {
    e.preventDefault();
    if (form.title && form.description && form.youtubeId) {
      setVideos([
        ...videos,
        {
          id: videos.length + 1,
          ...form,
        },
      ]);
      setForm({ title: "", description: "", youtubeId: "" });
      setMessage("Video added!");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0ecff] dark:from-[#21324d] dark:to-[#1f3352] pt-10">
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-3">Admin Dashboard</h2>
            <div className="text-gray-600 dark:text-gray-200 mb-2">
              Manage courses and upload new videos
            </div>
          </div>
          <a
            href="/"
            className="inline-block font-semibold text-primary hover:underline dark:text-accent text-base md:text-lg"
          >
            ← Back to Student View
          </a>
        </div>
        <form
          className="flex flex-col md:flex-row gap-3 md:items-end rounded-lg bg-white dark:bg-[#263861] shadow p-4 mb-8"
          onSubmit={handleAddVideo}
        >
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Course title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Description
            </label>
            <input
              type="text"
              placeholder="Short description"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              YouTube Video ID
            </label>
            <input
              type="text"
              placeholder="YouTube Video ID (e.g. Ke90Tje7VS0)"
              value={form.youtubeId}
              onChange={e => setForm({ ...form, youtubeId: e.target.value })}
              className="w-full px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="md:ml-4 mt-2 md:mt-0 px-6 py-2 bg-primary text-white font-bold rounded hover:bg-accent transition"
          >
            Add Video
          </button>
        </form>
        {message && <div className="text-green-600 font-semibold mb-3">{message}</div>}
        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {videos.map((video) => (
            <CourseCard
              key={video.id}
              title={video.title}
              description={video.description}
              youtubeId={video.youtubeId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
