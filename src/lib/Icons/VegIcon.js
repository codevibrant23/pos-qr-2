// VegIcon.jsx
export default function VegIcon() {
  return (
    <div className="relative w-6 h-6">
      {/* Outer Square */}
      <div className="absolute inset-0 border-2 border-green-600 rounded-sm z-10"></div>
      {/* Inner Dot */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
      </div>
    </div>
  );
}
