'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";

type ClientComponentProps = {
  barangs: any[];
};

export default function ClientComponent({ barangs }: ClientComponentProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex justify-center items-center w-full px-2 md:px-0">
      <Carousel className="w-full max-w-full md:max-w-6xl bg-transparent" plugins={[plugin.current]}>
        <CarouselContent className="ml-2 md:ml-4">
          {barangs.length > 0 ? (
            barangs.map((barang) => (
              <CarouselItem
                key={barang.id}
                className="p-2 w-full sm:basis-1/1 lg:basis-1/4"
              >
                <Card className="bg-transparent">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="relative w-full bg-transparent">
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-500 text-white rounded-full px-2 py-[1px] sm:px-3 sm:py-[2px]">
                        Sale
                      </span>
                      <Image
                        className="p-2 object-fit h-60 sm:h-72 md:h-80"
                        src={barang.image}
                        alt={barang.title}
                        width={300}
                        height={200}
                      />
                      <div className="px-4 pb-4 mt-auto">
                        <h5 className="text-sm md:text-lg font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                          {barang.title}
                        </h5>
                        <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                          ${barang.price}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
          ) : (
            <p>No data available</p>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
