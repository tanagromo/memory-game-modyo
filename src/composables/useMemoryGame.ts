import { ref } from 'vue'
import type { Card } from '@/types/card.ts'

export default function useMemoryGame() {
  const originalData = ref<Card[]>([])
  const cards = ref<Card[]>([])
  const flippedCards = ref<Card[]>([])
  const matchedCards = ref<Card[]>([])
  const isGameOver = ref(false)
  const isProcessing = ref(false)
  const errors = ref(0)
  const correctGuesses = ref(0)
  
  const initializeGame = (cardData: Card[]) => {
    originalData.value = cardData
    
    const duplicatedCards = [...cardData, ...cardData]  
    shuffleCards(duplicatedCards)
    
    cards.value = duplicatedCards.map((card, index) => ({
      ...card,
      id: index,
      isFlipped: false,
      isMatched: false
    }))
  }
  
  const shuffleCards = (cards: Card[]) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));[cards[i], cards[j]] = [cards[j], cards[i]]
    }
  }
  
  const flipCard = (card: Card) => {
    if (isProcessing.value || card.isFlipped || card.isMatched) return

    card.isFlipped = true
    flippedCards.value.push(card)
    
    if (flippedCards.value.length === 2) {
      isProcessing.value = true
      setTimeout(checkMatch, 600)
    }
  }

  const checkMatch = () => {
    isProcessing.value = true
    const [firstCard, secondCard] = flippedCards.value

    if (firstCard.id !== secondCard.id && firstCard.name === secondCard.name) {
      firstCard.isMatched = true
      secondCard.isMatched = true
      matchedCards.value.push(firstCard, secondCard)
      correctGuesses.value += 1
    } else {
      setTimeout(() => {
        firstCard.isFlipped = false
        secondCard.isFlipped = false
      }, 500)
      errors.value += 1
    }

    flippedCards.value = []
    isProcessing.value = false

    checkGameOver()
  }

  const checkGameOver = () => {
    if (matchedCards.value.length === cards.value.length) {
      isGameOver.value = true
    }
  }

  const restartGame = () => {
    isGameOver.value = false
    matchedCards.value = []
    flippedCards.value = []
    errors.value = 0
    correctGuesses.value = 0
    
    initializeGame(originalData.value)
  }

  return {
    cards,
    flippedCards,
    matchedCards,
    isGameOver,
    errors,
    correctGuesses,
    flipCard,
    restartGame,
    initializeGame,
    checkGameOver
  }
}
