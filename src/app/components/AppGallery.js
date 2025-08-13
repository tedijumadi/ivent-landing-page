const docuQuotePhotos = [
  "/images/ss/Screenshot_20250728-115451.jpg",
  "/images/ss/Screenshot_20250728-114728.jpg",

  "/images/ss/Screenshot_20250728-114737.jpg",
  "/images/ss/Screenshot_20250728-114740.jpg",
  "/images/ss/Screenshot_20250728-115415.jpg",
  "/images/ss/Screenshot_20250728-115439.jpg",
  "/images/ss/Screenshot_20250728-115445.jpg"
];

export default function AppGallery() {
  return (
    <section id="appgallery" className="py-16 px-6 bg-gray-50 text-gray-900 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Ivent App Gallery</h2>
      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {docuQuotePhotos.map((photo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={photo}
              alt={`DocuQuote Screenshot ${index + 1}`}
              className="w-full h-64 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
