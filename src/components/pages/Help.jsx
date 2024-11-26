import React from 'react';

const Help = () => {
  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-left w-full">
        <h1 className="text-xl font-medium">Help & Support</h1>
        <p className="mt-4 text-gray-600">Find answers to common questions or contact us for further support.</p>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-800">Frequently Asked Questions</h2>
          <div className="mt-4">
            <div className="border-b pb-4">
              <h3 className="text-md font-semibold text-gray-800">How do I reset my password?</h3>
              <p className="text-gray-600 mt-2">To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your email.</p>
            </div>
            <div className="border-b pb-4 mt-4">
              <h3 className="text-md font-semibold text-gray-800">How do I change my account settings?</h3>
              <p className="text-gray-600 mt-2">Go to the 'Settings' page in your profile to edit your account information, including email, password, and preferences.</p>
            </div>
            <div className="border-b pb-4 mt-4">
              <h3 className="text-md font-semibold text-gray-800">How can I contact customer support?</h3>
              <p className="text-gray-600 mt-2">You can reach our support team by clicking the 'Contact Support' button below or sending an email to support@company.com.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-800">Contact Support</h2>
          <p className="mt-4 text-gray-600">If you need further assistance, please contact our support team using one of the methods below:</p>
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <span className="text-gray-800 font-medium">Email:</span>
              <a href="mailto:support@company.com" className="ml-2 text-indigo-600 hover:underline">jyreyes1111@gmail.com</a>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-gray-800 font-medium">Phone:</span>
              <a href="tel:+123456789" className="ml-2 text-indigo-600 hover:underline">+63 956 6326 635</a>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-gray-800 font-medium">Discord:</span>
              <a href="/live-chat" className="ml-2 text-indigo-600 hover:underline">Hyun</a>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-800">User Guides</h2>
          <p className="mt-4 text-gray-600">Explore our detailed guides to help you make the most out of our platform.</p>
          <div className="mt-4">
            <ul className="list-disc pl-6">
              <li><a href="/guide/account-setup" className="text-indigo-600 hover:underline">Account Setup Guide</a></li>
              <li><a href="/guide/dashboard-overview" className="text-indigo-600 hover:underline">Dashboard Overview</a></li>
              <li><a href="/guide/advanced-features" className="text-indigo-600 hover:underline">Advanced Features Guide</a></li>
              <li><a href="/guide/troubleshooting" className="text-indigo-600 hover:underline">Troubleshooting & FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
