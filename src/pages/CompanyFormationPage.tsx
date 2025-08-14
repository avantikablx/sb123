import { Building, FileCheck, Shield, Users, TrendingUp, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyFormationPage = () => {
  const formationFeatures = [
    {
      icon: Building,
      title: 'Complete Company Incorporation',
      description: 'End-to-end setup with Companies House, including name registration and legal documentation.',
      gradient: 'from-amber-600 to-orange-600'
    },
    {
      icon: Users,
      title: 'Tailored Business Structuring',
      description: 'Expert advice on shareholding, directorship, and corporate structure to suit your goals.',
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      icon: FileCheck,
      title: 'Articles of Association and Shareholder Agreements',
      description: 'Drafting and filing customised legal documents.',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Building,
      title: 'Registered Office and Company Secretary Services',
      description: 'Professional address provision and statutory record maintenance.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: Calendar,
      title: 'Ongoing Statutory Compliance',
      description: 'Timely filing of confirmation statements, annual accounts, and other required submissions.',
      gradient: 'from-amber-600 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Corporate Governance Advisory',
      description: 'Guidance on directors\' duties, shareholder rights, and company law compliance.',
      gradient: 'from-orange-600 to-amber-500'
    },
    {
      icon: FileCheck,
      title: 'Record-Keeping Systems',
      description: 'Setting up secure registers for members, charges, and statutory books.',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Regulatory Updates and Alerts',
      description: 'Proactive monitoring of legislative changes affecting your business.',
      gradient: 'from-orange-500 to-amber-600'
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Back Navigation */}
      <section className="pt-12 pb-24 bg-[#0C203B] relative overflow-hidden">
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

