import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import PropertyModal from "@/components/PropertyModal";
import type { Property } from "@shared/schema";

import heroImg from '@assets/generated_images/Sicily_coastal_panoramic_view_46f7d415.png';
import img1 from '@assets/generated_images/Modern_luxury_apartment_interior_1403a18c.png';
import img2 from '@assets/generated_images/Contemporary_penthouse_living_room_d73103dd.png';
import img3 from '@assets/generated_images/Elegant_villa_with_pool_92c6abe8.png';
import img4 from '@assets/generated_images/Industrial_loft_apartment_interior_9aa17ec5.png';
import img5 from '@assets/generated_images/Beachfront_apartment_ocean_view_8ef25286.png';
import img6 from '@assets/generated_images/Scandinavian_minimalist_apartment_fff8f99c.png';
import img7 from '@assets/generated_images/Modern_townhouse_exterior_dcd5f44c.png';
import img8 from '@assets/generated_images/Luxury_duplex_apartment_interior_dbb68af9.png';

const mockProperties: Property[] = [
  {
    id: "1",
    title: "Appartamento Moderno",
    zone: "Palermo - Centro Storico",
    squareMeters: 120,
    bedrooms: 3,
    bathrooms: 2,
    price: 450000,
    imageUrl: img1,
    description: "Elegante appartamento ristrutturato nel cuore del centro storico. Luminoso e spazioso, con finiture di pregio e vista panoramica. Perfetto per chi cerca comfort e stile in una posizione strategica.",
    propertyType: "Appartamento"
  },
  {
    id: "2",
    title: "Attico di Lusso",
    zone: "Cefalù - Quartiere Residenziale",
    squareMeters: 180,
    bedrooms: 4,
    bathrooms: 3,
    price: 890000,
    imageUrl: img2,
    description: "Straordinario attico su due livelli con terrazza panoramica. Interni raffinati con marmi pregiati, domotica avanzata e vista mozzafiato sulla città. Un'oasi di lusso e tranquillità.",
    propertyType: "Attico"
  },
  {
    id: "3",
    title: "Villa con Piscina",
    zone: "Palermo - Collina Panoramica",
    squareMeters: 350,
    bedrooms: 5,
    bathrooms: 4,
    price: 1250000,
    imageUrl: img3,
    description: "Splendida villa indipendente con piscina e giardino curato. Architettura contemporanea, ampi spazi living e zona notte separata. Ideale per chi desidera privacy e comfort assoluto.",
    propertyType: "Villa"
  },
  {
    id: "4",
    title: "Loft Industriale",
    zone: "Palermo - Zona Portuale",
    squareMeters: 140,
    bedrooms: 2,
    bathrooms: 2,
    price: 380000,
    imageUrl: img4,
    description: "Caratteristico loft in ex edificio industriale ristrutturato. Soffitti alti con travi a vista, ampie vetrate e design contemporaneo. Perfetto per amanti dello stile urban-chic.",
    propertyType: "Loft"
  },
  {
    id: "5",
    title: "Appartamento Vista Mare",
    zone: "Palermo - Lungomare",
    squareMeters: 110,
    bedrooms: 2,
    bathrooms: 2,
    price: 520000,
    imageUrl: img5,
    description: "Incantevole appartamento fronte mare con ampia terrazza. Vista panoramica sull'oceano, interni moderni e accesso diretto alla spiaggia. Un sogno per gli amanti del mare.",
    propertyType: "Appartamento"
  },
  {
    id: "6",
    title: "Appartamento Scandinavo",
    zone: "Palermo - Quartiere Verde",
    squareMeters: 95,
    bedrooms: 2,
    bathrooms: 1,
    price: 320000,
    imageUrl: img6,
    description: "Accogliente appartamento dal design nordico minimalista. Luminoso e funzionale, con finiture in legno chiaro e spazi ottimizzati. Perfetto per chi ama l'essenzialità elegante.",
    propertyType: "Appartamento"
  },
  {
    id: "7",
    title: "Townhouse Contemporanea",
    zone: "Palermo - Zona Urbana",
    squareMeters: 160,
    bedrooms: 3,
    bathrooms: 3,
    price: 580000,
    imageUrl: img7,
    description: "Moderna townhouse su tre livelli in contesto urbano esclusivo. Design contemporaneo, piccolo giardino privato e garage. Soluzione ideale per famiglie dinamiche.",
    propertyType: "Townhouse"
  },
  {
    id: "8",
    title: "Duplex di Prestigio",
    zone: "Palermo - Centro Direzionale",
    squareMeters: 200,
    bedrooms: 4,
    bathrooms: 3,
    price: 750000,
    imageUrl: img8,
    description: "Esclusivo duplex con doppia altezza e scala scenografica. Finiture luxury, pavimenti in marmo e ampie vetrate. Rappresenta l'eccellenza dell'abitare contemporaneo.",
    propertyType: "Duplex"
  }
];

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero imageUrl={heroImg} />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-3" data-testid="text-page-title">
            Immobili di Prestigio
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-page-subtitle">
            Scopri la nostra selezione esclusiva di proprietà nelle migliori zone
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              onClick={() => setSelectedProperty(property)}
            />
          ))}
        </div>
      </main>
      
      <PropertyModal
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
        property={selectedProperty}
      />
      
      <Footer />
    </div>
  );
}
