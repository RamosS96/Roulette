const express = require('express')
const { Roulette } = require('./src/roulette')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/ruleta', (req, res) => {
  const apuesta = req.body
  const win = Math.floor(Math.random() * 37)
  let profit = 0
  apuesta.forEach((el) => {
    let arr = el.num;
    let bet = el.bet;
    let ruleta = Roulette(bet, arr, win)
    resultado = (ruleta == undefined) ? `No salió el ${arr}` : (profit = profit+ruleta)
    return resultado
  })

  res.send(`Numero Ganador: ${win}, ganancias: ${profit}`)
})

const server = app.listen(8080, () => {
  console.log('Server escuchando')
})