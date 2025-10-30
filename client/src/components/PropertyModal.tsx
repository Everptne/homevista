import { X, Home, BedDouble, Bath, MapPin, Phone, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: string;
    title: string;
    zone: string;
    squareMeters: number;
    bedrooms: number;
    bathrooms: number;
    price: number;
    imageUrl: string;
    description: string;
    propertyType: string;
  } | null;
}

export default function PropertyModal({ isOpen, onClose, property }: PropertyModalProps) {
  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover-elevate active-elevate-2 transition-all"
          data-testid="button-close-modal"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-3">
            <div className="aspect-[4/3] relative overflow-hidden rounded-tl-lg md:rounded-bl-lg">
              <img 
                src={property.imageUrl} 
                alt={property.title}
                className="w-full h-full object-cover"
                data-testid="img-modal-property"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 p-8 space-y-6">
            <DialogHeader>
              <div className="space-y-2">
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary" data-testid="text-property-type">
                  {property.propertyType}
                </span>
                <h2 className="text-2xl font-semibold text-foreground" data-testid="text-modal-title">
                  {property.title}
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm" data-testid="text-modal-zone">{property.zone}</span>
                </div>
              </div>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1" data-testid="text-modal-sqm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Home className="h-4 w-4" />
                  </div>
                  <p className="text-lg font-semibold">{property.squareMeters} m²</p>
                  <p className="text-xs text-muted-foreground">Superficie</p>
                </div>
                <div className="space-y-1" data-testid="text-modal-bedrooms">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BedDouble className="h-4 w-4" />
                  </div>
                  <p className="text-lg font-semibold">{property.bedrooms}</p>
                  <p className="text-xs text-muted-foreground">Camere</p>
                </div>
                <div className="space-y-1" data-testid="text-modal-bathrooms">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bath className="h-4 w-4" />
                  </div>
                  <p className="text-lg font-semibold">{property.bathrooms}</p>
                  <p className="text-xs text-muted-foreground">Bagni</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground mb-2">Descrizione</p>
                <p className="text-sm text-foreground/80 leading-relaxed" data-testid="text-modal-description">
                  {property.description}
                </p>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-3xl font-semibold text-foreground" data-testid="text-modal-price">
                  €{property.price.toLocaleString('it-IT')}
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  className="flex-1"
                  onClick={() => console.log('Call button clicked for property:', property.id)}
                  data-testid="button-modal-call"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Chiama
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={() => console.log('Email button clicked for property:', property.id)}
                  data-testid="button-modal-email"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  E-mail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
