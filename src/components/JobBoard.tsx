import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, MapPin, Clock, Building2, DollarSign, BookOpen, 
  ExternalLink, Star, Filter, TrendingUp
} from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

import type { Page, UserType } from "../types/navigation";

interface JobBoardProps {
  onNavigate: (page: Page) => void;
}

export function JobBoard({ onNavigate }: JobBoardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechStart Indonesia',
      location: 'Jakarta',
      type: 'Full-time',
      salary: 'Rp 8-12 juta',
      posted: '2 hari lalu',
      logo: '/placeholder-company.jpg',
      skills: ['React', 'JavaScript', 'TypeScript', 'CSS'],
      description: 'Join our dynamic team to build cutting-edge web applications...',
      match: 95,
      featured: true
    },
    {
      id: 2,
      title: 'Data Analyst Intern',
      company: 'FinanceCorpInnovate',
      location: 'Remote',
      type: 'Internship',
      salary: 'Rp 3-5 juta',
      posted: '1 hari lalu',
      logo: '/placeholder-company.jpg',
      skills: ['Python', 'SQL', 'Tableau', 'Excel'],
      description: 'Learn data analysis in a fast-paced fintech environment...',
      match: 88,
      featured: false
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'Digital Solutions Ltd',
      location: 'Bandung',
      type: 'Full-time',
      salary: 'Rp 10-15 juta',
      posted: '3 hari lalu',
      logo: '/placeholder-company.jpg',
      skills: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      description: 'Build scalable backend systems for enterprise clients...',
      match: 82,
      featured: false
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Creative Agency Co',
      location: 'Yogyakarta',
      type: 'Contract',
      salary: 'Rp 6-9 juta',
      posted: '1 minggu lalu',
      logo: '/placeholder-company.jpg',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      description: 'Design beautiful and intuitive user experiences...',
      match: 76,
      featured: false
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete React Developer Bootcamp',
      provider: 'CodeAcademy',
      duration: '12 weeks',
      level: 'Intermediate',
      price: 'Rp 1,200,000',
      rating: 4.8,
      students: 15420,
      affiliate: true,
      image: '/placeholder-course.jpg',
      skills: ['React', 'JavaScript', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Data Science with Python',
      provider: 'DataLearn',
      duration: '16 weeks',
      level: 'Beginner',
      price: 'Rp 2,500,000',
      rating: 4.9,
      students: 28150,
      affiliate: true,
      image: '/placeholder-course.jpg',
      skills: ['Python', 'Pandas', 'Machine Learning', 'Visualization']
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner Certification',
      provider: 'CloudGuru',
      duration: '8 weeks',
      level: 'Beginner',
      price: 'Rp 800,000',
      rating: 4.7,
      students: 45230,
      affiliate: true,
      image: '/placeholder-course.jpg',
      skills: ['AWS', 'Cloud Computing', 'DevOps']
    },
    {
      id: 4,
      title: 'Full-Stack Web Development',
      provider: 'WebMaster Pro',
      duration: '20 weeks',
      level: 'Intermediate',
      price: 'Rp 3,000,000',
      rating: 4.6,
      students: 12890,
      affiliate: true,
      image: '/placeholder-course.jpg',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database']
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = !locationFilter || locationFilter === 'all' || job.location === locationFilter;
    const matchesType = !typeFilter || typeFilter === 'all' || job.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl mb-4">MOJOK Jobs & Learning</h1>
            <p className="text-xl opacity-90 mb-8">Temukan pekerjaan impian dan tingkatkan skill kamu</p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4 bg-white rounded-lg p-2">
                <div className="flex-1 flex items-center">
                  <Search className="w-5 h-5 text-gray-400 ml-3" />
                  <Input
                    placeholder="Cari pekerjaan, skill, atau perusahaan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-none text-gray-900 ml-2"
                  />
                </div>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-48 border-none">
                    <SelectValue placeholder="Lokasi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Lokasi</SelectItem>
                    <SelectItem value="Jakarta">Jakarta</SelectItem>
                    <SelectItem value="Bandung">Bandung</SelectItem>
                    <SelectItem value="Yogyakarta">Yogyakarta</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-48 border-none">
                    <SelectValue placeholder="Tipe Pekerjaan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Tipe</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="px-8">Cari</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="jobs" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList className="grid w-96 grid-cols-2">
              <TabsTrigger value="jobs">Lowongan Kerja</TabsTrigger>
              <TabsTrigger value="courses">Kursus & Training</TabsTrigger>
            </TabsList>
            <Button variant="outline" onClick={() => onNavigate('dashboard')}>
              Kembali ke Dashboard
            </Button>
          </div>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2>Lowongan Kerja ({filteredJobs.length})</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Select defaultValue="relevant">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Paling Relevan</SelectItem>
                    <SelectItem value="recent">Terbaru</SelectItem>
                    <SelectItem value="salary">Gaji Tertinggi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Featured Jobs */}
              <div className="lg:col-span-2 space-y-4">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className={`hover:shadow-lg transition-shadow ${job.featured ? 'border-blue-200 bg-blue-50/30' : ''}`}>
                    {job.featured && (
                      <div className="bg-blue-100 px-4 py-2 border-b">
                        <div className="flex items-center gap-2 text-blue-700">
                          <Star className="w-4 h-4" />
                          <span className="text-sm">Featured Job</span>
                          <Badge variant="outline" className="ml-auto text-green-600">{job.match}% match</Badge>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <ImageWithFallback
                            src={job.logo}
                            alt={`${job.company} logo`}
                            className="w-12 h-12 rounded-lg border object-cover"
                          />
                          <div>
                            <h3 className="mb-1">{job.title}</h3>
                            <p className="text-muted-foreground mb-2">{job.company}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                            </div>
                          </div>
                        </div>
                        {!job.featured && (
                          <Badge variant="outline" className="text-green-600">{job.match}% match</Badge>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">{skill}</Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Diposting {job.posted}</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Simpan</Button>
                          <Button size="sm">Lamar Sekarang</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Job Market Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Frontend Developer</span>
                        <span className="text-green-600">+15%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">248 lowongan aktif</div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Data Analyst</span>
                        <span className="text-green-600">+22%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">183 lowongan aktif</div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Backend Developer</span>
                        <span className="text-green-600">+18%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">156 lowongan aktif</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tips Karir</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm mb-1">Optimasi CV untuk ATS</h4>
                      <p className="text-xs text-muted-foreground">Gunakan keyword yang relevan dengan posisi yang kamu lamar</p>
                    </div>
                    <div>
                      <h4 className="text-sm mb-1">Persiapan Interview</h4>
                      <p className="text-xs text-muted-foreground">Latih pertanyaan umum dan technical questions</p>
                    </div>
                    <div>
                      <h4 className="text-sm mb-1">Portfolio Online</h4>
                      <p className="text-xs text-muted-foreground">Showcase project terbaik kamu dengan dokumentasi yang jelas</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2>Kursus & Training Recommendation</h2>
              <div className="flex gap-2">
                <Select defaultValue="relevant">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Paling Relevan</SelectItem>
                    <SelectItem value="popular">Terpopuler</SelectItem>
                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                    <SelectItem value="price">Harga Terendah</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4 mb-4">
                      <ImageWithFallback
                        src={course.image}
                        alt={course.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{course.provider}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{course.duration}</span>
                          <span>{course.level}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{skill}</Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-lg">{course.price}</p>
                        <p className="text-xs text-muted-foreground">{course.students.toLocaleString()} students</p>
                      </div>
                      {course.affiliate && (
                        <Badge variant="outline" className="text-green-600">Affiliate Link</Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Detail Kursus
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Daftar Sekarang
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border">
              <h3 className="mb-2">🎯 Rekomendasi Personal</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Berdasarkan profil dan target karir kamu, kami merekomendasikan kursus-kursus di atas untuk meningkatkan peluang diterima kerja.
              </p>
              <Button onClick={() => onNavigate('career')}>
                Lihat Career Roadmap Lengkap
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}