export default function Contact() {
  return (
    <section id="contact" className="bg-[#FAEDCD] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
          Contact Us
        </h2>

        <p className="text-gray-600 mt-3">
          Get in touch for bulk orders or dealership enquiries
        </p>

        {/* Contact Info */}
        <div className="mt-8 space-y-3 text-[#2D2D2D]">
          <p>📞 +91 00000 00000</p>
          <p>✉️ shriramgrfoods@gmail.com</p>
          <p>📍 Samastipur, India</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          
          {/* Call */}
          <a
            href="tel:+910000000000"
            className="bg-[#D4A373] text-white px-6 py-3 rounded-xl hover:bg-[#b08968] transition"
          >
            Call Now
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
          >
            WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:shriramgrfoods@gmail.com"
            className="border border-[#6B705C] text-[#6B705C] px-6 py-3 rounded-xl hover:bg-[#6B705C] hover:text-white transition"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}