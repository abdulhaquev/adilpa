
import React, { useEffect, useRef, useState } from 'react'

export default function VideoLightbox({ project, onClose }) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div role="dialog" aria-modal="true" aria-label="Video modal"
      className="fixed inset-0 bg-black/70 grid place-items-center z-50 p-4" onClick={onClose}>
      <div className="glass max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()} ref={ref}>
        {!loaded && <div className="p-8 text-center">Loading…</div>}
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          {project?.url && (
            <iframe
              title={project.title}
              src={project.url}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>
        <button onClick={onClose} className="mt-4 px-4 py-2 rounded-lg border border-white/20">Close</button>
      </div>
    </div>
  )
}
