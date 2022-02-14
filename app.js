const notes = [
  {
    amount: 1000,
    quantity: 2,
  },
  {
    amount: 500,
    quantity: 3,
  },
  {
    amount: 200,
    quantity: 8,
  },
  {
    amount: 100,
    quantity: 2,
  },
];

const calculateAtmBalance = () => {
  let totalAmount = 0;
  notes.forEach((e) => {
    const singleAmount = e.amount * e.quantity;
    totalAmount += singleAmount;
  });
  return totalAmount;
};

const withdraw = (withdrawAmount) => {
  const atmBalance = calculateAtmBalance();

  if (withdrawAmount > atmBalance) {
    throw 'Insufficient Funds';
  }

  const returnedNotes = [];
  let balance = withdrawAmount;

  notes.forEach((e) => {
    if (balance >= e.amount) {
      const quantity = Math.floor(balance / e.amount);
      if (e.quantity >= quantity) {
        returnedNotes.push({ amount: e.amount, quantity: quantity });
        balance -= e.amount * quantity;
        e.quantity -= quantity;
      } else if (quantity > e.quantity) {
        returnedNotes.push({ amount: e.amount, quantity: e.quantity });
        balance -= e.amount * e.quantity;
        e.quantity -= e.quantity;
      }
    }
  });
  let returnedAmount = 0;
  returnedNotes.forEach((e) => {
    const singleAmount = e.amount * e.quantity;
    returnedAmount += singleAmount;
  });
  if (returnedAmount !== withdrawAmount) {
    throw 'No available notes for this amount, please choose a different amoutn';
  }
  return console.log(returnedNotes);
};

withdraw(1600);
console.log(notes, '1600');
withdraw(800);
console.log(notes, '800');
withdraw(400);
console.log(notes, '400');
// Code will throw an error here as no 100 notes left
withdraw(600);
console.log(notes, '600');
// Code will throw an error here as no 100 notes left
withdraw(300);
console.log(notes, '300');
withdraw(1000);
console.log(notes, '1000');
// Code will throw an error here as no 100 notes left
withdraw(600);
console.log(notes, '600');
withdraw(700);
console.log(notes, '700');
// Code will throw an error here as no 100 notes left
withdraw(100);
console.log(notes, '100');
