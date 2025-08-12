"use client";

export default function OtherApplications() {
  const icons = [
    { src: "/images/icon other aplication/innotia.jpg", title: "Innotia Power Nusantara", link: "https://innotia.asia/=" },
    { src: "/images/icon other aplication/inscanqr.png", title: "InScanQR", link: "https://play.google.com/store/apps/details?id=in.scanqr.us" },
    { src: "/images/icon other aplication/calendar holidays indonesia.png", title: "Calendar Holidays Indonesia", link: "https://play.google.com/store/apps/details?id=com.InKalender.Innotia" },
    { src: "/images/icon other aplication/ivent.png", title: "Ivent: Easy Manage Event", link: "https://play.google.com/store/apps/details?id=com.ivent.innotia" },
    { src: "/images/icon other aplication/simpel hr.png", title: "SimpelHR - Manajemen Kehadiran", link: "https://play.google.com/store/apps/details?id=inn.simpelhr.client" },
    { src: "/images/icon other aplication/inchat.jpg", title: "InChat", link: "https://play.google.com/store/apps/details?id=com.innotia.inchat" },
    { src: "/images/icon other aplication/docuquote.png", title: "DocuQuote: Quotation & Invoice", link: "https://play.google.com/store/apps/details?id=com.docuquote.bundleId" }
  ];

  const loopIcons = [...icons, ...icons, ...icons, ...icons];

  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-800 text-center">
      <h2 className="text-2xl font-bold mb-8">Other Applications We Created</h2>

      <div className="overflow-hidden relative w-full">
        <div className="flex animate-scroll">
          {loopIcons.map((app, index) => (
            <a
              key={index}
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center mx-4 group"
            >
              {/* Container gambar */}
              <div className="w-20 h-20 bg-white rounded-lg border border-gray-300 shadow-sm flex items-center justify-center p-1 overflow-hidden">
                <img
                  src={app.src}
                  alt={app.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Container teks */}
              <div className="mt-2">
                <span className="text-sm text-gray-700 group-hover:text-blue-500 text-center block">
                  {app.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
