import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  ArrowRight, CheckCircle, Circle, Clock, DollarSign, 
  Target, TrendingUp, Award, BookOpen, Star, MapPin
} from 'lucide-react';

import type { Page, UserType } from "../types/navigation";

interface CareerPathProps {
  onNavigate: (page: Page) => void;
}

export function CareerPath({ onNavigate }: CareerPathProps) {
  const [selectedPath, setSelectedPath] = useState<'frontend' | 'backend' | 'dataanalyst'>('frontend');

  const careerPaths = {
    frontend: {
      title: 'Frontend Developer',
      currentLevel: 'Beginner',
      targetLevel: 'Mid-level',
      match: 95,
      estimatedTime: '6-8 bulan',
      estimatedCost: 'Rp 2.5 - 4 juta',
      averageSalary: 'Rp 8-15 juta/bulan',
      demandLevel: 'Very High',
      steps: [
        {
          id: 1,
          title: 'Foundation Skills',
          status: 'completed',
          description: 'HTML, CSS, JavaScript fundamentals',
          skills: ['HTML5', 'CSS3', 'JavaScript ES6+'],
          duration: 'Sudah dikuasai',
          cost: 'Gratis',
          resources: [
            { type: 'course', title: 'JavaScript Fundamentals', provider: 'FreeCodeCamp' },
            { type: 'certification', title: 'HTML/CSS Certification', provider: 'W3Schools' }
          ]
        },
        {
          id: 2,
          title: 'React Development',
          status: 'in-progress',
          description: 'Modern React with hooks and context',
          skills: ['React', 'JSX', 'React Hooks', 'State Management'],
          duration: '2-3 bulan',
          cost: 'Rp 800k - 1.2 juta',
          resources: [
            { type: 'course', title: 'Complete React Developer Course', provider: 'Udemy' },
            { type: 'project', title: 'Build 3 React Projects', provider: 'Portfolio' }
          ]
        },
        {
          id: 3,
          title: 'Advanced Frontend',
          status: 'pending',
          description: 'TypeScript, Testing, and Performance',
          skills: ['TypeScript', 'Jest', 'React Testing Library', 'Performance Optimization'],
          duration: '2 bulan',
          cost: 'Rp 600k - 1 juta',
          resources: [
            { type: 'course', title: 'TypeScript for React Developers', provider: 'Pluralsight' },
            { type: 'certification', title: 'React Developer Certification', provider: 'Meta' }
          ]
        },
        {
          id: 4,
          title: 'Full-Stack Integration',
          status: 'pending',
          description: 'API integration and deployment',
          skills: ['REST APIs', 'GraphQL', 'Deployment', 'Git/GitHub'],
          duration: '1-2 bulan',
          cost: 'Rp 400k - 800k',
          resources: [
            { type: 'course', title: 'Full-Stack JavaScript', provider: 'The Odin Project' },
            { type: 'project', title: 'Deploy Production App', provider: 'Personal' }
          ]
        },
        {
          id: 5,
          title: 'Professional Readiness',
          status: 'pending',
          description: 'Interview prep and portfolio optimization',
          skills: ['System Design', 'Coding Interviews', 'Portfolio', 'Soft Skills'],
          duration: '1 bulan',
          cost: 'Rp 300k - 600k',
          resources: [
            { type: 'course', title: 'Frontend Interview Prep', provider: 'LeetCode' },
            { type: 'mentoring', title: '1-on-1 Career Coaching', provider: 'Industry Expert' }
          ]
        }
      ]
    },
    backend: {
      title: 'Backend Developer',
      currentLevel: 'Beginner',
      targetLevel: 'Mid-level',
      match: 87,
      estimatedTime: '8-10 bulan',
      estimatedCost: 'Rp 3 - 5 juta',
      averageSalary: 'Rp 10-18 juta/bulan',
      demandLevel: 'High',
      steps: [
        {
          id: 1,
          title: 'Programming Fundamentals',
          status: 'completed',
          description: 'Java or Python basics',
          skills: ['Java/Python', 'OOP', 'Data Structures'],
          duration: 'Sudah dikuasai',
          cost: 'Gratis',
          resources: []
        },
        {
          id: 2,
          title: 'Backend Framework',
          status: 'pending',
          description: 'Spring Boot or Django mastery',
          skills: ['Spring Boot', 'RESTful APIs', 'MVC Pattern'],
          duration: '3-4 bulan',
          cost: 'Rp 1.2 - 2 juta',
          resources: []
        },
        {
          id: 3,
          title: 'Database & DevOps',
          status: 'pending',
          description: 'Database design and deployment',
          skills: ['SQL', 'MongoDB', 'Docker', 'AWS/GCP'],
          duration: '3 bulan',
          cost: 'Rp 1 - 1.5 juta',
          resources: []
        },
        {
          id: 4,
          title: 'System Design',
          status: 'pending',
          description: 'Scalable system architecture',
          skills: ['Microservices', 'Load Balancing', 'Caching'],
          duration: '2 bulan',
          cost: 'Rp 800k - 1.2 juta',
          resources: []
        }
      ]
    },
    dataanalyst: {
      title: 'Data Analyst',
      currentLevel: 'Beginner',
      targetLevel: 'Mid-level',
      match: 82,
      estimatedTime: '5-7 bulan',
      estimatedCost: 'Rp 2 - 3.5 juta',
      averageSalary: 'Rp 7-13 juta/bulan',
      demandLevel: 'Very High',
      steps: [
        {
          id: 1,
          title: 'Statistics & Excel',
          status: 'completed',
          description: 'Statistical analysis fundamentals',
          skills: ['Statistics', 'Excel', 'Data Visualization'],
          duration: 'Sudah dikuasai',
          cost: 'Gratis',
          resources: []
        },
        {
          id: 2,
          title: 'Python for Data',
          status: 'pending',
          description: 'Python libraries for data analysis',
          skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
          duration: '2-3 bulan',
          cost: 'Rp 800k - 1.2 juta',
          resources: []
        },
        {
          id: 3,
          title: 'SQL & Databases',
          status: 'pending',
          description: 'Database querying and management',
          skills: ['SQL', 'PostgreSQL', 'Data Modeling'],
          duration: '1-2 bulan',
          cost: 'Rp 400k - 800k',
          resources: []
        },
        {
          id: 4,
          title: 'BI Tools & Reporting',
          status: 'pending',
          description: 'Business intelligence and dashboards',
          skills: ['Tableau', 'Power BI', 'Data Storytelling'],
          duration: '2 bulan',
          cost: 'Rp 800k - 1.5 juta',
          resources: []
        }
      ]
    }
  };

  const currentPath = careerPaths[selectedPath as keyof typeof careerPaths];
  const completedSteps = currentPath.steps.filter(step => step.status === 'completed').length;
  const progressPercentage = (completedSteps / currentPath.steps.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl mb-4">MOJOK Career Path</h1>
            <p className="text-xl opacity-90">Visualisasi step-by-step menuju karir impian kamu</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2>Roadmap Detail</h2>
            <p className="text-muted-foreground">Rencana pembelajaran yang dipersonalisasi untuk mencapai target karir</p>
          </div>
          <Button variant="outline" onClick={() => onNavigate('dashboard')}>
            Kembali ke Dashboard
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Career Options */}
          <div className="space-y-4">
            <h3>Pilih Jalur Karir</h3>
            {Object.entries(careerPaths).map(([key, path]) => (
              <Card 
                key={key} 
                className={`cursor-pointer transition-colors ${selectedPath === key ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}
                onClick={() => setSelectedPath(key)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm">{path.title}</h4>
                    <Badge variant={path.match >= 90 ? 'destructive' : path.match >= 80 ? 'default' : 'secondary'} className="text-xs">
                      {path.match}%
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <p>{path.estimatedTime}</p>
                    <p>{path.averageSalary}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Path Overview */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-6 h-6" />
                      {currentPath.title}
                    </CardTitle>
                    <CardDescription>
                      {currentPath.currentLevel} → {currentPath.targetLevel}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-green-600">{currentPath.match}% match</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress Roadmap</span>
                    <span>{completedSteps}/{currentPath.steps.length} steps completed</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Estimasi Waktu</p>
                    <p className="text-sm">{currentPath.estimatedTime}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Estimasi Biaya</p>
                    <p className="text-sm">{currentPath.estimatedCost}</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Rata-rata Gaji</p>
                    <p className="text-sm">{currentPath.averageSalary}</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Job Demand</p>
                    <p className="text-sm">{currentPath.demandLevel}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Roadmap Steps */}
            <div className="space-y-4">
              <h3>Learning Roadmap</h3>
              <div className="space-y-6">
                {currentPath.steps.map((step, index) => (
                  <div key={step.id} className="flex gap-4">
                    {/* Step Indicator */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-100 text-green-600' :
                        step.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <Circle className="w-6 h-6" />
                        )}
                      </div>
                      {index < currentPath.steps.length - 1 && (
                        <div className={`w-0.5 h-16 mt-2 ${
                          step.status === 'completed' ? 'bg-green-200' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <Card className={step.status === 'in-progress' ? 'border-blue-200 bg-blue-50/30' : ''}>
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{step.title}</CardTitle>
                              <CardDescription>{step.description}</CardDescription>
                            </div>
                            <div className="flex gap-2">
                              {step.status === 'completed' && (
                                <Badge variant="outline" className="text-green-600">Completed</Badge>
                              )}
                              {step.status === 'in-progress' && (
                                <Badge className="bg-blue-600">In Progress</Badge>
                              )}
                              {step.status === 'pending' && (
                                <Badge variant="secondary">Upcoming</Badge>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Skills */}
                          <div>
                            <p className="text-sm mb-2">Skills yang akan dipelajari:</p>
                            <div className="flex flex-wrap gap-2">
                              {step.skills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="outline">{skill}</Badge>
                              ))}
                            </div>
                          </div>

                          {/* Duration & Cost */}
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>{step.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-muted-foreground" />
                              <span>{step.cost}</span>
                            </div>
                          </div>

                          {/* Resources */}
                          {step.resources && (
                            <div>
                              <p className="text-sm mb-2">Resources:</p>
                              <div className="space-y-2">
                                {step.resources.map((resource, resourceIndex) => (
                                  <div key={resourceIndex} className="flex items-center gap-2 text-sm p-2 bg-gray-50 rounded">
                                    {resource.type === 'course' && <BookOpen className="w-4 h-4 text-blue-600" />}
                                    {resource.type === 'certification' && <Award className="w-4 h-4 text-yellow-600" />}
                                    {resource.type === 'project' && <Target className="w-4 h-4 text-green-600" />}
                                    {resource.type === 'mentoring' && <Star className="w-4 h-4 text-purple-600" />}
                                    <span className="flex-1">{resource.title}</span>
                                    <span className="text-muted-foreground text-xs">{resource.provider}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Actions */}
                          <div className="flex gap-2 pt-2">
                            {step.status === 'pending' && (
                              <Button size="sm">Mulai Step Ini</Button>
                            )}
                            {step.status === 'in-progress' && (
                              <Button size="sm" variant="outline">Lanjutkan</Button>
                            )}
                            {step.status === 'completed' && (
                              <Button size="sm" variant="outline">Review</Button>
                            )}
                            <Button size="sm" variant="outline">Lihat Detail</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Market Outlook */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Job Market Outlook
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="text-green-800 mb-1">Jakarta</h4>
                    <p className="text-2xl text-green-600">324</p>
                    <p className="text-xs text-muted-foreground">lowongan aktif</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-blue-800 mb-1">Bandung</h4>
                    <p className="text-2xl text-blue-600">156</p>
                    <p className="text-xs text-muted-foreground">lowongan aktif</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="text-purple-800 mb-1">Remote</h4>
                    <p className="text-2xl text-purple-600">89</p>
                    <p className="text-xs text-muted-foreground">lowongan aktif</p>
                  </div>
                </div>
                <Button className="w-full" onClick={() => onNavigate('jobs')}>
                  Lihat Lowongan {currentPath.title}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}