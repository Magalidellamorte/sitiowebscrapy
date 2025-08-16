import Image from "next/image"

interface ServiceCardProps {
  imageSrc: string
  imageAlt: string
  category: string
  title: string
  description: string
  serviceValue: string
  onContactClick: (serviceType: string) => void
}

export const ServiceCard = ({
  imageSrc,
  imageAlt,
  category,
  title,
  description,
  serviceValue,
  onContactClick
}: ServiceCardProps) => {
  const handleClick = () => {
    onContactClick(serviceValue)
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <button
          onClick={handleClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition mb-4 block text-center"
        >
          {title}
        </button>
        <p className="text-gray-500 text-sm text-center">{description}</p>
      </div>
    </div>
  )
}
