import React from "react";

const AboutUsAlt = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F3] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <h1 className="text-[#0B5E6F] text-3xl md:text-4xl font-bold mb-12 text-center">
          About us
        </h1>

        {/* Content Container */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#0B5E6F]/10">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Column - Stats */}
            <div className="lg:w-2/5 space-y-6">
              <div className="text-center lg:text-left">
                <div className="text-[#0B5E6F] text-4xl md:text-5xl font-bold">
                  200+
                </div>
                <div className="text-gray-700 text-lg">successful projects</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-[#0B5E6F] text-4xl md:text-5xl font-bold">
                  7+
                </div>
                <div className="text-gray-700 text-lg">years in marketing</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-[#0B5E6F] text-4xl md:text-5xl font-bold">
                  35%
                </div>
                <div className="text-gray-700 text-lg">
                  increase in conversions
                </div>
                <div className="text-gray-600 text-sm">
                  (on average within 6 months)
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-3/5">
              <div className="text-gray-700 text-lg leading-relaxed mb-6 space-y-4">
                <p>
                  From brand development and digital marketing to content
                  creation and performance campaigns, our team brings together
                  the expertise and passion to turn ideas into impact.
                </p>
                <p className="font-medium">
                  Let's build something great together!
                </p>
              </div>

              {/* CTA Button */}
              <button className="px-8 py-3 border-2 border-[#E89161] text-[#E89161] font-semibold rounded-lg hover:bg-[#E89161] hover:text-white transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAlt;
