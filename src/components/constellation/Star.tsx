
import type { StarDefinition } from '../../data/constellation'

interface StarProps {
  star: StarDefinition
  selected: boolean
  onSelect: () => void
}

// @doc STAR-INTERACTION
function Star({ star, selected, onSelect }: StarProps) {
  return (
    <button
      type="button"
      aria-label={`Open ${star.label} section`}
      aria-pressed={selected}
      onClick={onSelect}
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
      }}
      className={`group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-md px-2 py-2 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DCD7FF] ${
        selected
          ? 'scale-110 drop-shadow-[0_0_14px_rgba(185,156,246,0.95)]'
          : ''
      }`}
    >
      <img
        src="/assets/icons/pxl_star.svg"
        alt=""
        draggable={false}
        className="h-10 w-10 select-none object-contain transition duration-150 group-hover:scale-110 group-focus-visible:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(185,156,246,0.95)] sm:h-12 sm:w-12"
      />

      <span className="whitespace-nowrap text-[11px] font-semibold tracking-widest text-[#F4F0FF] drop-shadow-[0_1px_3px_rgba(0,0,0,1)] sm:text-xs">
        {star.label.toUpperCase()}
      </span>
    </button>
  )
}

export default Star
