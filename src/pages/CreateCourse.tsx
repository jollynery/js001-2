import React, { useState } from 'react';

type CreateCourseProps = {
  onCreate: (title: string, description: string) => void;
};

const CreateCourse: React.FC<CreateCourseProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      onCreate(title, description);
      setTitle('');
      setDescription('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h2>Create a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <textarea
            placeholder="Course Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc', minHeight: 80 }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '0.6rem 1.5rem', borderRadius: 4, background: '#4285F4', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Create Course
        </button>
      </form>
      {success && <div style={{ color: 'green', marginTop: 16 }}>Course created successfully!</div>}
    </div>
  );
};

export default CreateCourse;
