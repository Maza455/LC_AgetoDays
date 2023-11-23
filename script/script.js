// const calculateBtn = document.getElementById('calculate-btn');
// calculateBtn.addEventListener('click', calculateAge);

// function calculateAge() {
//   const birthdate = document.getElementById('birthdate').value;
//   const today = new Date();
//   const age = today.getFullYear() - new Date(birthdate).getFullYear();
//   let days = today.getDate() - new Date(birthdate).getDate();

//   if (days < 0) {
//     days += 31;
//     age -= 1;
//   }

//   const result = document.getElementById('result');
//   result.textContent = `${age} years, ${days} days`;
//   result.classList.add('fade-in-animation', 'show');
// }


function calculateAgeInDays(birthdate) {
    const today = new Date();
    const diffTime = Math.abs(today - birthdate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
  
  const birthdate = new Date('2000-01-01');
  const ageInDays = calculateAgeInDays(birthdate);
  console.log(ageInDays);
  

