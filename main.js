var numbers = document.querySelectorAll('.number');

var rating ;
numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        rating = number.innerHTML;
        // console.log(rating);
        var resultHTML = `You selected ${rating} out of 5`;
        var result = document.querySelector('.result');
        result.innerHTML = resultHTML;
        numbers.forEach(function(number) {
            number.classList.remove('selected');
        });
        number.classList.add('selected');
    });
})

var ratttingScreen = document.querySelector('.rating');
var thanksScreen = document.querySelector('.thanks');
var submit = document.querySelector('.submit');

submit.onclick = function(){
    thanksScreen.style.display = 'flex';
    ratttingScreen.style.display = 'none';
}

