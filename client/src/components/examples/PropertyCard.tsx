import PropertyCard from '../PropertyCard';
import apartmentImg from '@assets/generated_images/Modern_luxury_apartment_interior_1403a18c.png';

export default function PropertyCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <PropertyCard
        id="1"
        title="Appartamento Moderno"
        zone="Centro Storico"
        squareMeters={120}
        bedrooms={3}
        bathrooms={2}
        price={450000}
        imageUrl={apartmentImg}
        onClick={() => console.log('Property card clicked')}
      />
    </div>
  );
}
