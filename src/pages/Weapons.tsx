
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { weapons, getComponentById } from '@/data/armoryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Weapons = () => {
  const formatComponentName = (id: string) => {
    const component = getComponentById(id);
    return component ? component.name : id;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="vintage-card mb-8 animate-fade-in">
          <h1 className="text-3xl font-serif font-bold mb-6 text-center text-armeria-wood">
            <span className="header-decoration">Catalogo Armi</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weapons.map((weapon, index) => (
              <Card key={weapon.id} className="vintage-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-center mb-4 h-40 wood-panel bg-black">
                    {weapon.image && (
                      <img 
                        src={weapon.image} 
                        alt={weapon.name} 
                        className="h-32 object-contain"
                      />
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-2 text-armeria-wood">{weapon.name}</h3>
                  
                  <div className="mt-4">
                    <p className="font-medium text-armeria-dark mb-2">Componenti necessari:</p>
                    <ul className="list-disc list-inside text-sm text-armeria-dark/80">
                      {weapon.components.map((component, compIndex) => (
                        <li key={compIndex}>
                          {component.quantity}x {formatComponentName(component.componentId)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-armeria-wood hover:bg-armeria-wood/80">
            <Link to="/">Torna in Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Weapons;
