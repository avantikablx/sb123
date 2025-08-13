import { Calculator, FileCheck, Calendar, TrendingUp, Shield, CheckCircle2, Clock, ArrowLeft, Target, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporationTaxPage = () => {
  const corporationTaxFeatures = [
    {
      icon: Calculator,
      title: 'Professional Tax Preparation',
      description: 'Expert preparation of your corporation tax returns with meticulous attention to detail.',
      details: 'Our qualified accountants ensure your corporation tax returns are prepared accurately, maximizing allowable deductions and ensuring compliance with HMRC requirements.',
      gradient: 'from-orange-500 to-red-400'
    },
    {
      icon: FileCheck,
      title: 'Compliance & Filing',
      description: 'Timely filing of CT600 returns to meet HMRC deadlines.',
      details: 'We handle the complete filing process, ensuring your returns are submitted on time and in the correct format, avoiding penalties and interest charges.',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Calendar,
      title: 'Tax Planning & Strategy',
      description: 'Strategic tax planning to minimize your corporation tax liability.',
      details: 'Proactive tax planning advice to optimize your tax position, including timing of transactions, capital allowances, and available reliefs.',
      gradient: 'from-orange-600 to-red-400'
    },
    {
      icon: TrendingUp,
      title: 'Financial Analysis',
      description: 'Comprehensive analysis of your company\'s financial position for tax purposes.',
      details: 'Detailed review of your accounts to identify tax-saving opportunities and ensure optimal use of available allowances and reliefs.',
      gradient: 'from-red-400 to-orange-400'
    },
    {
      icon: Shield,
      title: 'HMRC Correspondence',
      description: 'Professional handling of all HMRC communications and enquiries.',
      details: 'Expert representation in dealing with HMRC, including responding to queries, handling investigations, and managing compliance issues.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: CheckCircle2,
      title: 'Record Keeping Support',
      description: 'Guidance on maintaining proper records for corporation tax purposes.',
      details: 'Advice on record keeping requirements, digital record keeping, and ensuring your documentation meets HMRC standards.',
      gradient: 'from-red-500 to-orange-400'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Meet Deadlines',
      description: 'Never miss corporation tax filing deadlines with our proactive approach.'
    },
    {
      icon: Target,
      title: 'Minimize Tax',
      description: 'Maximize allowable deductions and minimize your tax liability legally.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Qualified corporation tax specialists with extensive experience.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Multiple review processes ensure accuracy and compliance.'
    }
  ];

  const taxTypes = [
    {
      title: 'Small Company Rates',
      description: 'Specialized handling for companies with profits under £250,000'
    },
    {
      title: 'Marginal Relief',
      description: 'Expert calculation of marginal relief for companies with profits between £250,000 and £1.5 million'
    },
    {
      title: 'Research & Development Credits',
      description: 'Maximizing R&D tax credits and innovation reliefs'
    },
    {
      title: 'Capital Allowances',
      description: 'Optimizing capital allowances including Annual Investment Allowance'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Back Navigation */}
      <section className="py-24 bg-[#0C203B] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/5"></div>
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
              <Calculator className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-slate-300">Corporation Tax Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Corporation Tax
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                Returns & Planning
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Professional corporation tax preparation, filing, and strategic planning to minimize your tax liability while ensuring full compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                Comprehensive Tax Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert corporation tax services designed to optimize your tax position and ensure compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {corporationTaxFeatures.map((feature, index) => (
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

      {/* Tax Specializations */}
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Tax Specializations
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized expertise across different aspects of corporation tax.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {taxTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-slate-400 leading-relaxed">{type.description}</p>
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
              <span className="bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Process Overview */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Corporation Tax Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Review & Analysis</h4>
                <p className="text-slate-300 text-sm">Comprehensive review of your company accounts and transactions.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Tax Computation</h4>
                <p className="text-slate-300 text-sm">Detailed corporation tax computation and optimization.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h4 className="text-lg font-bold text-white mb-2">CT600 Preparation</h4>
                <p className="text-slate-300 text-sm">Professional preparation of your CT600 return.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Filing & Payment</h4>
                <p className="text-slate-300 text-sm">Timely filing and payment arrangement guidance.</p>
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
              Ready to Optimize Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
              Corporation Tax?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8">
            Get expert corporation tax advice and preparation that saves you money and ensures compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-400 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
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

export default CorporationTaxPage;

