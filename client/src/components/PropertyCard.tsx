import { Home, BedDouble, Bath, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: string;
  title: string;
  zone: string;
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  imageUrl: string;
  onClick?: () => void;
}

export default function PropertyCard({
  id,
  title,
  zone,
  squareMeters,
  bedrooms,
  bathrooms,
  price,
  imageUrl,
  onClick,
}: PropertyCardProps) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all duration-200"
      onClick={onClick}
      data-testid={`card-property-${id}`}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
          data-testid={`img-property-${id}`}
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-base text-foreground" data-testid={`text-title-${id}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1" data-testid={`text-zone-${id}`}>
            {zone}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-foreground/70">
          <div className="flex items-center gap-1.5" data-testid={`text-sqm-${id}`}>
            <Home className="h-4 w-4" />
            <span>{squareMeters} m²</span>
          </div>
          <div className="flex items-center gap-1.5" data-testid={`text-bedrooms-${id}`}>
            <BedDouble className="h-4 w-4" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5" data-testid={`text-bathrooms-${id}`}>
            <Bath className="h-4 w-4" />
            <span>{bathrooms}</span>
          </div>
        </div>
        
        <div className="pt-2 border-t">
          <p className="text-xl font-semibold text-foreground" data-testid={`text-price-${id}`}>
            €{price.toLocaleString('it-IT')}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              console.log('Call button clicked for property:', id);
            }}
            data-testid={`button-call-${id}`}
          >
            <Phone className="h-4 w-4 mr-1.5" />
            Whatsapp
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              console.log('Email button clicked for property:', id);
            }}
            data-testid={`button-email-${id}`}
          >
            <Mail className="h-4 w-4 mr-1.5" />
            E-mail
          </Button>
        </div>
      </div>
    </Card>
  );
}
