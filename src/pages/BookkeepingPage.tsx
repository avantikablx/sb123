import { BookOpen, TrendingUp, BarChart3, Calendar, DollarSign, CheckCircle2, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookkeepingPage = () => {
  const bookkeepingFeatures = [
    {
      icon: BookOpen,
      title: 'Full-Cycle Bookkeeping',
      description: 'End-to-end financial record management for accuracy and compliance.',
      gradient: 'from-amber-500 to-orange-400'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Financial Reporting',
      description: 'In-depth profit, loss, cash flow, and balance sheet analysis to guide business decisions.',
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      icon: BarChart3,
      title: 'Management Accounts',
      description: 'Monthly, quarterly, or custom reports tailored for leadership review.',
      gradient: 'from-orange-500 to-red-400'
    },
    {
      icon: Calendar,
      title: 'Budgeting and Forecasting Support',
      description: 'Data-driven insights to plan growth and manage resources effectively.',
      gradient: 'from-amber-500 to-yellow-400'
    },
    {
      icon: DollarSign,
      title: 'Cash Flow Management',
      description: 'Monitoring inflows/outflows to optimise liquidity.',
      gradient: 'from-orange-600 to-amber-500'
    },
    {
      icon: CheckCircle2,
      title: 'Year-End Preparation',
      description: 'Audit-ready books for smooth tax and compliance processes.',
      gradient: 'from-amber-600 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Industry-Specific Bookkeeping',
      description: 'Customised systems for your sector\'s unique requirements.',
      gradient: 'from-amber-500 to-orange-400'
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
              <BookOpen className="h-4 w-4 text-amber-400" />
              <span className="text-sm text-slate-300">Professional Bookkeeping</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Complete
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                Bookkeeping Solutions
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Professional bookkeeping services that provide accuracy, compliance, and strategic insights for your business growth.
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
                Comprehensive Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need for complete financial record management and strategic business insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {bookkeepingFeatures.map((feature, index) => (
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

      {/* Professional Image Section */}
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
                alt="Professional bookkeeping and financial management"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl border border-amber-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>Professional Bookkeeping Excellence</h3>
                  <p className="text-slate-200 text-lg max-w-2xl mx-auto drop-shadow-md" style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)'}}>
                    Accurate financial records and strategic insights to drive your business forward
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to Streamline Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Bookkeeping?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8">
            Get started with professional bookkeeping services that grow with your business.
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

export default BookkeepingPage;