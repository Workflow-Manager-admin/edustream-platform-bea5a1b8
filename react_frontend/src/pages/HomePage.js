import React from "react";
import CourseCard from "../components/CourseCard";

// Dummy courses/videos for demonstration
const demoCourses = [
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
  {
    id: 3,
    title: "JavaScript ES6 Features",
    description: "Discover powerful new features in ES6 for clean, fast JavaScript.",
    youtubeId: "NCwa_xi0Uuc",
  },
  {
    id: 4,
    title: "Intro to Algorithms",
    description: "Master important algorithms and their applications.",
    youtubeId: "8hly31xKli0",
  },
];

// PUBLIC_INTERFACE
/**
 * Home page with a grid of course videos for students.
 */
const HomePage = () => {
  return (
    <div className="min-h-screen py-10 px-4 bg-gradient-to-t from-[#ecf0fd] via-white to-[#ecf0fd] dark:bg-gradient-to-t dark:from-secondary dark:to-[#20396b]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">Featured Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {demoCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              youtubeId={course.youtubeId}
            />
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <a
            href="/admin"
            className="inline-block bg-primary text-white px-6 py-2 rounded shadow hover:bg-accent font-semibold tracking-wide transition"
          >
            Admin Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
