import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, Filter, Users, TrendingUp, MessageSquare, 
  Briefcase, Star, GraduationCap, Award, MapPin, Clock
} from 'lucide-react';

import type { Page } from "../types/navigation";

interface HRDashboardProps {
  currentPage: string;
  onNavigate: (page: Page) => void;
}

export function HRDashboard({ currentPage, onNavigate }: HRDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  if (currentPage !== 'dashboard') return null;

  const candidates = [
    {
      id: 1,
      name: 'Sarah Johnson',
      university: 'Universitas Indonesia',
      major: 'Teknik Informatika',
      gpa: 3.85,
      semester: 6,
      skills: ['JavaScript', 'React', 'Python', 'SQL'],
      certifications: ['AWS Cloud Practitioner'],
      location: 'Jakarta',
      match: 95,
      experience: 'Frontend Developer Intern at Tech Startup',
      available: true
    },
    {
      id: 2,
      name: 'Ahmad Rahman',
      university: 'Institut Teknologi Bandung',
      major: 'Sistem Informasi',
      gpa: 3.92,
      semester: 8,
      skills: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      certifications: ['Oracle Java Certified', 'Scrum Master'],
      location: 'Bandung',
      match: 88,
      experience: 'Backend Developer Intern at Fintech Company',
      available: true
    },
    {
      id: 3,
      name: 'Putri Sari',
      university: 'Universitas Gadjah Mada',
      major: 'Teknik Komputer',
      gpa: 3.78,
      semester: 7,
      skills: ['Data Analysis', 'Python', 'Machine Learning', 'Tableau'],
      certifications: ['Google Data Analytics'],
      location: 'Yogyakarta',
      match: 82,
      experience: 'Data Analyst Intern at E-commerce Company',
      available: false
    },
    {
      id: 4,
      name: 'Budi Santoso',
      university: 'Universitas Brawijaya',
      major: 'Informatika',
      gpa: 3.65,
      semester: 5,
      skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'HTML/CSS'],
      certifications: ['Google UX Design'],
      location: 'Malang',
      match: 76,
      experience: 'UI/UX Design Intern at Digital Agency',
      available: true
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Jakarta',
      applicants: 24,
      matches: 8,
      posted: '3 days ago'
    },
    {
      id: 2,
      title: 'Data Analyst',
      department: 'Analytics',
      type: 'Internship',
      location: 'Remote',
      applicants: 18,
      matches: 5,
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Backend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Bandung',
      applicants: 31,
      matches: 12,
      posted: '5 days ago'
    }
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.university.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = !skillFilter || skillFilter === 'all' || candidate.skills.some(skill => 
      skill.toLowerCase().includes(skillFilter.toLowerCase()));
    const matchesLocation = !locationFilter || locationFilter === 'all' || candidate.location === locationFilter;
    
    return matchesSearch && matchesSkill && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl">MOJOK HR</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => onNavigate('dashboard')}>Dashboard</Button>
              <Button variant="ghost" onClick={() => onNavigate('jobs')}>Job Board</Button>
              <Button variant="ghost" onClick={() => onNavigate('messages')}>
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Avatar>
                <AvatarFallback>HR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1>HR Dashboard</h1>
          <p className="text-muted-foreground">Kelola rekrutmen dan temukan kandidat terbaik</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm text-muted-foreground">Total Kandidat</p>
                  <p className="text-2xl">1,247</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Briefcase className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm text-muted-foreground">Lowongan Aktif</p>
                  <p className="text-2xl">18</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm text-muted-foreground">Match Rate</p>
                  <p className="text-2xl">87%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageSquare className="w-8 h-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm text-muted-foreground">Interview Pending</p>
                  <p className="text-2xl">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Job Openings */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lowongan Aktif</CardTitle>
                <CardDescription>Kelola posting pekerjaan kamu</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4>{job.title}</h4>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {job.department} • {job.location}
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>{job.applicants} aplikasi</span>
                      <span className="text-green-600">{job.matches} cocok</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm">Lihat</Button>
                      <Button size="sm">Kelola</Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">+ Buat Lowongan Baru</Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Candidates */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Kandidat Database</CardTitle>
                <CardDescription>
                  Temukan kandidat yang sesuai dengan kriteria lowongan
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Search and Filters */}
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Cari nama, jurusan, atau universitas..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex gap-4">
                    <Select value={skillFilter} onValueChange={setSkillFilter}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by skill" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua Skills</SelectItem>
                        <SelectItem value="JavaScript">JavaScript</SelectItem>
                        <SelectItem value="Python">Python</SelectItem>
                        <SelectItem value="Java">Java</SelectItem>
                        <SelectItem value="React">React</SelectItem>
                        <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={locationFilter} onValueChange={setLocationFilter}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua Lokasi</SelectItem>
                        <SelectItem value="Jakarta">Jakarta</SelectItem>
                        <SelectItem value="Bandung">Bandung</SelectItem>
                        <SelectItem value="Yogyakarta">Yogyakarta</SelectItem>
                        <SelectItem value="Malang">Malang</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Candidates List */}
                <div className="space-y-4">
                  {filteredCandidates.map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4>{candidate.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {candidate.major} • {candidate.university}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={candidate.match >= 90 ? 'destructive' : candidate.match >= 80 ? 'default' : 'secondary'}>
                            {candidate.match}% match
                          </Badge>
                          {candidate.available && <Badge variant="outline" className="text-green-600">Available</Badge>}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          <span>IPK: {candidate.gpa} • Semester {candidate.semester}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{candidate.location}</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-sm text-muted-foreground mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      {candidate.certifications.length > 0 && (
                        <div className="mb-3">
                          <p className="text-sm text-muted-foreground mb-2">Certifications:</p>
                          <div className="flex flex-wrap gap-1">
                            {candidate.certifications.map((cert, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                <Award className="w-3 h-3 mr-1" />
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className="text-sm text-muted-foreground mb-4">{candidate.experience}</p>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Lihat Profil</Button>
                        <Button size="sm">Kirim Pesan</Button>
                        <Button variant="outline" size="sm">
                          <Star className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredCandidates.length === 0 && (
                  <div className="text-center py-8">
                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-muted-foreground mb-2">Tidak ada kandidat ditemukan</h3>
                    <p className="text-sm text-muted-foreground">Coba ubah filter pencarian kamu</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}