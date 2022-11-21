import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import Card from '../components/Card'
import cardData from "../data/cardData"

export default function App() {
    const CardElements = cardData.map(card => {
      return (
        <Card
            key={card.id}
            {...card}
          />
      )
    })
    return (
      <div className="app-container">
        <Navbar />
        <Hero />
        <div className="cards">
          {CardElements}
        </div>
      </div>
    )
}