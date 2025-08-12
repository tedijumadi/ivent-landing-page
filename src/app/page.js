


import AppBar from "./components/AppBar";
import AppGallery from "./components/AppGallery";
import OtherApplications from "./components/OtherApplication";
import SEO from "./components/SEO";





export default function Home() {



  return (
    <main className="font-sans">
    {/* seo*/}

      <SEO   
      title="DocuQuote: Quotation & Invoice"
        description="Deskripsi singkat halaman."
        keywords="keyword1, keyword2, keyword3"
        image="/images/icon-512.png"
        url="https://docuquote-landing-page.web.app/"/>

      {/* App Bar */}
      <AppBar/>



      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4"
      >
        <h1 className="text-lg font-bold">
          Kelola Quotation & Invoice Lebih Mudah
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          DocuQuote membantu Anda membuat, mengelola, dan mengirim quotation serta invoice dengan cepat dari smartphone Anda.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.docuquote.bundleId" // ganti dengan link Play Store asli
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white flex items-center space-x-2"
        >
          <img
            src="/images/Google Play Store.png"
            alt="Google Play"
            className="h-6"
          />
          <span>Download di Google Play</span>
        </a>
      </section>


      {/* App Gallery */}
      <AppGallery/>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-white text-gray-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Tentang Aplikasi</h2>
        <p className="max-w-3xl mx-auto">
          DocuQuote dirancang untuk membantu pelaku usaha, freelancer, dan profesional
          dalam mengelola dokumen bisnis dengan cepat. Anda bisa membuat quotation dan
          invoice hanya dalam hitungan menit, langsung dari smartphone.
        </p>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 px-6 bg-gray-100 text-gray-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Dapatkan Sekarang</h2>
        <p className="mb-6">
          Unduh DocuQuote sekarang di Google Play Store dan mulai kelola dokumen bisnis
          Anda dengan lebih efisien.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.docuquote.bundleId" // ganti dengan link Play Store asli
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        >
          <img
            src="/images/Google Play Store.png"
            alt="Google Play"
            className="h-6"
          />
          <span>Download di Google Play</span>
        </a>
      </section>

    {/* Contact Section */}
          <section
            id="contact"
            className="py-20 px-6 bg-black text-gray-800 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-white" >Hubungi Kami</h2>
            <p className="mb-10 text-white">
              Punya pertanyaan atau masukan? Kami senang mendengarnya.
            </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Email Button */}
          <a
            href="mailto:official@innotia.asia?subject=Pertanyaan%20DocuQuote"
            className="px-6 py-3 bg-red-800 hover:bg-blue-700 text-white rounded-lg inline-flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img
            src="/images/Gmail.png"
            alt="Whatsapp"
            className="w-5 h-5 object-contain"
            loading="lazy"
          />
            Email Kami
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6281385942154?text=Halo%20DocuQuote,%20saya%20ingin%20bertanya%20tentang%20aplikasi%20Anda."
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg inline-flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
            src="/images/WhatsApp.png"
            alt="Whatsapp"
            className="w-5 h-5 object-contain"
            loading="lazy"
          />
            Chat WhatsApp
          </a>
        </div>
      </section>


      {/* Other Application */}
       <OtherApplications />



      {/* Footer */}
      <footer className="p-6 bg-gray-900 text-white text-center">
        &copy; {new Date().getFullYear()} <a href="https://innotia.asia/"   className="text-blue-500 hover:text-blue-700">Innotia Power Nusantara.</a> All rights reserved.
      </footer>
    </main>
  );
}
