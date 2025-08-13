import { FileText, Calculator, Calendar, TrendingUp, Shield, CheckCircle2, Clock, ArrowLeft, Target, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const SelfAssessmentPage = () => {
  const selfAssessmentFeatures = [
    {
      icon: FileText,
      title: 'Complete Tax Return Preparation',
      description: 'Professional preparation of your self-assessment tax return.',
      details: 'Comprehensive preparation of SA100 returns including all necessary supplementary pages, ensuring accurate reporting of all income sources and allowable deductions.',
      gradient: 'from-orange-600 to-amber-500'
    },
    {
      icon: Calculator,
      title: 'Tax Calculation & Planning',
      description: 'Accurate calculation of your tax liability and strategic planning.',
      details: 'Detailed tax calculations including income tax, National Insurance, and capital gains tax, with strategic advice to minimize your overall tax burden.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: Calendar,
      title: 'Deadline Management',
      description: 'Never miss important self-assessment deadlines.',
      details: 'Proactive deadline management ensuring your return is filed by 31st January, with reminders for payment on account and balancing payments.',
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      icon: TrendingUp,
      title: 'Capital Gains Tax',
      description: 'Expert handling of capital gains and losses.',
      details: 'Specialized advice on capital gains tax calculations, annual exemptions, reliefs available, and strategic timing of disposals.',
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      icon: Shield,
      title: 'HMRC Correspondence',
      description: 'Professional representation for HMRC enquiries.',
      details: 'Expert handling of HMRC correspondence, enquiries, and investigations, providing professional representation throughout the process.',
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      icon: CheckCircle2,
      title: 'Record Keeping Advice',
      description: 'Guidance on maintaining proper tax records.',
      details: 'Comprehensive advice on record keeping requirements, digital records, and ensuring you have the documentation needed for your tax return.',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Meet Deadlines',
      description: 'Never face penalties with our proactive deadline management.'
    },
    {
      icon: Target,
      title: 'Maximize Deductions',
      description: 'Ensure you claim all allowable expenses and reliefs.'
    },
    {
      icon: Users,
      title: 'Expert Advice',
      description: 'Qualified tax advisors with extensive experience.'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Professional service with attention to detail.'
    }
  ];

  const clientTypes = [
    {
      title: 'Company Directors',
      description: 'Specialized returns for directors with complex income structures'
    },
    {
      title: 'Sole Traders & Freelancers',
      description: 'Business income reporting and expense optimization'
    },
    {
      title: 'Property Investors',
      description: 'Rental income reporting and property-related deductions'
    },
    {
      title: 'Investment Income',
      description: 'Dividends, interest, and investment gains reporting'
    },
    {
      title: 'Multiple Income Sources',
      description: 'Complex returns with various income streams'
    },
    {
      title: 'High Net Worth Individuals',
      description: 'Sophisticated tax planning for substantial assets'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Back Navigation */}
      <section className="py-24 bg-[#0C203B] relative overflow-hidden">
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
              <FileText className="h-4 w-4 text-amber-400" />
              <span className="text-sm text-slate-300">Self Assessment Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Self Assessment
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                Filing & Planning
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Professional self-assessment preparation and filing services for directors, freelancers, and individuals with complex tax affairs.
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
                Comprehensive Tax Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert self-assessment services designed to maximize your tax efficiency and ensure compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {selfAssessmentFeatures.map((feature, index) => (
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

      {/* Client Types */}
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Who We Help
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized self-assessment services for different client types and situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {clientTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <h3 className="text-lg font-bold text-white mb-3">{type.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{type.description}</p>
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
                Why Choose Us?
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
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Self Assessment Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Information Gathering</h4>
                <p className="text-slate-300 text-sm">Collect all necessary documents and income information.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Return Preparation</h4>
                <p className="text-slate-300 text-sm">Professional preparation and review of your tax return.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Filing & Submission</h4>
                <p className="text-slate-300 text-sm">Timely electronic filing with HMRC before deadlines.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Ongoing Support</h4>
                <p className="text-slate-300 text-sm">Payment planning and ongoing tax advice.</p>
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
              Ready to File Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Self Assessment?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8">
            Get professional self-assessment preparation that maximizes your tax efficiency and meets all deadlines.
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

export default SelfAssessmentPage;

