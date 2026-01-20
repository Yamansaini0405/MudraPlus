import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Shield, Loader2, AlertCircle, Lock, Zap, Mail, Receipt, CreditCard, ShieldCheck, ArrowRight } from 'lucide-react';

function Payment() {
  const { orderId } = useParams();
  const [searchParams] = useSearchParams();
  const loanId = searchParams.get('loanId');
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [key , setKey] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const primaryColor = "#173f70";
  const secondaryColor = "#e6612d";

  // Fetch order details
  const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/transaction/orders/${orderId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }
        
        const data = await response.json();
        setOrderDetails(data.order);
        setKey(data.rzpKey);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  useEffect(() => {
    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  // Handle payment success
  const handlePaymentSuccess = async (response) => {
    setProcessing(true);
    try {
      const paymentData = {
        loanId: loanId,
        amount: orderDetails.amount/100,
        rpzOrderId: response.razorpay_order_id,
        rpzPaymentId: response.razorpay_payment_id,
        rpzSignature: response.razorpay_signature,
        transactionType: "repayment"
      };

      const res = await fetch('http://localhost:3000/api/v1/transaction/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!res.ok) {
        throw new Error('Payment verification failed');
      }

      const result = await res.json();
      
      // Refresh order details to show paid status
      const updatedResponse = await fetch(`http://localhost:3000/api/v1/transaction/orders/${orderId}`);
      if (updatedResponse.ok) {
        await updatedResponse.json();
        fetchOrderDetails();
      }
      
      setProcessing(false);
    } catch (err) {
      alert('Payment verification failed: ' + err.message);
      setProcessing(false);
    }
  };

  // Initialize Razorpay payment
  const initiatePayment = () => {
    if (!orderDetails || !window.Razorpay) {
      alert('Razorpay SDK not loaded. Please refresh the page.');
      return;
    }

    setProcessing(true);

    const options = {
      key: key,
      amount: orderDetails.amount,
      currency: orderDetails.currency,
      name: 'MudraPlus',
      description: 'Loan Repayment',
      order_id: orderDetails.id,
      handler: function (response) {
        handlePaymentSuccess(response);
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        loan_number: orderDetails.receipt,
      },
      theme: {
        color: secondaryColor,
      },
      modal: {
        ondismiss: function () {
          setProcessing(false);
        },
      },
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error('Error initializing Razorpay:', err);
      alert('Failed to initialize payment. Please try again.');
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-gray-200 border-t-primary animate-spin" style={{ borderTopColor: primaryColor }}></div>
            <Loader2 className="w-16 h-16 absolute top-2 left-2 text-primary animate-spin" style={{ color: primaryColor }} />
          </div>
          <p className="mt-6 text-gray-600 font-medium text-lg">Loading payment details...</p>
          <p className="mt-2 text-gray-400 text-sm">Please wait while we prepare your payment</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full border border-gray-100">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-red-100 rounded-full animate-pulse"></div>
                <AlertCircle className="w-10 h-10 text-red-600 absolute top-3 left-3" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>Oops! Something went wrong</h2>
            <p className="text-gray-500 mb-8">{error}</p>
            <button
              onClick={() => navigate('/')}
              className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: secondaryColor }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Go Back Home
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Success screen for paid status
  if (orderDetails?.status === 'paid') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 animate-pulse"></div>
                <CheckCircle2 className="w-24 h-24 text-green-600 absolute top-4 left-4" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ color: primaryColor }}>
              Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Successful</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Your loan repayment has been processed successfully. A confirmation email has been sent to your registered email address.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Payment Receipt Card */}
            <div className="md:col-span-2 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: primaryColor }}>Payment Receipt</h2>
                  <p className="text-gray-500">Transaction completed successfully</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-green-50">
                  <span className="text-green-600 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    PAID
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                    <p className="text-gray-500 text-sm mb-2">Loan Number</p>
                    <p className="text-3xl font-bold" style={{ color: primaryColor }}>{orderDetails.receipt}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                    <p className="text-gray-500 text-sm mb-2">Amount Paid</p>
                    <p className="text-4xl font-bold text-green-700">₹{(orderDetails.amount / 100).toFixed(2)}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50">
                    <p className="text-gray-500 text-sm mb-1">Currency</p>
                    <p className="font-bold text-gray-800">{orderDetails.currency.toUpperCase()}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50">
                    <p className="text-gray-500 text-sm mb-1">Payment Method</p>
                    <p className="font-bold text-gray-800">Razorpay</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm mb-4">Transaction Summary</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Loan Repayment</span>
                      <span className="font-bold">₹{(orderDetails.amount / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Processing Fee</span>
                      <span className="font-bold text-green-600">₹0.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="text-lg font-bold" style={{ color: primaryColor }}>Total Amount</span>
                      <span className="text-2xl font-bold" style={{ color: primaryColor }}>₹{(orderDetails.amount / 100).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Sidebar */}
            <div className="space-y-6">
              <FeatureCard
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Secure Payment"
                description="Bank-level 256-bit encryption"
                color="blue"
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Instant Processing"
                description="Immediate transaction confirmation"
                color="green"
              />
              <FeatureCard
                icon={<Mail className="w-6 h-6" />}
                title="Email Receipt"
                description="Digital receipt sent to your email"
                color="orange"
              />
              <FeatureCard
                icon={<Receipt className="w-6 h-6" />}
                title="Download Receipt"
                description="Available for 7 days"
                color="purple"
              />

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-gray-300 text-sm mb-4">Contact our support team for assistance</p>
                <button className="w-full py-3 rounded-xl font-semibold bg-white text-gray-900 hover:bg-gray-100 transition">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/')}
              className="group relative overflow-hidden px-10 py-5 rounded-2xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: primaryColor }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Back to Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Payment screen for created status
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg mb-6">
            <CreditCard className="w-10 h-10" style={{ color: primaryColor }} />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ color: primaryColor }}>
            Complete Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Loan Repayment</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Secure payment processing powered by Razorpay. Your financial security is our priority.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Payment Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold" style={{ color: primaryColor }}>Payment Details</h2>
                    <p className="text-gray-500">Review and complete your payment</p>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-yellow-50">
                    <span className="text-yellow-700 font-semibold flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      PENDING
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white mb-8">
                  <p className="text-gray-300 text-sm mb-2">Loan Reference Number</p>
                  <p className="text-3xl font-bold">{orderDetails?.receipt}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                    <p className="text-gray-500 text-sm mb-2">Total Amount</p>
                    <p className="text-4xl font-bold" style={{ color: primaryColor }}>₹{(orderDetails?.amount / 100).toFixed(2)}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50">
                    <p className="text-gray-500 text-sm mb-2">Amount Due</p>
                    <p className="text-4xl font-bold" style={{ color: secondaryColor }}>₹{(orderDetails?.amount_due / 100).toFixed(2)}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4" style={{ color: primaryColor }}>Payment Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Principal Amount</span>
                      <span className="font-bold">₹{((orderDetails?.amount / 100) * 0.85).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Interest</span>
                      <span className="font-bold">₹{((orderDetails?.amount / 100) * 0.10).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Processing Fee</span>
                      <span className="font-bold text-green-600">₹0.00</span>
                    </div>
                    <div className="flex justify-between py-4">
                      <span className="text-lg font-bold" style={{ color: primaryColor }}>Total Payable</span>
                      <span className="text-2xl font-bold" style={{ color: primaryColor }}>₹{(orderDetails?.amount / 100).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={initiatePayment}
                  disabled={processing}
                  className="group relative w-full overflow-hidden py-5 rounded-2xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: secondaryColor }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {processing ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        Pay Securely ₹{(orderDetails?.amount / 100).toFixed(2)}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>

                <p className="text-center text-gray-400 text-sm mt-4">
                  By proceeding, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;