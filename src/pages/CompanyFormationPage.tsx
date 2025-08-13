import { Building, FileCheck, Shield, Users, TrendingUp, Clock, Calendar, ArrowLeft, Target, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyFormationPage = () => {
  const formationFeatures = [
    {
      icon: Building,
      title: 'Company Registration',
      description: 'Complete company registration with Companies House.',
      details: 'Full service company registration including name approval, Articles of Association preparation, and submission to Companies House with guaranteed incorporation.',
      gradient: 'from-amber-600 to-orange-600'
    },
    {
      icon: FileCheck,
      title: 'Legal Documentation',
      description: 'All required legal documents and certificates.',
      details: 'Comprehensive preparation of all incorporation documents, Articles of Association, Memorandum, and obtaining your Certificate of Incorporation.',
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      icon: Shield,
      title: 'Compliance Setup',
      description: 'Ongoing compliance framework establishment.',
      details: 'Setting up all necessary compliance systems including statutory registers, filing calendars, and ensuring your company meets all legal obligations.',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Director & Shareholder Setup',
      description: 'Proper appointment of directors and shareholders.',
      details: 'Professional handling of director appointments, share allocations, and ensuring all statutory requirements are met for company officers.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: TrendingUp,
      title: 'Business Banking Support',
      description: 'Assistance with business bank account opening.',
      details: 'Guidance and support in opening business bank accounts, including preparation of required documentation and introductions to preferred banking partners.',
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      icon: Clock,
      title: 'Fast-Track Service',
      description: 'Same-day and next-day incorporation options.',
      details: 'Expedited incorporation services available for urgent requirements, including same-day incorporation for immediate business needs.',
      gradient: 'from-orange-600 to-amber-500'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Professional Setup',
      description: 'Expert guidance through the entire incorporation process.'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast incorporation with same-day options available.'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'All systems set up for ongoing legal compliance.'
    },
    {
      icon: Award,
      title: 'Ongoing Support',
      description: 'Continued support for all your company needs.'
    }
  ];

  const companyTypes = [
    {
      title: 'Private Limited Company',
      description: 'Standard UK limited company structure for most businesses'
    },
    {
      title: 'Limited by Guarantee',
      description: 'Suitable for non-profit organizations and social enterprises'
    },
    {
      title: 'Community Interest Company',
      description: 'Special purpose vehicles for community benefit'
    },
    {
      title: 'Public Limited Company',
      description: 'For larger companies planning to go public'
    }
  ];

  const ongoingServices = [
    'Annual Return Filing',
    'Confirmation Statement Submission',
    'Statutory Register Maintenance',
    'Director Appointment/Resignation',
    'Share Transfer Processing',
    'Registered Office Services',
    'Company Secretarial Support',
    'Dormant Company Accounts'
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Back Navigation */}
      <section className="py-24 bg-[#0C203B] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-orange-400 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Services</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-500/30 mb-6">
              <Building className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-slate-300">Company Formation Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Company Formation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                & Compliance
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Complete company formation services and ongoing compliance management to get your business up and running quickly and legally.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Complete Formation Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to incorporate your company and ensure ongoing compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {formationFeatures.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
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

      {/* Company Types */}
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Company Types We Form
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Different company structures for different business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {companyTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-slate-400 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Services */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Ongoing Compliance Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Continued support to keep your company compliant and in good standing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {ongoingServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{service}</h3>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Process Overview */}
          <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Formation Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Consultation</h4>
                <p className="text-slate-300 text-sm">Initial consultation to understand your business needs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Documentation</h4>
                <p className="text-slate-300 text-sm">Preparation of all required incorporation documents.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Incorporation</h4>
                <p className="text-slate-300 text-sm">Submission to Companies House and incorporation.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Ongoing Support</h4>
                <p className="text-slate-300 text-sm">Continued compliance and secretarial services.</p>
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
              Ready to Incorporate
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Your Company?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8">
            Get professional company formation services with ongoing compliance support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-orange-500/50 text-orange-400 font-semibold rounded-xl hover:bg-orange-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyFormationPage;

