
import {
  constellationConnections,
  stars,
} from '../../data/constellation'

// @doc SVG-CONNECTIONS
function ConstellationLines() {
  const starById = new Map(
    stars.map((star) => [star.id, star]),
  )

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {constellationConnections.map(([fromId, toId]) => {
        const from = starById.get(fromId)
        const to = starById.get(toId)

        if (!from || !to) {
          return null
        }

        return (
          <line
            key={`${fromId}-${toId}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="#969CF4"
            strokeOpacity="0.65"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          />
        )
      })}
    </svg>
  )
}

export default ConstellationLines
