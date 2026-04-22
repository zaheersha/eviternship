export default function Refund() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-700">
      <h1 className="text-2xl font-bold mb-4">Refund Policy – Eviternship</h1>

      <h2 className="font-bold">1. Eligibility for Refund</h2>
      <ul className="list-disc ml-6">
        <li>Service not delivered</li>
        <li>Technical payment error</li>
      </ul>

      <h2 className="font-bold mt-4">2. Non-Refundable Cases</h2>
      <ul className="list-disc ml-6">
        <li>Change of mind</li>
        <li>Partial usage</li>
        <li>Missed internship/training</li>
      </ul>

      <h2 className="font-bold mt-4">3. Refund Timeline</h2>
      <p>7–10 business days</p>

      <h2 className="font-bold mt-4">4. Contact</h2>
      <p>support@eviternship.com</p>

      <h2 className="font-bold mt-4">5. Dispute</h2>
      <p>Handled internally first.</p>
    </div>
  );
}