
import { FileText, Shield, Mail, Phone } from "lucide-react";

const Terms = () => {

  return (
    <div className="min-h-screen bg-slate-900">


      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Website's
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                 Terms & Conditions
              </span>
            </h1>
          </div>

          {/* Terms of Conditions */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Terms of Conditions</h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 mb-6">
                Welcome to StraightBooks ("we", "our", or "us"). By accessing or using our website and services, you agree to be bound by the following terms and conditions.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Company Information</h3>
                  <div className="text-slate-300 space-y-2">
                    <p><strong>Business Name:</strong> StraightBooks</p>
                    <p><strong>Registered Address:</strong> 9 Mornington street</p>
                    <p><strong>Company Number:</strong> +44 7398 147870</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Description of Services</h3>
                  <p className="text-slate-300">
                    We offer accountancy services including bookkeeping, VAT returns, payroll, self-assessment, and tax compliance for UK-based small businesses.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Client Responsibilities</h3>
                  <p className="text-slate-300">
                    Clients must provide complete and accurate information in a timely manner, approve filings when required, and ensure timely payment of fees.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Our Responsibilities</h3>
                  <p className="text-slate-300">
                    We commit to providing professional and compliant services, maintaining confidentiality, and securing client data. All services are reviewed by UK-qualified professionals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Payment Terms</h3>
                  <p className="text-slate-300">
                    Invoices are issued monthly or annually. Payment is due within 14 days. Late payments may incur interest or service suspension.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Termination of Services</h3>
                  <p className="text-slate-300">
                    Either party may terminate the agreement with 30 days' written notice. Final charges will apply for services rendered to date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h3>
                  <p className="text-slate-300">
                    We are not liable for indirect or consequential loss arising from the use of our services, or for errors based on client-provided data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8. Governing Law</h3>
                  <p className="text-slate-300">
                    These terms are governed by the laws of England and Wales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Policies?</h3>
              <p className="text-slate-400 mb-6">
                Contact us if you have any questions about our terms or privacy policy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+447398147870"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-600 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +44 7398 147870
                </a>
                <a 
                  href="mailto:Contact@straightbooks.co.uk"
                  className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact@straightbooks.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;