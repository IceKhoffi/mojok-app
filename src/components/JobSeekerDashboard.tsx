import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  User, BookOpen, Target, Award, TrendingUp, MessageSquare, 
  Briefcase, Star, Clock, MapPin, Crown, Gem
} from 'lucide-react';

import type { Page } from "../types/navigation";

interface JobSeekerDashboardProps {
  user: any;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function JobSeekerDashboard({ user, currentPage, onNavigate }: JobSeekerDashboardProps) {
  if (currentPage !== 'dashboard') return null;

  const mockUser = user || {
    name: 'Sarah Johnson',
    email: 'sarah@email.com',
    university: 'Universitas Indonesia',
    major: 'Teknik Informatika',
    gpa: '3.85',
    semester: '6',
    technicalSkills: ['JavaScript', 'React', 'Python', 'SQL'],
    softSkills: ['Leadership', 'Communication', 'Problem Solving'],
    interests: ['Technology', 'Startup', 'Finance'],
    profileComplete: 85,
    subscriptionTier: 'Basic' // Basic, Gold, Platinum
  };

  const careerRecommendations = [
    { title: 'Frontend Developer', match: 92, description: 'Perfect fit untuk skill React dan JavaScript kamu' },
    { title: 'Full Stack Developer', match: 87, description: 'Kombinasi frontend dan backend development' },
    { title: 'Product Manager', match: 78, description: 'Leadership skill dan tech background sangat cocok' }
  ];

  const certificationRecommendations = [
    { title: 'AWS Cloud Practitioner', provider: 'Amazon', duration: '2 bulan', cost: '$100', priority: 'high' },
    { title: 'Google Analytics Certified', provider: 'Google', duration: '1 bulan', cost: 'Free', priority: 'medium' },
    { title: 'Scrum Master Certified', provider: 'Scrum.org', duration: '3 minggu', cost: '$150', priority: 'low' }
  ];

  const courseRecommendations = [
    { title: 'Advanced React Development', provider: 'Udemy', duration: '40 jam', rating: 4.8, price: '$79' },
    { title: 'Data Structures & Algorithms', provider: 'Coursera', duration: '60 jam', rating: 4.9, price: '$49/month' },
    { title: 'System Design Interview', provider: 'LeetCode', duration: '30 jam', rating: 4.7, price: '$159' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl">MOJOK</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => onNavigate('dashboard')}>Dashboard</Button>
              <Button variant="ghost" onClick={() => onNavigate('jobs')}>Jobs</Button>
              <Button variant="ghost" onClick={() => onNavigate('career')}>Career Path</Button>
              <Button variant="ghost" onClick={() => onNavigate('messages')}>
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>{mockUser.name?.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1>Selamat datang, {mockUser.name}!</h1>
              <p className="text-muted-foreground">
                {mockUser.major} • {mockUser.university} • Semester {mockUser.semester}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {mockUser.subscriptionTier === 'Basic' && <Badge variant="secondary">Basic Plan</Badge>}
              {mockUser.subscriptionTier === 'Gold' && <Badge className="bg-yellow-500"><Crown className="w-3 h-3 mr-1" />Gold Plan</Badge>}
              {mockUser.subscriptionTier === 'Platinum' && <Badge className="bg-purple-600"><Gem className="w-3 h-3 mr-1" />Platinum Plan</Badge>}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Progress */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profil Akademik
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Kelengkapan Profil</span>
                    <span>{mockUser.profileComplete}%</span>
                  </div>
                  <Progress value={mockUser.profileComplete} />
                </div>
                <div>
                  <h4 className="mb-2">IPK: {mockUser.gpa}</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">GPA Tinggi</Badge>
                    <Badge variant="outline">On Track</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {mockUser.technicalSkills?.map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {mockUser.softSkills?.map((skill: string, index: number) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full">Edit Profil</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Progress Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Skills Development</span>
                    <span className="text-sm">75%</span>
                  </div>
                  <Progress value={75} />
                  
                  <div className="flex justify-between">
                    <span className="text-sm">Certifications</span>
                    <span className="text-sm">40%</span>
                  </div>
                  <Progress value={40} />
                  
                  <div className="flex justify-between">
                    <span className="text-sm">Career Readiness</span>
                    <span className="text-sm">60%</span>
                  </div>
                  <Progress value={60} />
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm">🎯 Target: Siap kerja dalam 6 bulan</p>
                  <p className="text-xs text-muted-foreground mt-1">Tingkatkan sertifikasi untuk mencapai target!</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Recommendations */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="career" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="career">Rekomendasi Karir</TabsTrigger>
                <TabsTrigger value="certifications">Sertifikasi</TabsTrigger>
                <TabsTrigger value="courses">Training & Kursus</TabsTrigger>
              </TabsList>

              <TabsContent value="career" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Jalur Karir Rekomendasi (Basic Plan)
                    </CardTitle>
                    <CardDescription>
                      Berdasarkan profil dan skill kamu
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {careerRecommendations.map((career, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4>{career.title}</h4>
                          <Badge variant="secondary">{career.match}% match</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{career.description}</p>
                        <Button variant="outline" size="sm" onClick={() => onNavigate('career')}>
                          Lihat Roadmap
                        </Button>
                      </div>
                    ))}
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Crown className="w-5 h-5 text-yellow-600" />
                        <h4 className="text-yellow-800">Upgrade ke Gold Plan</h4>
                      </div>
                      <p className="text-sm text-yellow-700 mb-3">Dapatkan rekomendasi sertifikasi personal dan analisis mendalam</p>
                      <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">Upgrade Sekarang</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="certifications" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Rekomendasi Sertifikasi
                    </CardTitle>
                    <CardDescription>
                      Tingkatkan kredibilitas profesional kamu
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {mockUser.subscriptionTier === 'Basic' ? (
                      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200 text-center">
                        <Crown className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                        <h3 className="text-yellow-800 mb-2">Fitur Gold Plan</h3>
                        <p className="text-sm text-yellow-700 mb-4">Dapatkan rekomendasi sertifikasi yang dipersonalisasi berdasarkan target karir kamu</p>
                        <Button className="bg-yellow-600 hover:bg-yellow-700">Upgrade ke Gold</Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {certificationRecommendations.map((cert, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4>{cert.title}</h4>
                              <Badge variant={cert.priority === 'high' ? 'destructive' : cert.priority === 'medium' ? 'default' : 'secondary'}>
                                {cert.priority === 'high' ? 'High Priority' : cert.priority === 'medium' ? 'Medium' : 'Low Priority'}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{cert.provider} • {cert.duration} • {cert.cost}</p>
                            <Button variant="outline" size="sm">Mulai Sertifikasi</Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="courses" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Training & Roadmap Belajar
                    </CardTitle>
                    <CardDescription>
                      Kursus online terbaik untuk skill development
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {mockUser.subscriptionTier !== 'Platinum' ? (
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200 text-center">
                        <Gem className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                        <h3 className="text-purple-800 mb-2">Fitur Platinum Plan</h3>
                        <p className="text-sm text-purple-700 mb-4">Akses roadmap belajar lengkap dengan mentoring 1-on-1 dan tracking progress detail</p>
                        <Button className="bg-purple-600 hover:bg-purple-700">Upgrade ke Platinum</Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {courseRecommendations.map((course, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4>{course.title}</h4>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm">{course.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span>{course.provider}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {course.duration}
                              </span>
                              <span>{course.price}</span>
                            </div>
                            <Button variant="outline" size="sm">Mulai Kursus</Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}