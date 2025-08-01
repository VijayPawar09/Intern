import React from "react";

export default function RewardCard({ title }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>Unlocked when donation crosses threshold</p>
    </div>
  );
}
