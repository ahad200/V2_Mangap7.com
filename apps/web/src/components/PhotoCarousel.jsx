import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ImageLoader from '@/components/ImageLoader.jsx';

const featuredImages = [
  {
    src: "https://drive.google.com/uc?export=view&id=1F81ggcrh5l0I2bjKNSZ0-KS_34g5MmBQ",
    alt: "Featured street photography"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1gIrwqQtIBlxhnvrqLmHwE6gR26Cd3JOg",
    alt: "Featured commercial photography"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1NqTkR4oquevhIunYRaLGMkeBYY0JrVs6",
    alt: "Featured nature landscape"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=19GOSs3bKRZmMsdXfUNw3e-FsWtm7xTDB",
    alt: "Featured architectural detail"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1y0rQLNh-vU5Xs10XRP4FxtIiO1FaSQxK",
    alt: "Featured creative portrait"
  }
];

const PhotoCarousel = () => {
  return (
    <div className="w-full relative group">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {featuredImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0 basis-full">
              <div className="overflow-hidden h-[50vh] md:h-[70vh] min-h-[400px] w-full bg-muted relative group-hover/item:shadow-2xl transition-all duration-500">
                <ImageLoader
                  src={image.src}
                  alt={image.alt}
                  sizes="100vw"
                  priority={index === 0}
                  wrapperClassName="w-full h-full"
                  className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-105"
                />
                {/* Dark overlay for contrast matching CategoryCard */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover/item:opacity-40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Prominent Navigation Buttons positioned inside the full-bleed image */}
        <CarouselPrevious className="absolute left-4 md:left-8 h-12 w-12 bg-background/80 backdrop-blur-sm border-2 border-border shadow-md hover:bg-background hover:text-foreground text-foreground transition-all duration-200 flex items-center justify-center opacity-100 z-20" />
        <CarouselNext className="absolute right-4 md:right-8 h-12 w-12 bg-background/80 backdrop-blur-sm border-2 border-border shadow-md hover:bg-background hover:text-foreground text-foreground transition-all duration-200 flex items-center justify-center opacity-100 z-20" />
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;