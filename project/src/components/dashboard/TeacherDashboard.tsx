import React from 'react';
import { Users, BookOpen, Clock, Brain } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface StatCard {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
}

const stats: StatCard[] = [
  { label: 'Total Students', value: '124', icon: Users, color: 'bg-blue-500' },
  { label: 'Active Courses', value: '6', icon: BookOpen, color: 'bg-green-500' },
  { label: 'Hours Taught', value: '32h', icon: Clock, color: 'bg-purple-500' },
  { label: 'AI Insights', value: '15', icon: Brain, color: 'bg-yellow-500' },
];

export function TeacherDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Student Performance</h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="font-medium mb-2">Attention Needed</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>John Doe - Mathematics</span>
                  <span className="text-yellow-600">Below Average</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Jane Smith - Physics</span>
                  <span className="text-yellow-600">Attendance Issues</span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">View All Students</Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">AI Teaching Assistant</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-600 mb-2">Recommendations:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                Review calculus concepts with Class 12A
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Schedule one-on-one with struggling students
              </li>
            </ul>
          </div>
          <Button className="w-full">Generate Detailed Report</Button>
        </div>
      </div>
    </div>
  );
}