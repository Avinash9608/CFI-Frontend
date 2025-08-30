import React from "react";

const About = () => {
  return (
    <div
      className="bg-white dark:bg-gray-900 transition-colors duration-500"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <main className="text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Hero Section */}
        <section
          className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaDuym86TiOZWcn-atluokrNtAUMq_PW_0ahBD5iAreSBwhspyDFLabW-CviOuS94HMPN2k1tpHaGD4ancIEQjhfYLR0CWVsnrS3uYJDFwtHx3WYZou-G-aI9RBL_N7WDyzBqc7UQxCa-ukiDFNodIxyiKAIAaN5nhYJwp_WedXyqBffPhR2vICrNCBkOkHLviBTGTrFf8U1lDmOpfBl-0whxMREltAZyxjph_eKwut9syAz6QTRYk-rYwwjGUXZ4MtlFFl5vhNUdX")',
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              Empowering Panchayats through Technology
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-200">
              We're a team of dedicated professionals committed to empowering
              rural governance through innovative technological solutions for
              Panchayati Raj Institutions. Our mission is to digitally transform
              Gram Panchayats, enhancing transparency, efficiency, and citizen
              engagement.
            </p>
            <button className="mt-8 inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-blue-600 text-white text-base font-semibold tracking-wide shadow-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ring-offset-gray-900">
              <span className="truncate">Learn More</span>
            </button>
          </div>
        </section>

        {/* History & Mission */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-16">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
                    Our History
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Founded in 2010, Panchayat Innovatech Solutions began as a
                    small initiative to leverage technology for rural
                    development. Over the years, we have grown into a leading
                    provider of digital solutions for Panchayati Raj
                    Institutions, serving Gram Panchayats across the country.
                    Our journey has been marked by innovation, collaboration,
                    and a relentless pursuit of empowering local governance.
                  </p>
                </div>
                <div className="h-64 rounded-lg bg-gray-200 dark:bg-gray-800">
                  <img
                    alt="Our History"
                    className="w-full h-full object-cover rounded-lg"
                    src="https://plus.unsplash.com/premium_photo-1716603741742-db515ca0a8e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZpbGxhZ2UlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D"
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
                    Our Mission
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    At Panchayat Innovatech Solutions, our mission is to
                    digitally empower Panchayats and support rural development
                    through cutting-edge technology solutions. We strive to
                    understand the unique challenges of local governance and
                    provide tailored strategies that enhance transparency,
                    efficiency, and citizen engagement. Our commitment is to
                    deliver exceptional value and build long-lasting
                    partnerships with Panchayats, enabling them to achieve
                    sustainable development and improved quality of life for
                    their communities.
                  </p>
                </div>
                <div className="order-1 h-64 rounded-lg bg-gray-200 dark:bg-gray-800 md:order-2">
                  <img
                    alt="Our Mission"
                    className="w-full h-full object-cover rounded-lg"
                    src="https://plus.unsplash.com/premium_photo-1716259490205-dfbb08f9919f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHZpbGxhZ2UlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-100 dark:bg-gray-900 py-20 sm:py-24 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
                The brilliant minds behind our success.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Sarah Chen",
                  role: "CEO",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBp0inu2bHS2XyTbIQEEO7E-NwzXC9W0UBAEkc13sotrdD9niIR44QjezNiH1PxldDD3301mPvfvoc26LuLeaW0uOHfFGf-woRh6xx5gMXLltfwwMtOKZkAypYSamEE3mSJpLEgVC4oEK98AygNHpN1k_xNRBFC6W66NlM1gFxBOqXBJy-zfIHKECkoW4Bk5027P5pKGMPtfT0X-TrP675hoC3uTfhuTVfOU_YQuRoomE-nz3e1ujHUIKYq_BXIMQQ9hhIGBgsneFD4",
                },
                {
                  name: "David Lee",
                  role: "CTO",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2EVvRC74FBWvSsK_1yJpTkQDJq3aeVioZZCatF1jDn3cNlTBiMGQYfi7iWIfTzLorZ0fYpEvCkITeT3VqDR6DXRu2fc7iD3gMb4RUNVWH8iEoILFqyeonlRSwkMgO3zU2EFZYBVHayIKYWB-x6Rds2NqFsibt8GBr04_tM63ZBaDMhaMgtS3vTu9V0HM_kHIuP7y9q1EO-Y3VfF7soiEXw_prHYm_5vrbTybISE7qTKy4u89U8XOPoGCzXtoJJ_ZYYRnou78orP_s",
                },
                {
                  name: "Emily Wong",
                  role: "Head of Marketing",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAm4KiMPsGINcJ5LJhB65lYrdwxF0EFgQNf2LrIQlEvR_utAs38frDcFvVeGx5pruZN8xunbN3wWUbBgsxaHZF8mrrfCqzR-Nc49O73JKgUz4jeUBmzAtqmHaxHMcMKAawGYIi908RvLUpMUqMVJ8Yu9Y-sGI4TtHawIMyqP0wqZJDUBDL-gaRE0YKo1lXfJIFMp5-Cf74HPqSv_ddVFwKBQ2iOrx5CpQE0a6odaTqYbi8mON1e1KosPvQnmezIr3zqZsD0ieSCXE4G",
                },
                {
                  name: "Michael Tan",
                  role: "Lead Developer",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBdGxVxBlmCMVtBHzKr6duyzNCXOURHpQFqIAzps6_ImVFmrc1_DsBtiM9yBOOzuHnr5wsVb1-vPZk0gDdqa7Edp8a8vKv-BTxTLmUtNUo2hMGGBELfw_D3YCOURknuJ8lQ2MtWW8_beRKc9A45HBD9iBVEX9e_QMNbsbNLYh008VTniGvPDBYNW0_aw4AhbZXjVyDvLSrSXCrM4atQrWFJlIAcYeGveD1JsboqhqOzPWK4UOMm3SsFu4FltVYNZ7XRmKvHIDbjXb0j",
                },
              ].map((member, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="mx-auto h-40 w-40 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
