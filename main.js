const element = document.getElementById('list')

for (let i = 1; i <= 100; i++) {

    if (i % 15 == 0) {
        console.log('fizzbuzz')
        list.innerHTML += '<div class="box multiplo-3-5">FizzBuzz</div>';

    } else if (i % 3 == 0) {
        console.log('fizz')
        list.innerHTML += '<div class="box multiplo-3">Fizz</div>';
    } else if (i % 5 == 0) {
        console.log('buzz')
        list.innerHTML += '<div class="box multiplo-5">Buzz</div>';
    } else {
        console.log(i)
        list.innerHTML += `<div class="box normale">${i}</div>`;

    }
    let listItem = document.createElement(('div'));
    element.append(listItem)

}