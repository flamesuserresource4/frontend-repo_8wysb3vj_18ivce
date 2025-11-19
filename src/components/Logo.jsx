import React from 'react'

export default function Logo({ size = 'text-2xl', condensed = false }) {
  return (
    <div className={`font-extrabold tracking-tight ${size} select-none`}>
      <span className="text-[#262626]">T S</span>
      <span className="text-[#b65252]">A</span>
      {!condensed && (
        <span className="ml-2 text-[#262626]">Tsebulenko <span className="text-[#b65252]">Agency</span></span>
      )}
    </div>
  )
}
