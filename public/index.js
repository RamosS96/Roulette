const pano = document.getElementById('pano')
const panoSingle = document.getElementById('pano-single')
const panoSplit = document.getElementById('pano-split')
const panoStreet = document.getElementById('pano-street')
const panoSquare = document.getElementById('pano-square')
const panoDStreet = document.getElementById('pano-dstreet')

//Single
for (let i = 0; i < 37; i++) {
  let checkbox = document.createElement('input')
  let label = document.createElement('label')
  checkbox.type = 'checkbox'
  checkbox.id = `single-${i}`
  checkbox.value = i
  checkbox.classList = 'pano-single'
  label.className = 'pano-number'
  label.innerHTML = i
  panoSingle.appendChild(checkbox)
  panoSingle.appendChild(label)
}


//Split
for (let i = 1; i < 37; i++) {
  if ((i % 3 == 2 || i % 3 == 0) && ((i + 3 <= 36))) {
    let checkbox1 = document.createElement('input')
    let label1 = document.createElement('label')
    let checkbox2 = document.createElement('input')
    let label2 = document.createElement('label')
    checkbox1.type = 'checkbox'
    checkbox1.id = `split-${i - 1}-${i}`
    checkbox1.value = `${i - 1}-${i}`
    checkbox1.classList = 'pano-split'
    checkbox2.type = 'checkbox'
    checkbox2.id = `split-${i}-${i + 3}`
    checkbox2.classList = 'pano-split'
    label1.className = 'pano-number'
    label1.innerHTML = `${i - 1}-${i}`
    label2.className = 'pano-number'
    label2.innerHTML = `${i}-${i + 3}`
    panoSplit.appendChild(checkbox1)
    panoSplit.appendChild(label1)
    panoSplit.appendChild(checkbox2)
    panoSplit.appendChild(label2)
  } else if ((i < 34) && (i % 3 == 1)) {
    let checkbox1 = document.createElement('input')
    let label1 = document.createElement('label')
    checkbox1.type = 'checkbox'
    checkbox1.id = `split-${i}-${i + 3}`
    checkbox1.value = `${i - 1}-${i}`
    checkbox1.classList = 'pano-split'
    label1.className = 'pano-number'
    label1.innerHTML = `${i}-${i + 3}`
    panoSplit.appendChild(checkbox1)
    panoSplit.appendChild(label1)
  }
}
const checkbox3435 = document.createElement('input');
const label3435 = document.createElement('label')
const checkbox3536 = document.createElement('input');
const label3536 = document.createElement('label')
checkbox3435.type = 'checkbox'
checkbox3435.id = `split-34-35`
checkbox3435.value = `34-35`
checkbox3435.classList = 'pano-split'
label3435.className = 'pano-number'
label3435.innerHTML = `34-35`
checkbox3536.type = 'checkbox'
checkbox3536.id = `split-35-36`
checkbox3536.value = `35-36`
checkbox3536.classList = 'pano-split'
label3536.className = 'pano-number'
label3536.innerHTML = `35-36`
panoSplit.appendChild(checkbox3435)
panoSplit.appendChild(label3435)
panoSplit.appendChild(checkbox3536)
panoSplit.appendChild(label3536)

//Street
for (let i = 0; i < 36; i++) {
  if (i % 3 == 1) {
    let checkbox = document.createElement('input')
    let label = document.createElement('label')
    checkbox.type = 'checkbox'
    checkbox.id = `street-${i}-${i + 1}-${i + 2}`
    checkbox.value = `${i}-${i + 1}-${i + 2}`
    checkbox.classList = 'pano-single'
    label.className = 'pano-number'
    label.innerHTML = `${i}-${i + 1}-${i + 2}`
    panoStreet.appendChild(checkbox)
    panoStreet.appendChild(label)
  }
}

//Square
for (let i = 1; i <= 31; i++) {
  if (i % 3 == 1) {
    let checkbox = document.createElement('input')
    let label = document.createElement('label')
    checkbox.type = 'checkbox'
    checkbox.id = `square-${i}-${i + 1}-${i + 3}-${i + 4}`
    checkbox.value = `${i}-${i + 1}-${i + 2}`
    checkbox.classList = 'pano-square'
    label.className = 'pano-number'
    label.innerHTML = `${i}-${i + 1}-${i + 3}-${i + 4}`
    panoSquare.appendChild(checkbox)
    panoSquare.appendChild(label)
  } else if (i % 3 == 2) {
    let checkbox = document.createElement('input')
    let label = document.createElement('label')
    checkbox.type = 'checkbox'
    checkbox.id = `square-${i}-${i + 1}-${i + 3}-${i + 4}`
    checkbox.value = `${i}-${i + 1}-${i + 2}`
    checkbox.classList = 'pano-square'
    label.className = 'pano-number'
    label.innerHTML = `${i}-${i + 1}-${i + 3}-${i + 4}`
    panoSquare.appendChild(checkbox)
    panoSquare.appendChild(label)
  }
}

//Double Street
for (let i = 1; i <= 31; i++) {
  if (i % 3 == 1) {
    let checkbox = document.createElement('input')
    let label = document.createElement('label')
    checkbox.type = 'checkbox'
    checkbox.id = `dstreet-${i}-${i + 1}-${i + 2}-${i + 3}-${i + 4}-${i + 5}`
    checkbox.value = `${i}-${i + 1}-${i + 2}`
    checkbox.classList = 'pano-dstreet'
    label.className = 'pano-number'
    label.innerHTML = `${i}-${i + 1}-${i + 2}-${i + 3}-${i + 4}-${i + 5}`
    panoDStreet.appendChild(checkbox)
    panoDStreet.appendChild(label)
  }
}

//Bet Quantity
const rangeBar = document.getElementById('range-bar-bet')
const rangeBarN = document.getElementById('bet-q')
const seeBet = () => {
  rangeBarN.innerHTML = rangeBar.value
}
rangeBar.addEventListener('input', seeBet)