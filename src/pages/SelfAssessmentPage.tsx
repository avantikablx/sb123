import { FileText, Calculator, Calendar, TrendingUp, Shield, CheckCircle2, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SelfAssessmentPage = () => {
  const selfAssessmentFeatures = [
    {
      icon: FileText,
      title: 'End-to-End Return Management',
      description: 'Complete preparation and submission of your self-assessment tax return with absolute accuracy.',
      gradient: 'from-orange-600 to-amber-500'
    },
    {
      icon: Calculator,
      title: 'Income and Expense Analysis',
      description: 'Detailed review of all income sources and allowable expenses to ensure correct reporting.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Tax Optimisation Strategies',
      description: 'Expert guidance to legitimately reduce liabilities through reliefs, allowances, and deductions.',
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      icon: Calendar,
      title: 'Complex Income Handling',
      description: 'Specialised support for investments, property income, foreign earnings, dividends, and more.',
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      icon: Clock,
      title: 'Deadline and Penalty Protection',
      description: 'Proactive scheduling to avoid late filing charges or interest.',
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      icon: Shield,
      title: 'HMRC Liaison',
      description: 'Direct communication with HMRC on queries, amendments, or compliance checks.',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: CheckCircle2,
      title: 'Audit-Ready Documentation',
      description: 'Fully organised records to support all figures in the return.',
      gradient: 'from-orange-500 to-amber-400'
    },
    {
      icon: FileText,
      title: 'Tailored Solutions',
      description: 'Filing strategies customised for business owners, contractors, high-net-worth individuals, and freelancers.',
      gradient: 'from-amber-600 to-orange-400'
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
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-24 bg-slate-900">
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

