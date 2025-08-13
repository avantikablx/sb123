import { FileText, TrendingUp, CheckCircle2, Shield, BarChart3, Globe, Zap, BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const VATPage = () => {
  const vatFeatures = [
    {
      icon: FileText,
      title: 'Hassle-Free Registration & Advisory',
      description: 'Complete guidance and setup, ensuring you\'re registered correctly from day one.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: TrendingUp,
      title: 'Smart VAT Optimization',
      description: 'Ethical strategies to legally reduce VAT liability and maximize reclaim opportunities.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: CheckCircle2,
      title: 'Accurate & Transparent Calculations',
      description: 'Eliminating costly errors while keeping records audit-ready.',
      gradient: 'from-cyan-500 to-blue-400'
    },
    {
      icon: Shield,
      title: 'VAT Audit Preparation',
      description: 'Complete documentation and reconciliations for regulatory review.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: BarChart3,
      title: 'VAT Strategy & Optimization',
      description: 'Structuring transactions to maximize reclaim opportunities and improve cash flow.',
      gradient: 'from-cyan-600 to-blue-500'
    },
    {
      icon: Globe,
      title: 'Cross-Border VAT Expertise',
      description: 'Seamless handling of VAT for international trade and multiple jurisdictions.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Regulatory Updates Monitoring',
      description: 'Constantly tracking VAT law changes to keep you ahead.',
      gradient: 'from-cyan-500 to-blue-400'
    },
    {
      icon: BookOpen,
      title: 'Industry-Specific VAT Expertise',
      description: 'Tailored solutions for retail, manufacturing, e-commerce, and more.',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Back Navigation */}
      <section className="pt-12 pb-24 bg-[#0C203B] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Services</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30 mb-6">
              <FileText className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-slate-300">VAT Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Expert VAT
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Registration & Filing
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Professional VAT management services to optimize your tax position while ensuring full compliance with HMRC regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Comprehensive VAT Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From registration to ongoing compliance, we handle every aspect of your VAT requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {vatFeatures.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to Optimize Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              VAT Position?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8">
            Get expert VAT advice and management that saves you time and money.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-400 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VATPage;
