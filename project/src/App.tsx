import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import { TeacherDashboard } from '@/components/dashboard/TeacherDashboard';

function App() {
  // TODO: Replace with actual auth state
  const isAuthenticated = false;
  const userType = 'student';
  const userName = 'John Doe';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Student Routes */}
        <Route path="/dashboard" element={<DashboardLayout userType="student" userName={userName} />}>
          <Route index element={<StudentDashboard />} />
          <Route path="courses" element={<div>Courses</div>} />
          <Route path="study-plan" element={<div>Study Plan</div>} />
          <Route path="ai-tutor" element={<div>AI Tutor</div>} />
          <Route path="assignments" element={<div>Assignments</div>} />
          <Route path="progress" element={<div>Progress</div>} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<DashboardLayout userType="teacher" userName={userName} />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="students" element={<div>Students</div>} />
          <Route path="courses" element={<div>Courses</div>} />
          <Route path="analytics" element={<div>Analytics</div>} />
          <Route path="messages" element={<div>Messages</div>} />
          <Route path="resources" element={<div>Resources</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;