import React from 'react';
import { Course } from '../App';

type DashboardProps = {
  wallet: string | null;
  enrolled: string[];
  courses: Course[];
  earned: number;
};

const Dashboard: React.FC<DashboardProps> = ({ wallet, enrolled, courses, earned }) => {
  const enrolledCourses = courses.filter((c) => enrolled.includes(c.id));
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h2>Dashboard</h2>
      <div style={{ marginBottom: 20 }}>
        <strong>Wallet:</strong> {wallet ? wallet : <span style={{ color: '#c00' }}>Not connected</span>}
      </div>
      <div style={{ marginBottom: 20 }}>
        <strong>Earned Tokens:</strong> {earned}
      </div>
      <div>
        <h3>Enrolled Courses</h3>
        {enrolledCourses.length === 0 ? (
          <p>You have not enrolled in any courses yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {enrolledCourses.map((course) => (
              <li key={course.id} style={{ border: '1px solid #eee', borderRadius: 8, margin: '1rem 0', padding: 16 }}>
                <h4>{course.title}</h4>
                <p>{course.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
