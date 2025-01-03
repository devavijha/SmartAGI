import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  MessageSquare, 
  BarChart, 
  Settings,
  GraduationCap,
  FileText,
  Brain,
  Trophy
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserType } from '@/types';

interface SidebarProps {
  userType: UserType;
}

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const studentNavItems: NavItem[] = [
  { icon: BookOpen, label: 'My Courses', href: '/dashboard/courses' },
  { icon: Calendar, label: 'Study Plan', href: '/dashboard/study-plan' },
  { icon: Brain, label: 'AI Tutor', href: '/dashboard/ai-tutor' },
  { icon: FileText, label: 'Assignments', href: '/dashboard/assignments' },
  { icon: Trophy, label: 'Progress', href: '/dashboard/progress' },
];

const teacherNavItems: NavItem[] = [
  { icon: Users, label: 'Students', href: '/dashboard/students' },
  { icon: BookOpen, label: 'Courses', href: '/dashboard/courses' },
  { icon: BarChart, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: MessageSquare, label: 'Messages', href: '/dashboard/messages' },
  { icon: FileText, label: 'Resources', href: '/dashboard/resources' },
];

export function Sidebar({ userType }: SidebarProps) {
  const location = useLocation();
  const navItems = userType === 'student' ? studentNavItems : teacherNavItems;

  return (
    <div className="w-64 bg-white h-screen border-r flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl">SmartEdu</span>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  location.pathname === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Link
          to="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </div>
    </div>
  );
}