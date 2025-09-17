import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, MessageSquare, Bell, Send, MoreVertical, 
  Building2, User, Clock, CheckCheck, Briefcase, Award
} from 'lucide-react';

import type { Page } from "../types/navigation";

interface MessagesProps {
  onNavigate: (page: Page) => void;
}

export function Messages({ onNavigate }: MessagesProps) {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const notifications = [
    {
      id: 1,
      type: 'course_update',
      title: 'Kursus React Advanced telah tersedia',
      description: 'Kursus yang kamu tunggu sekarang sudah bisa diambil dengan diskon 30%',
      time: '2 jam lalu',
      icon: '📚',
      read: false
    },
    {
      id: 2,
      type: 'certification',
      title: 'Sertifikasi AWS Cloud Practitioner',
      description: 'Deadline pendaftaran batch Maret tinggal 3 hari lagi',
      time: '5 jam lalu',
      icon: '🏆',
      read: false
    },
    {
      id: 3,
      type: 'job_match',
      title: 'Lowongan baru yang cocok untukmu',
      description: '5 lowongan Frontend Developer dengan match rate >85% telah tersedia',
      time: '1 hari lalu',
      icon: '💼',
      read: true
    },
    {
      id: 4,
      type: 'career_tip',
      title: 'Tips Interview Technical',
      description: 'Pelajari cara menjawab pertanyaan coding interview dengan confident',
      time: '2 hari lalu',
      icon: '💡',
      read: true
    }
  ];

  const conversations = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'HR Manager - TechStart Indonesia',
      company: 'TechStart Indonesia',
      lastMessage: 'Halo Sarah, kami tertarik dengan profil kamu untuk posisi Frontend Developer...',
      time: '10 menit lalu',
      unread: 2,
      avatar: '/placeholder-hr.jpg',
      status: 'online'
    },
    {
      id: 2,
      name: 'Ahmad Wijaya',
      role: 'Technical Recruiter - FinanceCorpInnovate',
      company: 'FinanceCorpInnovate',
      lastMessage: 'Terima kasih sudah apply. Apakah kamu available untuk interview minggu depan?',
      time: '2 jam lalu',
      unread: 0,
      avatar: '/placeholder-hr.jpg',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Diana Kusuma',
      role: 'Talent Acquisition - Digital Solutions',
      company: 'Digital Solutions Ltd',
      lastMessage: 'Portfolio React kamu impressive! Mau schedule call untuk discuss opportunity?',
      time: '1 hari lalu',
      unread: 1,
      avatar: '/placeholder-hr.jpg',
      status: 'away'
    }
  ];

  const currentMessages = [
    {
      id: 1,
      sender: 'hr',
      message: 'Halo Sarah! Saya Sarah dari TechStart Indonesia. Kami melihat profil kamu di CareerConnect dan tertarik untuk membahas opportunity sebagai Frontend Developer di tim kami.',
      time: '14:30',
      status: 'sent'
    },
    {
      id: 2,
      sender: 'hr',
      message: 'Project React di portfolio kamu sangat menarik, terutama yang e-commerce app. Apakah kamu available untuk quick call minggu ini?',
      time: '14:32',
      status: 'sent'
    },
    {
      id: 3,
      sender: 'user',
      message: 'Halo Sarah! Terima kasih sudah menghubungi saya. Saya sangat tertarik dengan opportunity di TechStart. Saya available untuk call kapan saja minggu ini.',
      time: '15:45',
      status: 'delivered'
    },
    {
      id: 4,
      sender: 'user',
      message: 'Boleh tau lebih detail mengenai role dan tech stack yang akan digunakan?',
      time: '15:46',
      status: 'read'
    },
    {
      id: 5,
      sender: 'hr',
      message: 'Perfect! Kami pakai React, TypeScript, dan Node.js untuk backend. Role-nya akan focus di frontend tapi ada chance untuk contribute ke full-stack projects juga.',
      time: '16:20',
      status: 'sent'
    },
    {
      id: 6,
      sender: 'hr',
      message: 'Gimana kalau kita schedule call Jumat besok jam 2 siang? Saya akan share link Zoom-nya.',
      time: '16:21',
      status: 'sent'
    }
  ];

  const selectedConv = conversations.find(conv => conv.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would normally send the message to the backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl">MOJOK Messages & Notifications</h1>
              <p className="text-muted-foreground">Komunikasi dengan HR dan update terbaru</p>
            </div>
            <Button variant="outline" onClick={() => onNavigate('dashboard')}>
              Kembali ke Dashboard
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="messages" className="space-y-6">
          <TabsList className="grid w-96 grid-cols-2">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="notifications">
              <div className="flex items-center gap-2">
                Notifications
                {notifications.filter(n => !n.read).length > 0 && (
                  <Badge className="bg-red-500 text-white text-xs h-5 w-5 p-0 flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </Badge>
                )}
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="space-y-0">
            <div className="grid lg:grid-cols-12 gap-0 h-[600px] border rounded-lg overflow-hidden">
              {/* Conversations List */}
              <div className="lg:col-span-4 border-r bg-white">
                <div className="p-4 border-b">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Cari pesan..." className="pl-10" />
                  </div>
                </div>
                <div className="overflow-y-auto h-full">
                  {conversations.map((conversation) => (
                    <div 
                      key={conversation.id}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                        selectedConversation === conversation.id ? 'bg-blue-50 border-r-2 border-r-blue-500' : ''
                      }`}
                      onClick={() => setSelectedConversation(conversation.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={conversation.avatar} />
                            <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                            conversation.status === 'online' ? 'bg-green-500' :
                            conversation.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-sm truncate">{conversation.name}</h4>
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-muted-foreground">{conversation.time}</span>
                              {conversation.unread > 0 && (
                                <Badge className="bg-blue-500 text-white text-xs h-5 w-5 p-0 flex items-center justify-center">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">{conversation.role}</p>
                          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="lg:col-span-8 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b bg-white flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={selectedConv?.avatar} />
                      <AvatarFallback>{selectedConv?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm">{selectedConv?.name}</h3>
                      <p className="text-xs text-muted-foreground">{selectedConv?.role}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Building2 className="w-3 h-3" />
                        {selectedConv?.company}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {currentMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white border'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                        <div className={`flex items-center gap-1 mt-1 text-xs ${
                          message.sender === 'user' ? 'text-blue-100 justify-end' : 'text-muted-foreground'
                        }`}>
                          <span>{message.time}</span>
                          {message.sender === 'user' && (
                            <CheckCheck className={`w-3 h-3 ${
                              message.status === 'read' ? 'text-blue-200' : 'text-blue-300'
                            }`} />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t bg-white">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Tulis pesan..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2>Notifikasi & Update</h2>
              <Button variant="outline" size="sm">Tandai Semua Dibaca</Button>
            </div>

            <div className="space-y-4">
              {notifications.map((notification) => (
                <Card key={notification.id} className={`${!notification.read ? 'border-blue-200 bg-blue-50/30' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{notification.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-sm">{notification.title}</h4>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <Badge className="bg-blue-500 text-white">Baru</Badge>
                            )}
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{notification.description}</p>
                        <div className="flex gap-2">
                          {notification.type === 'course_update' && (
                            <Button size="sm" onClick={() => onNavigate('jobs')}>Lihat Kursus</Button>
                          )}
                          {notification.type === 'certification' && (
                            <Button size="sm" onClick={() => onNavigate('career')}>Lihat Sertifikasi</Button>
                          )}
                          {notification.type === 'job_match' && (
                            <Button size="sm" onClick={() => onNavigate('jobs')}>Lihat Lowongan</Button>
                          )}
                          {notification.type === 'career_tip' && (
                            <Button size="sm" variant="outline">Baca Tips</Button>
                          )}
                          <Button size="sm" variant="ghost">Dismiss</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Notification Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Preferensi Notifikasi
                </CardTitle>
                <CardDescription>Atur jenis notifikasi yang ingin kamu terima</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm">Update Kursus & Training</h4>
                    <p className="text-xs text-muted-foreground">Notifikasi tentang kursus baru dan rekomendasi</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm">Lowongan Kerja Matching</h4>
                    <p className="text-xs text-muted-foreground">Lowongan yang sesuai dengan profil kamu</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm">Pesan dari HR</h4>
                    <p className="text-xs text-muted-foreground">Komunikasi dari recruiter dan HR</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm">Tips Karir & Artikel</h4>
                    <p className="text-xs text-muted-foreground">Konten edukatif untuk pengembangan karir</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}