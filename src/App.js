import './App.css';
import GamesList from "./components/games_list/gameslist"

function App() {

  const games = [
    {
      id:1,
      image:'https://assets.codepen.io/1468070/game+cover+-+fall+guys.png?format=auto&quality=80',
      name: "Fall Guys"
    },
    {
      id:2,
      image:"https://assets.codepen.io/1468070/game+cover+-+minecraft.png?format=auto&quality=80",
      name: "Minecraft"
    },
    {
      id:3,
      image:"https://assets.codepen.io/1468070/game+cover+-+tetris.png?format=auto&quality=80",
      name: "Tetris"
    }
  ]

  return (
    <div className="App">
      <body>
        <div className='games-container'>
          {games.map((game) => (
            <GamesList key={game.id} games={game}/>
          ))}
        </div>
      </body>
      </div>
  );
}

export default App;
