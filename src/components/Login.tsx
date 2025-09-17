import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, Building2 } from 'lucide-react';

interface LoginProps {
  onLogin: (type: 'jobseeker' | 'hr') => void;
}

export function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2">MOJOK</h1>
          <p className="text-muted-foreground">Platform karir terpersonalisasi dengan AI untuk mahasiswa dan HR</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onLogin('jobseeker')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Mahasiswa</CardTitle>
              <CardDescription>Cari kerja dan kembangkan karir</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Profil akademik otomatis</li>
                <li>• Rekomendasi karir personal</li>
                <li>• Sertifikasi dan training</li>
                <li>• Progress tracking</li>
              </ul>
              <Button className="w-full mt-4" onClick={() => onLogin('jobseeker')}>
                Masuk sebagai Mahasiswa
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onLogin('hr')}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>HR</CardTitle>
              <CardDescription>Temukan kandidat terbaik</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Kandidat terverifikasi</li>
                <li>• Filter canggih</li>
                <li>• Rekomendasi AI</li>
                <li>• Komunikasi langsung</li>
              </ul>
              <Button className="w-full mt-4" variant="outline" onClick={() => onLogin('hr')}>
                Masuk sebagai HR
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}