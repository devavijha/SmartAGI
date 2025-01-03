import React from 'react';
import { Calendar, Brain, BookOpen, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface StatCard {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
}

const stats: StatCard[] = [
  { label: 'Active Courses', value: '4', icon: BookOpen, color: 'bg-blue-500' },
  { label: 'Study Hours', value: '24h', icon: Calendar, color: 'bg-green-500' },
  { label: 'AI Sessions', value: '12', icon: Brain, color: 'bg-purple-500' },
  { label: 'Achievements', value: '8', icon: Trophy, color: 'bg-yellow-500' },
];

export function StudentDashboard() {
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
          <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium">Mathematics</p>
                <p className="text-sm text-gray-600">Chapter 5: Calculus</p>
              </div>
              <p className="text-sm text-gray-600">10:00 AM</p>
            </div>
            <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium">Physics</p>
                <p className="text-sm text-gray-600">Lab Session</p>
              </div>
              <p className="text-sm text-gray-600">2:00 PM</p>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">View Full Schedule</Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">AI Study Assistant</h2>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-600 mb-2">Recommended Focus Areas:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                Practice more calculus problems
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Review physics formulas
              </li>
            </ul>
          </div>
          <Button className="w-full">Start AI Tutoring Session</Button>
        </div>
      </div>
    </div>
  );
}