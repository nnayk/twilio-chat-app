const students = Array.from({length: 10}, (_, i) => "student "+i + 1)

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = () => rand(students);
