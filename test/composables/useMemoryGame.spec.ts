import useMemoryGame  from '@/composables/useMemoryGame'
import { beforeEach, describe, expect, it } from 'vitest'

describe('useMemoryGame composable', () => {
  
  const cardData = [
    { name: 'card1', imageUrl: 'url1' },
    { name: 'card2', imageUrl: 'url2' },
    { name: 'card3', imageUrl: 'url3' },
  ]
  

  it('should initialize the game with shuffled cards', () => {
    const { cards, initializeGame } = useMemoryGame()

    initializeGame(cardData)
    
    expect(cards.value.length).toBe(cardData.length * 2) 
    expect(cards.value[0].isFlipped).toBe(false)
    expect(cards.value[0].isMatched).toBe(false)
  })

  it('should flip a card', () => {
    const { cards, flipCard, initializeGame, flippedCards } = useMemoryGame()
    initializeGame(cardData)

    const card = cards.value[0]
    flipCard(card)
    expect(card.isFlipped).toBe(true)
    expect(flippedCards.value.length).toBe(1)
  })

  it('should check for a match between two flipped cards', () => {
    const { flipCard, correctGuesses, initializeGame } = useMemoryGame()

    initializeGame(cardData)

    const firstCard = { id: 1, name: 'card1', imageUrl: 'url1', isFlipped: false, isMatched: false }
    const secondCard = { id: 2, name: 'card1', imageUrl: 'url1', isFlipped: false, isMatched: false }
    
    flipCard(firstCard)
    flipCard(secondCard)
    
    expect(correctGuesses.value).toBe(1)
    expect(firstCard.isMatched).toBe(true)
    expect(secondCard.isMatched).toBe(true)
  })

  it('should increase errors when two flipped cards do not match', () => {
    const { cards, flipCard, errors, initializeGame } = useMemoryGame()

    initializeGame(cardData)

    const firstCard = cards.value[0]
    const secondCard = cards.value[1]
    
    flipCard(firstCard)
    flipCard(secondCard)

    setTimeout(() => {
      expect(errors.value).toBe(1)
      expect(firstCard.isFlipped).toBe(false)
      expect(secondCard.isFlipped).toBe(false)
    }, 1000)
  })

  it('should end the game when all cards are matched', () => {
    const { cards, initializeGame, checkGameOver, isGameOver, matchedCards } = useMemoryGame()

    initializeGame(cardData)

    cards.value.forEach((card) => {
      card.isMatched = true
      matchedCards.value.push(card)
    })
    
    checkGameOver()

    expect(isGameOver.value).toBe(true)
  })

  it('should restart the game', () => {
    const { isGameOver, restartGame, errors, correctGuesses, matchedCards, flippedCards } = useMemoryGame()

    restartGame()

    expect(isGameOver.value).toBe(false)
    expect(matchedCards.value.length).toBe(0)
    expect(flippedCards.value.length).toBe(0)
    expect(errors.value).toBe(0)
    expect(correctGuesses.value).toBe(0)
  })
})
