import { Users, Calculator, Clock, FileCheck, Shield, TrendingUp, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PayrollPage = () => {
  const payrollFeatures = [
    {
      icon: Users,
      title: 'Complete PAYE Administration',
      description: 'End-to-end payroll processing, from gross pay calculations to net pay disbursement.',
      gradient: 'from-amber-500 to-yellow-400'
    },
    {
      icon: Calculator,
      title: 'Accurate Statutory Deductions',
      description: 'Precise computation of income tax, National Insurance, and other deductions.',
      gradient: 'from-yellow-500 to-amber-400'
    },
    {
      icon: Clock,
      title: 'Real-Time Information (RTI) Compliance',
      description: 'Timely submissions to HMRC to meet all PAYE reporting obligations.',
      gradient: 'from-amber-600 to-yellow-500'
    },
    {
      icon: TrendingUp,
      title: 'Employee Benefits & Allowances',
      description: 'Managing taxable benefits, pensions, bonuses, and reimbursements.',
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      icon: FileCheck,
      title: 'Payslip Generation & Distribution',
      description: 'Secure, compliant, and timely issuance of payslips.',
      gradient: 'from-amber-500 to-yellow-600'
    },
    {
      icon: Calendar,
      title: 'Year-End Payroll Filings',
      description: 'Preparation and submission of P60, P45, and other statutory forms.',
      gradient: 'from-yellow-500 to-amber-400'
    },
    {
      icon: Shield,
      title: 'Payroll Audit Readiness',
      description: 'Well-documented and reconciled payroll records for inspections or reviews.',
      gradient: 'from-amber-600 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Custom Payroll Solutions',
      description: 'Tailored structures for complex pay cycles, multi-location teams, and industry-specific needs.',
      gradient: 'from-yellow-400 to-amber-600'
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Back Navigation */}
      <section className="pt-12 pb-24 bg-[#0C203B] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-slate-300 hover:text-yellow-400 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Services</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-500/30 mb-6">
              <Users className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Payroll Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Payroll Management
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Complete PAYE payroll management services including Real Time Information submissions, compliance, and comprehensive reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Comprehensive Payroll Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From basic payroll processing to complex compliance requirements, we handle it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {payrollFeatures.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
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
              Ready to Streamline Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Payroll Management?
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8">
            Get professional payroll management that ensures compliance and saves you time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-400 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-yellow-500/50 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayrollPage;

