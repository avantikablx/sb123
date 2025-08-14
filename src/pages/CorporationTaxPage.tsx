import { Calculator, FileCheck, Calendar, TrendingUp, Shield, CheckCircle2, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporationTaxPage = () => {
  const corporationTaxFeatures = [
    {
      icon: Calculator,
      title: 'End-to-End Compliance',
      description: 'Complete preparation and submission of corporation tax returns in line with statutory requirements.',
      gradient: 'from-orange-500 to-red-400'
    },
    {
      icon: FileCheck,
      title: 'Accurate Tax Computations',
      description: 'Precise calculation of taxable profits, allowances, and reliefs to ensure full compliance.',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Calendar,
      title: 'Tax Planning and Optimisation',
      description: 'Strategic advice to minimise liabilities and maximise available deductions.',
      gradient: 'from-orange-600 to-red-400'
    },
    {
      icon: TrendingUp,
      title: 'HMRC/Authority Liaison',
      description: 'Direct communication and representation with tax authorities on your behalf.',
      gradient: 'from-red-400 to-orange-400'
    },
    {
      icon: Shield,
      title: 'Year-End Review and Adjustments',
      description: 'Ensuring accounts and returns align with final year-end figures.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: CheckCircle2,
      title: 'Industry-Specific Tax Expertise',
      description: 'Tailored corporate tax solutions for your sector.',
      gradient: 'from-red-500 to-orange-400'
    },
    {
      icon: FileCheck,
      title: 'Audit-Ready Documentation',
      description: 'Well-organized records to streamline audits or inspections.',
      gradient: 'from-orange-600 to-red-500'
    },
    {
      icon: Clock,
      title: 'Proactive Deadline Management',
      description: 'Tracking key dates to avoid late filing penalties and interest charges.',
      gradient: 'from-red-400 to-orange-500'
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Back Navigation */}
      <section className="pt-12 pb-24 bg-[#0C203B] relative overflow-hidden">
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

