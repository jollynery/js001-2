import React from 'react';
import { Course } from '../App';

type CatalogProps = {
  courses: Course[];
  enrolled: string[];
  onEnroll: (courseId: string) => void;
};

const Catalog: React.FC<CatalogProps> = ({ courses, enrolled, onEnroll }) => (
  <div style={{ maxWidth: 600, margin: '2rem auto' }}>
    <h2>Course Catalog</h2>
    {courses.length === 0 && <p>No courses available.</p>}
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {courses.map((course) => (
        <li key={course.id} style={{ border: '1px solid #eee', borderRadius: 8, margin: '1rem 0', padding: 16 }}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p style={{ fontSize: 13, color: '#888' }}>By: {course.creator}</p>
          <button
            disabled={enrolled.includes(course.id)}
            onClick={() => onEnroll(course.id)}
            style={{ padding: '0.5rem 1.2rem', borderRadius: 4, background: enrolled.includes(course.id) ? '#ccc' : '#4285F4', color: '#fff', border: 'none', cursor: enrolled.includes(course.id) ? 'not-allowed' : 'pointer' }}
          >
            {enrolled.includes(course.id) ? 'Enrolled' : 'Enroll & Earn 10 Tokens'}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Catalog;
