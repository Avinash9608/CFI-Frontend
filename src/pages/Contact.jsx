import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.BASE_URL}/api/contact-messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your message! We will get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitMessage(
          "There was an error sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(
        "There was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <main className="flex-1 w-full">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Left Column: Contact Form */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Contact Us
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed dark:text-gray-400">
                      We're here to help! Reach out to us with any questions or
                      feedback you may have.
                    </p>
                  </div>

                  {/* Contact Form */}
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none"
                          htmlFor="name"
                        >
                          Your Name
                        </label>
                        <input
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-blue-600 focus:ring-blue-600 h-12 px-4 placeholder-gray-400 dark:placeholder-gray-500"
                          id="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none"
                          htmlFor="email"
                        >
                          Your Email
                        </label>
                        <input
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-blue-600 focus:ring-blue-600 h-12 px-4 placeholder-gray-400 dark:placeholder-gray-500"
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-blue-600 focus:ring-blue-600 h-12 px-4 placeholder-gray-400 dark:placeholder-gray-500"
                        id="subject"
                        placeholder="Enter the subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none"
                        htmlFor="message"
                      >
                        Your Message
                      </label>
                      <textarea
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-blue-600 focus:ring-blue-600 min-h-36 p-4 placeholder-gray-400 dark:placeholder-gray-500"
                        id="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>

                    {submitMessage && (
                      <div
                        className={`p-3 rounded-md ${
                          submitMessage.includes("error")
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}

                    <button
                      className="flex min-w-[120px] items-center justify-center rounded-lg h-12 px-6 bg-blue-600 text-white font-bold tracking-wide hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </form>
                </div>

                {/* Right Column: Contact Info */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight">
                      Contact Information
                    </h2>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-blue-600 mt-1">
                          location_on
                        </span>
                        <p>123 Village Road, Rural Area, State, 12345</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-blue-600">
                          call
                        </span>
                        <a
                          className="hover:text-blue-600"
                          href="tel:+15551234567"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-blue-600">
                          email
                        </span>
                        <a
                          className="hover:text-blue-600"
                          href="mailto:info@villageconnect.com"
                        >
                          info@villageconnect.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <div
                      className="h-full w-full bg-center bg-no-repeat bg-cover"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB64OMwhZhUCFz8VYJTWhIvs-qkT_8ergLvVEh1mwMBuCZMgUcoXDPyAqIvwjaLHrQuNCRQi-kDUpKwHaksKuQQcRRmQlhDqRjZc1RGq8hK1S2ogr1Pt8xuXNizbIPmxkAJVzutoJKCKHSAoV2ylPNjDnWJQqIOqAjcaHC3vXxTPfSzq02QMOzOO5L89UovfN_YFjWfw8_uNjhK8TIZX25x7lBW_-cJRmNHs9KqzXve-4MFa5I_Kk6Z9Y9HW0BWa2_NL2zbQtChJif1")',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
