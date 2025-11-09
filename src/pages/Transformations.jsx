import React from 'react'
import exampleImage from "../assets/example-image.png"
import AltHero from '../components/AltHero'

export default function Transformations() {
  // Using the same image 10 times as placeholder
  // You can replace these with different images later
  const transformationImages = Array(20).fill({
    src: exampleImage,
    alt: "Fitness transformation"
  })

  return (
    <div>
      <AltHero heroTitle="Transformation Gallery" />
      <div className="w-full px-4 py-8 md:px-8 lg:px-12 bg-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {transformationImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 "
            >
              {/* aspect-[3/4] */}
              <img
                src={image.src}
                alt={`${image.alt} ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}