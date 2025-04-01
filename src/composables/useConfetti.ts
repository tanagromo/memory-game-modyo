import confetti from 'canvas-confetti'

export default function useConfetti() {
  const launchConfetti = () => {
    const duration = 3000
    const animationEnd = Date.now() + duration

    const frame = () => {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) return

      confetti({
        particleCount: 50,
        spread: 160,
        startVelocity: 20,
        origin: { x: Math.random(), y: Math.random() * 0.6 }
      })

      requestAnimationFrame(frame)
    }

    frame()
  }

  return { launchConfetti }
}
