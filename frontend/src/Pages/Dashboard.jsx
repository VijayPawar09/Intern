import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <div className="text-center mt-10 text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-3xl p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600">Intern Dashboard</h1>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Intern Name</p>
            <p className="text-xl font-semibold text-indigo-700">{data.name}</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Referral Code</p>
            <p className="text-xl font-semibold text-indigo-700">{data.referralCode}</p>
          </div>
        </div>

        <div className="bg-green-100 border border-green-300 p-4 rounded-xl text-center">
          <p className="text-sm text-green-700">Total Donations Raised</p>
          <p className="text-2xl font-bold text-green-800">₹{data.totalDonations}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">🎁 Rewards / Unlockables</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RewardCard title="Bronze Badge" description="Unlock at ₹1000" />
            <RewardCard title="Free T-Shirt" description="Unlock at ₹5000" />
            <RewardCard title="Certificate of Excellence" description="Unlock at ₹10000" />
            <RewardCard title="Invitation to Annual Meetup" description="Top 10 Donors" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RewardCard({ title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition">
      <h3 className="font-semibold text-indigo-700">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
