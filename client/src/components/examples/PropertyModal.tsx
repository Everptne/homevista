import { useState } from 'react';
import PropertyModal from '../PropertyModal';
import { Button } from '@/components/ui/button';
import apartmentImg from '@assets/generated_images/Modern_luxury_apartment_interior_1403a18c.png';

export default function PropertyModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const mockProperty = {
    id: "1",
    title: "Appartamento Moderno",
    zone: "Centro Storico",
    squareMeters: 120,
    bedrooms: 3,
    bathrooms: 2,
    price: 450000,
    imageUrl: apartmentImg,
    description: "Elegante appartamento ristrutturato nel cuore del centro storico. Luminoso e spazioso, con finiture di pregio e vista panoramica. Perfetto per chi cerca comfort e stile in una posizione strategica.",
    propertyType: "Appartamento"
  };

  return (
    <div className="p-6">
      <Button onClick={() => setIsOpen(true)} data-testid="button-open-modal">
        Apri Modal
      </Button>
      <PropertyModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        property={mockProperty}
      />
    </div>
  );
}
