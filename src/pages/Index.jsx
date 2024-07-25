import React from 'react';
import { Scroll, Book, MapPin, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore China's Rich History</h1>
        <p className="text-xl text-gray-600">Embark on a journey through 5,000 years of civilization</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scroll className="mr-2" />
              Ancient Dynasties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover the rise and fall of powerful dynasties that shaped China's imperial past, from the Qin to the Qing.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="mr-2" />
              Cultural Heritage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explore the rich traditions, philosophies, and artistic achievements that have influenced Chinese culture for millennia.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2" />
              Historical Landmarks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Visit iconic sites like the Great Wall, Forbidden City, and Terracotta Army that stand as testaments to China's past.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" />
              Modern Era
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn about China's transformation in recent centuries, from the end of imperial rule to its emergence as a global power.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Immerse Yourself in China's History</h2>
        <img src="/placeholder.svg" alt="Historical Chinese landscape" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-6" />
        <Button size="lg">Start Your Historical Journey</Button>
      </div>

      <footer className="text-center text-gray-600">
        <p>&copy; 2023 China History Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;