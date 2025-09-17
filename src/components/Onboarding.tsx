import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface OnboardingProps {
  onComplete: (userData: any) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    email: '',
    university: '',
    major: '',
    gpa: '',
    semester: '',
    
    // Skills & Interests
    technicalSkills: [] as string[],
    softSkills: [] as string[],
    interests: [] as string[],
    careerGoals: '',
    
    // Experience
    internships: '',
    projects: '',
    achievements: '',
    
    // Preferences
    workLocation: '',
    salaryExpectation: '',
    jobType: ''
  });

  const progress = (step / 4) * 100;

  const technicalSkillsList = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'MongoDB', 
    'Data Analysis', 'Machine Learning', 'UI/UX Design', 'Digital Marketing', 'Excel'
  ];

  const softSkillsList = [
    'Komunikasi', 'Leadership', 'Teamwork', 'Problem Solving', 'Time Management',
    'Adaptability', 'Critical Thinking', 'Presentation', 'Negotiation'
  ];

  const interestsList = [
    'Technology', 'Finance', 'Marketing', 'Consulting', 'Healthcare', 'Education',
    'Startup', 'Government', 'Non-Profit', 'Research', 'Entertainment'
  ];

  const handleSkillToggle = (skill: string, type: 'technicalSkills' | 'softSkills' | 'interests') => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].includes(skill) 
        ? prev[type].filter(s => s !== skill)
        : [...prev[type], skill]
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Generate ML-based recommendations (mock)
    const recommendations = {
      careerPaths: ['Software Developer', 'Data Analyst', 'Product Manager'],
      certifications: ['AWS Cloud Practitioner', 'Google Analytics', 'Scrum Master'],
      courses: ['Advanced React', 'Data Science Bootcamp', 'Leadership Skills']
    };

    onComplete({
      ...formData,
      recommendations,
      profileComplete: true
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Profiling Mahasiswa</h1>
          <p className="text-muted-foreground">Bantu kami mengenal kamu lebih baik untuk rekomendasi karir yang tepat</p>
          <Progress value={progress} className="mt-4" />
          <p className="text-sm text-muted-foreground mt-2">Langkah {step} dari 4</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && 'Informasi Akademik'}
              {step === 2 && 'Skills & Minat'}
              {step === 3 && 'Pengalaman'}
              {step === 4 && 'Preferensi Karir'}
            </CardTitle>
            <CardDescription>
              {step === 1 && 'Ceritakan tentang latar belakang akademik kamu'}
              {step === 2 && 'Apa saja skill dan minat kamu?'}
              {step === 3 && 'Pengalaman apa yang sudah kamu miliki?'}
              {step === 4 && 'Seperti apa karir impian kamu?'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {step === 1 && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="university">Universitas</Label>
                  <Input 
                    id="university"
                    value={formData.university}
                    onChange={(e) => setFormData(prev => ({ ...prev, university: e.target.value }))}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="major">Jurusan</Label>
                    <Input 
                      id="major"
                      value={formData.major}
                      onChange={(e) => setFormData(prev => ({ ...prev, major: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gpa">IPK</Label>
                    <Input 
                      id="gpa"
                      value={formData.gpa}
                      onChange={(e) => setFormData(prev => ({ ...prev, gpa: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="semester">Semester</Label>
                    <Select value={formData.semester} onValueChange={(value) => setFormData(prev => ({ ...prev, semester: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8].map(sem => (
                          <SelectItem key={sem} value={sem.toString()}>{sem}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <Label>Technical Skills</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {technicalSkillsList.map(skill => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox 
                          id={skill}
                          checked={formData.technicalSkills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill, 'technicalSkills')}
                        />
                        <Label htmlFor={skill} className="text-sm">{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Soft Skills</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {softSkillsList.map(skill => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox 
                          id={skill}
                          checked={formData.softSkills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill, 'softSkills')}
                        />
                        <Label htmlFor={skill} className="text-sm">{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Area Minat</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {interestsList.map(interest => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox 
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => handleSkillToggle(interest, 'interests')}
                        />
                        <Label htmlFor={interest} className="text-sm">{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div>
                  <Label htmlFor="internships">Pengalaman Magang</Label>
                  <Textarea 
                    id="internships"
                    placeholder="Ceritakan pengalaman magang yang pernah kamu ikuti..."
                    value={formData.internships}
                    onChange={(e) => setFormData(prev => ({ ...prev, internships: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="projects">Project yang Pernah Dikerjakan</Label>
                  <Textarea 
                    id="projects"
                    placeholder="Deskripsikan project-project yang pernah kamu kerjakan..."
                    value={formData.projects}
                    onChange={(e) => setFormData(prev => ({ ...prev, projects: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="achievements">Prestasi & Penghargaan</Label>
                  <Textarea 
                    id="achievements"
                    placeholder="Prestasi akademik, kompetisi, organisasi, dll..."
                    value={formData.achievements}
                    onChange={(e) => setFormData(prev => ({ ...prev, achievements: e.target.value }))}
                  />
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div>
                  <Label htmlFor="careerGoals">Target Karir</Label>
                  <Textarea 
                    id="careerGoals"
                    placeholder="Ceritakan tentang karir impian kamu..."
                    value={formData.careerGoals}
                    onChange={(e) => setFormData(prev => ({ ...prev, careerGoals: e.target.value }))}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="workLocation">Lokasi Kerja Preferensi</Label>
                    <Select value={formData.workLocation} onValueChange={(value) => setFormData(prev => ({ ...prev, workLocation: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih lokasi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jakarta">Jakarta</SelectItem>
                        <SelectItem value="surabaya">Surabaya</SelectItem>
                        <SelectItem value="bandung">Bandung</SelectItem>
                        <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="jobType">Tipe Pekerjaan</Label>
                    <Select value={formData.jobType} onValueChange={(value) => setFormData(prev => ({ ...prev, jobType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tipe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fulltime">Full-time</SelectItem>
                        <SelectItem value="parttime">Part-time</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="salary">Ekspektasi Gaji (optional)</Label>
                  <Input 
                    id="salary"
                    placeholder="Contoh: 5-8 juta"
                    value={formData.salaryExpectation}
                    onChange={(e) => setFormData(prev => ({ ...prev, salaryExpectation: e.target.value }))}
                  />
                </div>
              </>
            )}

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handlePrev} disabled={step === 1}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Sebelumnya
              </Button>
              {step < 4 ? (
                <Button onClick={handleNext}>
                  Selanjutnya
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleSubmit}>
                  Selesai & Buat Profil
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}