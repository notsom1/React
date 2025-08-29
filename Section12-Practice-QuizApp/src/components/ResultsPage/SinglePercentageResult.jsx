export default function SinglePercentageResults({ percentage, labelsArray }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl text-gray-600">{percentage}%</h2>
      {labelsArray.map((label) => (
        <p className="text-xs text-gray-600">{label}</p>
      ))}
    </div>
  );
}
