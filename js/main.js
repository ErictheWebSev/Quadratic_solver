document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('calc-btn')
  const result = document.getElementById('result')
  
  function calculateEquation() {
    const a = parseFloat(document.getElementById('a').value)
    const b = parseFloat(document.getElementById('b').value)
    const c = parseFloat(document.getElementById('c').value)
  
    const discriminant = b * b - 4 * a * c
    alert(discriminant)
    
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant) / (2 * a))
      const root2 = (-b - Math.sqrt(discriminant) / (2 * a))
      
      result.classList.remove('hidden');
      result.textContent = `The roots of the equation are ${root1.toFixed(2)} and ${root2.toFixed(2)}`
        alert(root1)
    } else if (discriminant === 0) {
       const root = -b / (2 * a);
       result.classList.remove('hidden');
       result.textContent = `The root is ${root.toFixed(2)}`
    }   else {
        const root1 = (-b + Math.sqrt(discriminant) / (2 * a))
      const root2 = (-b - Math.sqrt(discriminant) / (2 * a))
      
      result.classList.remove('hidden');
      result.textContent = `The roots of the equation are ${root1.toFixed(2)} and ${root2.toFixed(2)}`
        alert(root1)
    }
  }
  
  btn.addEventListener('click', () => {
     if (a.value === '' && b.value === '' && c.value === '') {
       result.classList.remove('hidden');
       result.textContent = "Fields Can't be empty";
     } else {
      calculateEquation()
    }
    
  })
})