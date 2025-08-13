import { Users, TrendingUp, BarChart3, Target, Lightbulb, Shield, Clock, ArrowLeft, Award, BookOpen, CheckCircle2, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const VirtualCFOPage = () => {
  const cfoFeatures = [
    {
      icon: TrendingUp,
      title: 'Strategic Financial Planning',
      description: 'High-level financial strategy and planning guidance.',
      details: 'Comprehensive financial planning including cash flow forecasting, budget development, and strategic growth planning to drive your business forward.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: BarChart3,
      title: 'Management Reporting',
      description: 'Executive-level financial reporting and analysis.',
      details: 'Detailed management reports and KPI dashboards providing insights into business performance, profitability analysis, and operational efficiency.',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Business Growth Support',
      description: 'Strategic guidance for scaling and expansion.',
      details: 'Expert advice on business growth strategies, market expansion, investment decisions, and scaling operations efficiently.',
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      icon: Lightbulb,
      title: 'Strategic Advisory',
      description: 'High-level business and financial advice.',
      details: 'Strategic business advisory services including market analysis, competitive positioning, and strategic decision-making support.',
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Financial risk assessment and mitigation strategies.',
      details: 'Comprehensive risk management including financial risk assessment, internal controls implementation, and business continuity planning.',
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      icon: DollarSign,
      title: 'Investment & Funding',
      description: 'Support with investment and funding strategies.',
      details: 'Expert guidance on raising capital, investor relations, due diligence support, and optimizing capital structure for growth.',
      gradient: 'from-amber-500 to-orange-400'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Strategic Expertise',
      description: 'Access to CFO-level expertise without the full-time cost.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Strategic guidance to accelerate business growth.'
    },
    {
      icon: Clock,
      title: 'Flexible Engagement',
      description: 'Scalable service levels to match your needs.'
    },
    {
      icon: Award,
      title: 'Experienced Team',
      description: 'Senior finance professionals with proven track records.'
    }
  ];

  const serviceAreas = [
    {
      title: 'Financial Strategy',
      description: 'Long-term financial planning and strategic direction',
      details: ['Cash flow forecasting', 'Budget development', 'Financial modeling', 'Strategic planning']
    },
    {
      title: 'Performance Management',
      description: 'KPI development and performance monitoring',
      details: ['KPI dashboard creation', 'Performance analysis', 'Variance reporting', 'Operational efficiency']
    },
    {
      title: 'Growth & Expansion',
      description: 'Support for business scaling and market expansion',
      details: ['Market analysis', 'Expansion planning', 'Investment appraisal', 'Growth strategy']
    },
    {
      title: 'Risk & Compliance',
      description: 'Risk management and regulatory compliance',
      details: ['Risk assessment', 'Internal controls', 'Compliance monitoring', 'Governance framework']
    }
  ];

  const engagementTypes = [
    'Monthly Strategic Reviews',
    'Quarterly Business Planning',
    'Annual Strategic Planning',
    'Project-Based Consulting',
    'Interim CFO Services',
    'Board Meeting Support'
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
              <Users className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-slate-300">Virtual CFO Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Virtual CFO
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Strategic Services
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Strategic financial guidance and CFO-level support to drive business growth and optimize financial performance.
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
                Executive-Level Financial Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Strategic financial leadership and guidance to accelerate your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cfoFeatures.map((feature, index) => (
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

      {/* Service Areas */}
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Core Service Areas
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive CFO services across all areas of financial leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Flexible Engagement Options
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Choose the engagement model that best fits your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {engagementTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group hover:transform hover:scale-105 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{type}</h3>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Why Choose Virtual CFO?
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
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Approach</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Assessment</h4>
                <p className="text-slate-300 text-sm">Comprehensive business and financial assessment.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Strategy</h4>
                <p className="text-slate-300 text-sm">Development of strategic financial plan and roadmap.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Implementation</h4>
                <p className="text-slate-300 text-sm">Execution of strategic initiatives and monitoring.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Review</h4>
                <p className="text-slate-300 text-sm">Regular review and strategic adjustment.</p>
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
              Ready for Strategic
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Financial Leadership?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8">
            Get CFO-level strategic guidance to accelerate your business growth and optimize performance.
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

export default VirtualCFOPage;

