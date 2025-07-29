import { Calculator, Phone, Mail, ArrowRight, Star } from 'lucide-react';

import { Link } from 'react-router-dom';

const Hero = () => {


  return (
    <section className="relative min-h-screen text-white overflow-hidden" style={{ backgroundColor: '#0C203B' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

    

      {/* Hero Content */}
      <div className="relative z-10 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30">
                <Star className="h-4 w-4 text-amber-400" />
                <span className="text-sm text-slate-300">UK-Registered & HMRC Compliant</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                    STRAIGHT BOOKS
                  </span>
                </h1>
                <p className="text-lg text-amber-300 font-medium tracking-wide">Your Numbers, Our Passion</p>
              </div>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Professional accounting services for UK small businesses. Run by UK professionals,
                supported by an expert global team. Trusted, efficient, and built for startups and SMEs.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">HMRC-registered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">Dedicated manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">Affordable pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-300">Real-time support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <button
                  onClick={() => scrollToSection('contact')}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="inline-flex items-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-slate-700/50 transition-all duration-300 border border-amber-500/30 hover:border-amber-500/50"
                >
                  View Pricing
                </button> */}
                <Link to="/contact" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link to="/pricing" className="inline-flex items-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-slate-700/50 transition-all duration-300 border border-amber-500/30 hover:border-amber-500/50">
                  View Pricing
                </Link>

              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative">
                <img
                  src="https://www.resolutionaccounting.com/wp-content/uploads/2019/12/Benefits-of-Small-Business-Accounting-Services.jpg"
                  alt="UK accounting professionals"
                  className="rounded-2xl shadow-2xl border border-amber-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-amber-500/30 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">AML Supervised</div>
                    <div className="text-sm text-slate-400">UK Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
       <div className="absolute bottom-0 left-0 right-0 bg-slate-800/50 backdrop-blur-sm border-t border-amber-500/20" style={{ backgroundColor: 'rgba(12, 32, 59, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
          <a href="mailto:Contact@straightbooks.co.uk" className="flex items-center space-x-2 text-slate-300 hover:text-amber-400 transition-colors">
            <Mail className="h-4 w-4" />
            <span>Contact@straightbooks.co.uk</span>
          </a>
          <a href="tel:+447398147870" className="flex items-center space-x-2 text-slate-300 hover:text-amber-400 transition-colors">
            <Phone className="h-4 w-4" />
            <span>+44 7398 147870</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;