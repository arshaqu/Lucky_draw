const pickBtn = document.getElementById('pickBtn');

const prizeIds = ['first', 'second', 'third', 'fourth', 'fifth'];
let currentPrizeIndex = 0;
let selectedNumbers = [];

// Define ranges
const ranges = [
    { min: 50001, max: 99000 },
    { min: 50001, max: 99000 },
    { min: 50001, max: 99000 },
    { min: 50001, max: 99000 },     // fallback range
    { min: 50001, max: 99000 }      // fallback range
];

function getRandomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

pickBtn.addEventListener('click', () => {
    if (currentPrizeIndex >= prizeIds.length) {
        alert('🎉 All prizes have been selected!');
        return;
    }

    const { min, max } = ranges[currentPrizeIndex];
    let randomNumber;

    do {
        randomNumber = getRandomFromRange(min, max);
    } while (selectedNumbers.includes(randomNumber));

    selectedNumbers.push(randomNumber);

    document.getElementById(prizeIds[currentPrizeIndex]).textContent = randomNumber;

    currentPrizeIndex++;
});
