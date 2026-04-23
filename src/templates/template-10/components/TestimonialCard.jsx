import { Quote, Star } from "lucide-react";









export default function TestimonialCard({
  name,
  role,
  avatar,
  color,
  quote
}) {
  return (
    <div
      className="bg-white rounded-2xl p-8 border border-black/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col gap-5 h-full"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
      
      {/* Quote icon */}
      <Quote style={{ color }} size={24} className="opacity-60" />

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) =>
        <Star key={i} size={12} className="text-amber-400" fill="currentColor" />
        )}
      </div>

      {/* Quote text */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-black/5">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-base flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
          
          {avatar}
        </div>
        <div>
          <p className="font-extrabold text-gray-800 text-sm">{name}</p>
          <p className="text-gray-400 text-xs uppercase">{role}</p>
        </div>
      </div>
    </div>);

}