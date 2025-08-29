export default function ProgressBar({ percent }) {
  return (
    <div className="bg-gray-600 h-2 w-2/4 rounded-lg mt-4">
      <div
        className="bg-purple-900 h-2 rounded-lg"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
