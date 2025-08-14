import { Globe, Shield, Users, Award, TrendingUp, CheckCircle, Target, Handshake, Star, ArrowRight, Crown } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-16 pb-32 bg-gradient-to-b from-[#0C203B] to-[#0A1A2E] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f59e0b%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-amber-500/30 mb-6 sm:mb-8">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
            <span className="text-xs sm:text-sm font-medium text-slate-200">About StraightBooks</span>
            </div>
            
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
            <span className="bg-gradient-to-r from-white via-amber-100 to-slate-300 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            
          <div className="max-w-4xl mx-auto px-2 sm:px-0">
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6 sm:mb-8">
                Straightbooks was founded with a simple mission: to give business owners the kind of accounting support we always wished we had.
              </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                We're a team of three entrepreneurs from different corners of the world, each of us having built and grown our own profitable businesses — and each of us having faced the same frustrating challenge: dealing with accountants who overcharged, under-delivered, or simply didn't understand the needs of business owners.
              </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-32">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-500/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Our Story</h3>
              <div className="space-y-3 sm:space-y-4 text-slate-300">
                <p className="text-base sm:text-lg leading-relaxed">
                  We decided to change that. Together, we founded Straightbooks in England to deliver accounting services that feel like you're hiring a dedicated accountant just for your business.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Someone who gets your goals, works proactively, and communicates clearly.
              </p>
            </div>
          </div>
          
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-amber-500/20 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">Global Team</h4>
                <p className="text-xs text-slate-400">UK, India & Ireland professionals</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-amber-500/20 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">UK Compliant</h4>
                <p className="text-xs text-slate-400">Companies House registered</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-amber-500/20 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">SME Focused</h4>
                <p className="text-xs text-slate-400">Built for startups and SMEs</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 h-full">
            <div className="relative group h-full flex flex-col">
              <img 
                src="https://danptaxsolution.com/wp-content/uploads/2022/10/man-analysis-business-accounting-laptop-45719380.jpg"
                alt="International accounting team"
                className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-xl sm:rounded-2xl shadow-2xl border border-amber-500/30 flex-grow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>

              {/* Floating stats card */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-gradient-to-r from-slate-800/95 to-slate-700/95 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl border border-amber-500/30 shadow-2xl">
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <div>
                    <div className="font-bold text-white text-sm sm:text-base lg:text-lg drop-shadow-md" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)'}}>98% Success Rate</div>
                    <div className="text-xs sm:text-sm text-slate-400 drop-shadow-sm" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}>Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Meet the Founders Section */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-amber-500/30 mb-4 sm:mb-6">
              <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">Leadership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
              <span className="bg-gradient-to-r from-white via-amber-100 to-slate-300 bg-clip-text text-transparent">
              Meet the Founders
            </span>
          </h3>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4 sm:px-0">
              Three entrepreneurs from around the world, united by a common vision
            </p>
          </div>
          
          {/* Executive Leadership Cards */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Card 1 - Executive Design */}
            <div className="w-full px-2 sm:px-0">
              <div className="group relative w-full">
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-700 opacity-75 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-2xl sm:rounded-3xl blur-sm"></div>
                
                <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-amber-500/40 sm:border-2 hover:border-amber-400/70 transition-all duration-700 group-hover:transform group-hover:scale-[1.01] shadow-2xl group-hover:shadow-amber-500/20 overflow-hidden">
                  {/* Executive pattern elements */}
                  <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                  
                  {/* Sophisticated geometric patterns */}
                  <div className="absolute top-3 sm:top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-b from-amber-500/15 to-transparent rounded-full opacity-60"></div>
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-t from-orange-500/15 to-transparent rounded-full opacity-60"></div>
                  
                  {/* Prestige corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l border-t sm:border-l-2 sm:border-t-2 border-amber-500/60 rounded-tl-2xl sm:rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r border-t sm:border-r-2 sm:border-t-2 border-amber-500/60 rounded-tr-2xl sm:rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l border-b sm:border-l-2 sm:border-b-2 border-orange-500/60 rounded-bl-2xl sm:rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r border-b sm:border-r-2 sm:border-b-2 border-orange-500/60 rounded-br-2xl sm:rounded-br-3xl"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Executive title bar */}
                    <div className="inline-flex items-center justify-center mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-amber-500/40">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                      <span className="text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">Co-Founder</span>
                    </div>
                    
                    <h4 className="font-bold text-white mb-2 sm:mb-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight">Jack Brady</h4>
                    <p className="text-amber-400 mb-6 sm:mb-8 font-semibold text-lg sm:text-xl tracking-wide">Ireland → Spain</p>
                    
                    {/* Professional separator */}
                    <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6 sm:mb-8"></div>
                    
                    <p className="text-slate-200 leading-relaxed text-base sm:text-lg lg:text-xl max-w-4xl mx-auto font-light px-2 sm:px-0">
                Originally from Ireland and now based in Spain, Jack has built a successful business in a competitive international market and brings a sharp eye for detail and client-focused service.
              </p>
            </div>
                </div>
              </div>
            </div>
            
                        {/* Card 2 - Executive Design */}
            <div className="w-full px-2 sm:px-0">
              <div className="group relative w-full">
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-700 opacity-75 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-2xl sm:rounded-3xl blur-sm"></div>
                
                <div className="relative bg-gradient-to-bl from-slate-900/95 to-slate-800/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-orange-500/40 sm:border-2 hover:border-orange-400/70 transition-all duration-700 group-hover:transform group-hover:scale-[1.01] shadow-2xl group-hover:shadow-orange-500/20 overflow-hidden">
                  {/* Executive pattern elements */}
                  <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                  
                  {/* Sophisticated geometric patterns */}
                  <div className="absolute top-3 sm:top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-b from-orange-500/15 to-transparent rounded-full opacity-60"></div>
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-t from-amber-500/15 to-transparent rounded-full opacity-60"></div>
                  
                  {/* Prestige corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l border-t sm:border-l-2 sm:border-t-2 border-orange-500/60 rounded-tl-2xl sm:rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r border-t sm:border-r-2 sm:border-t-2 border-orange-500/60 rounded-tr-2xl sm:rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l border-b sm:border-l-2 sm:border-b-2 border-amber-500/60 rounded-bl-2xl sm:rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r border-b sm:border-r-2 sm:border-b-2 border-amber-500/60 rounded-br-2xl sm:rounded-br-3xl"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Executive title bar */}
                    <div className="inline-flex items-center justify-center mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm rounded-full border border-orange-500/40">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                      <span className="text-orange-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">Co-Founder</span>
                    </div>
                    
                    <h4 className="font-bold text-white mb-2 sm:mb-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight">Daniel Buckles</h4>
                    <p className="text-orange-400 mb-6 sm:mb-8 font-semibold text-lg sm:text-xl tracking-wide">England</p>
                    
                    {/* Professional separator */}
                    <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6 sm:mb-8"></div>
                    
                    <p className="text-slate-200 leading-relaxed text-base sm:text-lg lg:text-xl max-w-4xl mx-auto font-light px-2 sm:px-0">
                An experienced entrepreneur from England, Daniel knows what it takes to build a thriving UK-based company — and the headaches that come with confusing tax processes and inconsistent advice.
              </p>
            </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Executive Design */}
            <div className="w-full px-2 sm:px-0">
              <div className="group relative w-full">
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-700 opacity-75 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-2xl sm:rounded-3xl blur-sm"></div>
                
                <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-amber-500/40 sm:border-2 hover:border-amber-400/70 transition-all duration-700 group-hover:transform group-hover:scale-[1.01] shadow-2xl group-hover:shadow-amber-500/20 overflow-hidden">
                  {/* Executive pattern elements */}
                  <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                  
                  {/* Sophisticated geometric patterns */}
                  <div className="absolute top-3 sm:top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-b from-amber-500/15 to-transparent rounded-full opacity-60"></div>
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-t from-orange-500/15 to-transparent rounded-full opacity-60"></div>
                  
                  {/* Prestige corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l border-t sm:border-l-2 sm:border-t-2 border-amber-500/60 rounded-tl-2xl sm:rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r border-t sm:border-r-2 sm:border-t-2 border-amber-500/60 rounded-tr-2xl sm:rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-l border-b sm:border-l-2 sm:border-b-2 border-orange-500/60 rounded-bl-2xl sm:rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-r border-b sm:border-r-2 sm:border-b-2 border-orange-500/60 rounded-br-2xl sm:rounded-br-3xl"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Executive title bar */}
                    <div className="inline-flex items-center justify-center mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-amber-500/40">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                      <span className="text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">Co-Founder</span>
                    </div>
                    
                    <h4 className="font-bold text-white mb-2 sm:mb-3 text-2xl sm:text-3xl lg:text-4xl tracking-tight">Raghav Shinde</h4>
                    <p className="text-amber-400 mb-6 sm:mb-8 font-semibold text-lg sm:text-xl tracking-wide">India</p>
                    
                    {/* Professional separator */}
                    <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6 sm:mb-8"></div>
                    
                    <p className="text-slate-200 leading-relaxed text-base sm:text-lg lg:text-xl max-w-4xl mx-auto font-light px-2 sm:px-0">
                Hailing from India, Raghav has launched and grown a profitable business in one of the world's most dynamic economies. He understands the value of clarity, precision, and trustworthy accounting.
              </p>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* What We Stand For Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
              <span className="bg-gradient-to-r from-white via-amber-100 to-slate-300 bg-clip-text text-transparent">
              What We Stand For
            </span>
          </h3>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4 sm:px-0">
              Our core values that drive everything we do
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
            <div className="group relative lg:col-span-1 sm:col-span-2 lg:col-span-1 h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 group-hover:transform group-hover:scale-105 overflow-hidden h-full flex flex-col">
                {/* Background image for transparency */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{backgroundImage: "url('./pexels-rdne-7947753.jpg')"}}
                ></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
                  <h4 className="font-bold text-white mb-3 sm:mb-4 text-lg sm:text-xl text-center drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>Transparency</h4>
                  <p className="text-slate-300 leading-relaxed text-center text-sm sm:text-base flex-grow drop-shadow-md" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
                You'll always know what you're paying for. No hidden fees. No confusing fine print.
              </p>
            </div>
              </div>
            </div>
            
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 group-hover:transform group-hover:scale-105 overflow-hidden h-full flex flex-col">
                {/* Background image for performance */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{backgroundImage: "url('./future-visions-business-technology-concept.jpg')"}}
                ></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
                  <h4 className="font-bold text-white mb-3 sm:mb-4 text-lg sm:text-xl text-center drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>Performance</h4>
                  <p className="text-slate-300 leading-relaxed text-center text-sm sm:text-base flex-grow drop-shadow-md" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
                We treat your accounts like we would our own — with accuracy, speed, and strategic thinking.
              </p>
            </div>
              </div>
            </div>
            
            <div className="group relative sm:col-span-2 lg:col-span-1 h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 group-hover:transform group-hover:scale-105 overflow-hidden h-full flex flex-col">
                {/* Background image for partnership */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{backgroundImage: "url('./hands-holding-puzzle-business-problem-solving-concept.jpg')"}}
                ></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Handshake className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
                  <h4 className="font-bold text-white mb-3 sm:mb-4 text-lg sm:text-xl text-center drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>Partnership</h4>
                  <p className="text-slate-300 leading-relaxed text-center text-sm sm:text-base flex-grow drop-shadow-md" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
                We're not just number-crunchers. We're your advisors, sounding boards, and problem solvers.
              </p>
            </div>
          </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center px-2 sm:px-0">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-amber-500/30 mb-6 sm:mb-8">
              <p className="text-slate-300 leading-relaxed text-lg sm:text-xl mb-4 sm:mb-6">
                We've built Straightbooks for the business owners who want more than just compliance — they want clarity, control, and confidence.
              </p>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 group cursor-pointer">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                <span className="text-slate-200 font-semibold text-base sm:text-lg">Let's raise the standard.</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


