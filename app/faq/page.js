import React from "react";
import Link from "next/link";

function FAQ() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-[#5B20B6] mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-[#5B20B6]">
            What payment methods do you accept?
          </h2>
          <p className="text-gray-700">
            We accept all major credit cards, PayPal, and other secure payment
            methods.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#5B20B6]">
            How do I track my order?
          </h2>
          <p className="text-gray-700">
            You can track your order through the order history page in your
            account.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#5B20B6]">
            Can I return or exchange an item?
          </h2>
          <p className="text-gray-700">
            Yes, we offer returns and exchanges within 30 days of purchase.
            Please visit our return policy page for more details.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#5B20B6]">
            How can I contact customer support?
          </h2>
          <p className="text-gray-700">
            You can contact our customer support team via email at
            support@example.com or call us at +1 234 567 890.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/">
          <button className="px-4 py-2 bg-[#5B20B6] text-white rounded hover:bg-[#441583]">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FAQ;
