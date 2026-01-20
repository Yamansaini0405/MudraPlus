import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Shield, Loader2, AlertCircle, Lock, Zap, Mail, Receipt, CreditCard, ShieldCheck, ArrowRight } from 'lucide-react';
import PaymentNavbar from '../Components/PaymentNav';

function Payment() {
  const { orderId } = useParams();
  const [searchParams] = useSearchParams();
  const loanId = searchParams.get('loanId');
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [key, setKey] = useState('');
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
        amount: orderDetails.amount / 100,
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
      <>
        <PaymentNavbar />
        <div className='min-h-screen'>
          <div className="pt-28 flex items-center justify-center ">
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-gray-200 border-t-primary animate-spin" style={{ borderTopColor: primaryColor }}></div>
                <Loader2 className="w-16 h-16 absolute top-2 left-2 text-primary animate-spin" style={{ color: primaryColor }} />
              </div>
            </div>
          </div>
          <div className='flex-col flex items-center justify-center mt-10'>
            <p className="mt-6 text-gray-600 font-medium text-lg">Loading payment details...</p>
            <p className="mt-2 text-gray-400 text-sm">Please wait while we prepare your payment</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <PaymentNavbar />
        <div className="mt-20 flex items-center justify-center  px-4">
          <div className=" w-full max-w-md rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">

            <div className="text-center">
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                <AlertCircle className="h-8 w-8 text-red-500" />
              </div>

              {/* Title */}
              <h2
                className="text-xl sm:text-2xl font-semibold mb-2"
                style={{ color: primaryColor }}
              >
                No Payment Found
              </h2>

              {/* Message */}
              <p className="text-sm sm:text-base text-gray-500 mb-6">
                We couldn't find any payment details for the provided order ID. Please check the link or contact AGENT for assistance.
              </p>

              {/* CTA */}
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-white transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: primaryColor }}
              >
                Go back home
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </>
    );
  }

  // Success screen for paid status
  if (orderDetails?.status === 'paid') {
    return (
      <>
        <PaymentNavbar />
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">

            {/* Success Header */}
            <div className="text-center mb-10">

            </div>

            {/* Receipt Section */}
            <div className="flex gap-8 max-w-5xl mx-auto ">
              <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 w-full">

                <div
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#e6f4ea" }}
                >
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
              

                {/* Receipt Header */}
                <div className="flex items-center justify-between mb-6 tce">
                  <div>
                    <h2
                      className="text-xl font-semibold"
                      style={{ color: primaryColor }}
                    >
                      Payment Receipt
                    </h2>
                    <p className="text-sm text-gray-500">
                      Transaction completed successfully
                    </p>
                  </div>

                  <div
                    className="px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "#e6f4ea", color: "#2e7d32" }}
                  >
                    ● Paid
                  </div>
                </div>

                {/* Loan + Amount */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-5 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">Loan Number</p>
                    <p
                      className="text-xl font-semibold"
                      style={{ color: primaryColor }}
                    >
                      {orderDetails?.receipt}
                    </p>
                  </div>

                  <div
                    className="p-5 rounded-xl border"
                    style={{ borderColor: primaryColor }}
                  >
                    <p className="text-sm text-gray-500 mb-1">Amount Paid</p>
                    <p
                      className="text-2xl font-semibold"
                      style={{ color: primaryColor }}
                    >
                      ₹{(orderDetails?.amount / 100).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500 mb-1">Currency</p>
                    <p className="font-medium text-gray-800">
                      {orderDetails?.currency?.toUpperCase()}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50">
                    <p className="text-xs text-gray-500 mb-1">Payment Method</p>
                    <p className="font-medium text-gray-800">Razorpay</p>
                  </div>
                </div>

                {/* Transaction Summary */}
                <div className="pt-5 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">
                    Transaction Summary
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Loan Repayment</span>
                      <span className="font-medium">
                        ₹{(orderDetails?.amount / 100).toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Processing Fee</span>
                      <span className="font-medium text-green-600">₹0.00</span>
                    </div>

                    <div className="flex justify-between pt-4 border-t border-gray-200">
                      <span
                        className="font-semibold"
                        style={{ color: primaryColor }}
                      >
                        Total Amount
                      </span>
                      <span
                        className="text-lg font-semibold"
                        style={{ color: primaryColor }}
                      >
                        ₹{(orderDetails?.amount / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Payment screen for created status
  return (
    <>
      <PaymentNavbar />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-center ">
            {/* Main Payment Card */}
            <div className="w-full ">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">

                <h1
                  className="text-2xl md:text-2xl lg:text-4xl font-bold mb-3 text-center mb-10"
                  style={{ color: primaryColor }}
                >
                  Complete Your Loan Repayment
                </h1>

                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2
                      className="text-xl font-semibold"
                      style={{ color: primaryColor }}
                    >
                      Payment Details
                    </h2>
                    <p className="text-sm text-gray-500">
                      Review and confirm payment
                    </p>
                  </div>

                  <div
                    className="px-3 py-1.5 rounded-full text-sm font-medium border"
                    style={{ color: primaryColor, borderColor: primaryColor }}
                  >
                    PENDING
                  </div>
                </div>

                {/* Loan Ref */}
                <div
                  className="p-5 rounded-xl mb-6"
                  style={{ backgroundColor: "#f1f5f9" }}
                >
                  <p className="text-xs text-gray-500 mb-1">
                    Loan Reference Number
                  </p>
                  <p className="text-lg font-semibold" style={{ color: primaryColor }}>
                    {orderDetails?.receipt}
                  </p>
                </div>

                {/* Amounts */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-5 rounded-xl bg-slate-50 border">
                    <p className="text-xs text-gray-500 mb-1">Total Amount</p>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: primaryColor }}
                    >
                      ₹{(orderDetails?.amount / 100).toFixed(2)}
                    </p>
                  </div>

                </div>

                {/* Summary */}
                <div className="mb-6">
                  <h3
                    className="text-sm font-semibold mb-3"
                    style={{ color: primaryColor }}
                  >
                    Payment Summary
                  </h3>

                  <div className="divide-y text-sm">
                    <Row label="Principal Amount" value={`₹${((orderDetails?.amount / 100)).toFixed(2)}`} />
                    <Row label="Processing Fee" value="₹0.00" valueClass="text-green-600" />

                    <div className="flex justify-between pt-4 font-semibold">
                      <span style={{ color: primaryColor }}>Total Payable</span>
                      <span style={{ color: primaryColor }}>
                        ₹{(orderDetails?.amount / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={initiatePayment}
                  disabled={processing}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-white transition hover:opacity-90 disabled:opacity-70"
                  style={{ backgroundColor: secondaryColor }}
                >
                  {processing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Pay Securely ₹{(orderDetails?.amount / 100).toFixed(2)}
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-400 mt-3">
                  Payments are encrypted and processed securely
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}


const Row = ({ label, value, valueClass = "" }) => (
  <div className="flex justify-between py-2">
    <span className="text-gray-600">{label}</span>
    <span className={`font-medium ${valueClass}`}>{value}</span>
  </div>
);

export default Payment;