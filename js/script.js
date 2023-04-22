// // Define the meals data
const mealsData = [
  { name: 'معكرونة' },
  { name: 'تفاح' },
  { name: 'موز' },
  { name: 'عنب' },
  { name: 'روبة' },
  { name: 'خيار' },
  { name: 'طماطة' },
  { name: 'جزر' },
  { name: 'توت' },
  { name: 'برتقال' },
  { name: 'جبن' },
  { name: 'حليب' },
  { name: 'رمان' },
  { name: 'بروكلي' },
  { name: 'قرنابيط' },
  { name: 'لالنكي' },
  { name: 'زلاطة' },
  { name: 'ريحان' },
  { name: 'لبن' },
  { name: 'فلفل اخضر بارد' },
  { name: 'فراولة' },
  { name: 'عصير أخضر' },
  { name: 'منكا' },
  { name: 'ركي' },
  { name: 'بطيخ' }
];

// Define a function to get a random meal from the meals data
function getRandomMeal() {
  // Shuffle the meals data
  const shuffledMeals = mealsData.sort(() => 0.5 - Math.random());
  // Get two random meals
  const randomMeals = shuffledMeals.slice(0, 2);
  // Return the random meals
  return randomMeals;
}

// Define a function to display the meals
function displayMeals(meals) {
  // Get the meal placeholders
  const meal1 = document.getElementById('meal1');
  // Display the meals
  meal1.innerHTML = `<div class='card-box card-text'> ${meals[0].name} </div>`;
}

// Generate a random set of meals and display them
const meals = getRandomMeal();
displayMeals(meals);

const newMeal = document.getElementById('newMeal');
newMeal.addEventListener('click', function () {
  location.reload();
})