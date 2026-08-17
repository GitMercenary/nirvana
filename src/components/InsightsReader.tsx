'use client'

import { useEffect, useState } from 'react'

type TocItem = { id: string; text: string }

export default function InsightsReader({ toc }: { toc: TocItem[] }) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!toc.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id)
        })
      },
      { rootMargin: '-15% 0px -75% 0px' }
    )
    toc.forEach((t) => {
      const el = document.getElementById(t.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [toc])

  return (
    <>
      <div className="insights-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      {toc.length > 0 && (
        <nav className="insights-toc" aria-label="On this page">
          <p className="insights-toc__title">On this page</p>
          <ul>
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className={active === t.id ? 'is-active' : ''}>
                  {t.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
