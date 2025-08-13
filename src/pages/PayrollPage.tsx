import { Users, Calculator, Clock, FileCheck, Shield, TrendingUp, Calendar, ArrowLeft, Target, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PayrollPage = () => {
  const payrollFeatures = [
    {
      icon: Users,
      title: 'Complete Payroll Management',
      description: 'End-to-end payroll processing for all your employees.',
      details: 'Comprehensive payroll management including salary calculations, deductions, bonuses, and ensuring all payments are processed accurately and on time.',
      gradient: 'from-amber-500 to-yellow-400'
    },
    {
      icon: Calculator,
      title: 'PAYE & National Insurance',
      description: 'Accurate calculation and processing of PAYE and National Insurance contributions.',
      details: 'Expert handling of PAYE tax calculations, National Insurance contributions for both employees and employers, ensuring compliance with HMRC requirements.',
      gradient: 'from-yellow-500 to-amber-400'
    },
    {
      icon: Clock,
      title: 'RTI Submissions',
      description: 'Real Time Information submissions to HMRC on schedule.',
      details: 'Timely submission of Full Payment Submissions (FPS) and Employer Payment Summaries (EPS) to meet HMRC Real Time Information requirements.',
      gradient: 'from-amber-600 to-yellow-500'
    },
    {
      icon: FileCheck,
      title: 'Payslips & P60s',
      description: 'Professional payslips and year-end documentation.',
      details: 'Detailed payslips for all employees and comprehensive P60 certificates at year-end, ensuring all documentation meets legal requirements.',
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensuring full compliance with employment and tax legislation.',
      details: 'Ongoing monitoring of legislative changes, minimum wage compliance, pension auto-enrollment, and all employment tax obligations.',
      gradient: 'from-amber-500 to-yellow-600'
    },
    {
      icon: TrendingUp,
      title: 'Payroll Reporting',
      description: 'Comprehensive payroll reports and analytics.',
      details: 'Detailed payroll reports including cost analysis, departmental breakdowns, and strategic insights to help manage your workforce costs effectively.',
      gradient: 'from-yellow-500 to-amber-400'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automated payroll processing frees up your valuable time.'
    },
    {
      icon: Target,
      title: 'Accurate Calculations',
      description: 'Eliminate errors with professional payroll management.'
    },
    {
      icon: Shield,
      title: 'Stay Compliant',
      description: 'Always up-to-date with the latest employment legislation.'
    },
    {
      icon: Award,
      title: 'Expert Support',
      description: 'Dedicated payroll specialists for all your queries.'
    }
  ];

  const payrollServices = [
    {
      title: 'Auto-Enrollment Pensions',
      description: 'Complete management of workplace pension auto-enrollment obligations'
    },
    {
      title: 'Statutory Payments',
      description: 'SSP, SMP, SPP, SAP and other statutory payment calculations'
    },
    {
      title: 'Student Loan Deductions',
      description: 'Accurate calculation and deduction of student loan repayments'
    },
    {
      title: 'Benefits in Kind',
      description: 'Proper handling and reporting of employee benefits and P11D submissions'
    },
    {
      title: 'Leavers & Starters',
      description: 'Smooth processing of new employees and departing staff'
    },
    {
      title: 'Holiday Pay Calculations',
      description: 'Accurate holiday pay calculations including complex scenarios'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Back Navigation */}
      <section className="py-24 bg-[#0C203B] relative overflow-hidden">
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
                <p className="text-slate-400 leading-relaxed mb-4">{feature.description}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-[#0C203B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Additional Payroll Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive coverage of all payroll-related requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {payrollServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
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
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Why Choose Our Payroll Services?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Process Overview */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Payroll Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Setup</h4>
                <p className="text-slate-300 text-sm">Employee setup and HMRC registration.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Processing</h4>
                <p className="text-slate-300 text-sm">Monthly payroll calculations and processing.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h4 className="text-lg font-bold text-white mb-2">RTI Filing</h4>
                <p className="text-slate-300 text-sm">Real Time Information submissions to HMRC.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Payments</h4>
                <p className="text-slate-300 text-sm">Tax and NI payment calculations and reminders.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  5
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Reporting</h4>
                <p className="text-slate-300 text-sm">Comprehensive payroll reports and year-end documentation.</p>
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

