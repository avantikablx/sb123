import { Building, MapPin, Shield, Mail, FileCheck, Clock, CheckCircle2, ArrowLeft, Target, Users, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const UKAddressPage = () => {
  const addressFeatures = [
    {
      icon: Building,
      title: 'Professional Business Address',
      description: 'Prestigious UK business address for your company registration.',
      details: 'High-quality business address in a professional location that enhances your company\'s credibility and provides a permanent UK presence.',
      gradient: 'from-amber-500 to-orange-400'
    },
    {
      icon: MapPin,
      title: 'Registered Office Service',
      description: 'Official registered office address for Companies House.',
      details: 'Compliant registered office service that meets all Companies House requirements, providing a stable address for official correspondence.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: Mail,
      title: 'Mail Handling & Forwarding',
      description: 'Professional mail management and forwarding services.',
      details: 'Secure handling of all business mail with options for forwarding, scanning, or collection, ensuring you never miss important correspondence.',
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Keep your personal address private and secure.',
      details: 'Protect your home address from public view while maintaining professional business presence and meeting legal requirements.',
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      icon: FileCheck,
      title: 'Legal Compliance',
      description: 'Ensure full compliance with UK company law.',
      details: 'Meet all statutory requirements for registered office addresses with ongoing compliance monitoring and updates.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Instant Setup',
      description: 'Quick setup with immediate availability.',
      details: 'Same-day setup available with instant confirmation, allowing immediate use for company formation and business purposes.',
      gradient: 'from-orange-500 to-amber-400'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Professional Image',
      description: 'Enhance your business credibility with a prestigious address.'
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Keep your personal address private and secure.'
    },
    {
      icon: Globe,
      title: 'UK Presence',
      description: 'Establish UK presence without physical office requirements.'
    },
    {
      icon: Award,
      title: 'Flexible Service',
      description: 'Adaptable service levels to meet your specific needs.'
    }
  ];

  const serviceTypes = [
    {
      title: 'Basic Registered Office',
      description: 'Simple registered office service for Companies House compliance',
      features: ['Registered office address', 'Legal document receipt', 'HMRC correspondence handling', 'Annual compliance support']
    },
    {
      title: 'Business Address Plus',
      description: 'Enhanced service with mail handling and forwarding',
      features: ['All basic services', 'Mail forwarding service', 'Telephone answering', 'Meeting room access']
    },
    {
      title: 'Virtual Office Premium',
      description: 'Complete virtual office solution with full business support',
      features: ['All enhanced services', 'Dedicated phone number', 'Professional call handling', 'Administrative support']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Back Navigation */}
      <section className="pt-12 pb-24 bg-[#0C203B] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-amber-400 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Services</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30 mb-6">
              <Building className="h-4 w-4 text-amber-400" />
              <span className="text-sm text-slate-300">UK Address Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Registered UK
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                Business Address
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Professional UK business address services for company registration, privacy protection, and establishing your UK business presence.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                Complete Address Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Professional UK address services designed to support your business needs and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {addressFeatures.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{feature.description}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Service Options
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Choose the level of service that best fits your business requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {serviceTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                Why Choose Our Address Service?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Process Overview */}
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Choose Service</h4>
                <p className="text-slate-300 text-sm">Select the address service level that meets your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Instant Setup</h4>
                <p className="text-slate-300 text-sm">Immediate activation and confirmation of your new address.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Use Address</h4>
                <p className="text-slate-300 text-sm">Start using your new UK address for business purposes.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Ongoing Support</h4>
                <p className="text-slate-300 text-sm">Continued address service and mail management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to Get Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              UK Business Address?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8">
            Establish your UK business presence with a professional address service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-400 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-amber-500/50 text-amber-400 font-semibold rounded-xl hover:bg-amber-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKAddressPage;

