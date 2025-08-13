import { CreditCard, Building, Shield, FileCheck, Users, Clock, CheckCircle2, ArrowLeft, Target, Award, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BankAccountPage = () => {
  const bankAccountFeatures = [
    {
      icon: CreditCard,
      title: 'Business Account Setup',
      description: 'Complete assistance with business bank account opening.',
      details: 'Full support throughout the bank account opening process, including application preparation, documentation, and liaison with banking partners.',
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      icon: Building,
      title: 'Bank Selection Advice',
      description: 'Expert guidance on choosing the right banking partner.',
      details: 'Comprehensive comparison of banking options including fees, services, and features to find the best fit for your business needs.',
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      icon: FileCheck,
      title: 'Documentation Support',
      description: 'Professional preparation of all required documents.',
      details: 'Complete preparation and review of all banking documentation ensuring applications are accurate and comprehensive.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Compliance Assistance',
      description: 'Ensuring all regulatory requirements are met.',
      details: 'Expert guidance on anti-money laundering requirements, know your customer procedures, and regulatory compliance.',
      gradient: 'from-orange-600 to-amber-500'
    },
    {
      icon: Users,
      title: 'Bank Introductions',
      description: 'Direct introductions to our preferred banking partners.',
      details: 'Leveraging our established relationships with major UK banks to facilitate smooth account opening processes.',
      gradient: 'from-amber-600 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Fast-Track Service',
      description: 'Expedited account opening where possible.',
      details: 'Accelerated processing through our banking relationships and comprehensive preparation to minimize delays.',
      gradient: 'from-orange-500 to-amber-500'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Expert Guidance',
      description: 'Professional advice on banking options and requirements.'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Streamlined process with minimal hassle and delays.'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'Ensure all regulatory requirements are properly met.'
    },
    {
      icon: Award,
      title: 'Banking Relationships',
      description: 'Access to established banking partnerships.'
    }
  ];

  const bankingPartners = [
    {
      title: 'High Street Banks',
      description: 'Traditional banking with established networks',
      features: ['Branch access', 'Established reputation', 'Wide ATM network', 'Comprehensive services']
    },
    {
      title: 'Digital Banks',
      description: 'Modern online banking solutions',
      features: ['Lower fees', 'Digital-first approach', 'Rapid setup', 'Mobile banking']
    },
    {
      title: 'Specialist Business Banks',
      description: 'Banks focused on business customers',
      features: ['Business expertise', 'Tailored services', 'Industry knowledge', 'Relationship management']
    }
  ];

  const accountTypes = [
    'Business Current Accounts',
    'Multi-Currency Accounts',
    'Savings & Deposit Accounts',
    'Credit Facilities',
    'Merchant Services',
    'Corporate Credit Cards'
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
              <CreditCard className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-slate-300">Banking Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Business Bank
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Account Setup
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Professional assistance with business bank account opening, including bank selection, documentation preparation, and regulatory compliance.
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
                Complete Banking Support
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert assistance throughout the entire business banking setup process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {bankAccountFeatures.map((feature, index) => (
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

      {/* Banking Partners */}
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Banking Options
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We work with a wide range of banking partners to find the best solution for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {bankingPartners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">{partner.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{partner.description}</p>
                <ul className="space-y-2">
                  {partner.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Account Types & Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Assistance with various types of business banking products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {accountTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{type}</h3>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Why Choose Our Service?
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
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Banking Setup Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Consultation</h4>
                <p className="text-slate-300 text-sm">Understand your banking needs and requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Bank Selection</h4>
                <p className="text-slate-300 text-sm">Recommend the best banking options for your business.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Documentation</h4>
                <p className="text-slate-300 text-sm">Prepare all required documents and applications.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Application</h4>
                <p className="text-slate-300 text-sm">Submit applications and manage the approval process.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  5
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Setup</h4>
                <p className="text-slate-300 text-sm">Complete account setup and ongoing support.</p>
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
              Ready to Open Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Business Bank Account?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8">
            Get expert assistance with business bank account setup and find the perfect banking partner for your business.
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

export default BankAccountPage;

