// NonVegIcon.jsx
export default function NonVegIcon() {
  return (
    <div className="relative w-6 h-6">
      {/* Outer Square */}
      <div className="absolute inset-0 border-2 border-red-600 rounded-sm"></div>
      {/* Inner Dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
      </div>
    </div>
  );
}
