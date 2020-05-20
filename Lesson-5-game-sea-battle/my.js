// запуск игры
// скрипт размещяет корабль
// начало боя
// повторяем действия: запрос у пользователя кординат и сравнение скординатами коробля<
// Игра окончена, выводим оценку

/*
ЦИКЛ: пока корабль не потоплен
	ПОЛУЧИТЬ координаты выстрела от пользователя
	СРАВНИТЬ введенные данные с диапазоном корректных значений
	ЕСЛИ введенные данные некорректны,
		ВЫВЕСТИ сообщение с предложением ввести правильное число
	ИНАЧЕ
		ПРИБАВИТЬ один к guesses
		ЕСЛИ выстрел попал в корабль
			ПРИБАВИТЬ один к количеству попаданий
			ЕСЛИ количество попаданий равно трем
				ПРИСВОИТЬ isSunk значение true
				ВЫВЕСТИ сообщение «Корабль потоплен!»
			КОНЕЦ ЕСЛИ
		КОНЕЦ ЕСЛИ
	КОНЕЦ ИНАЧЕ
КОНЕЦ ЦИКЛА
ВЫВЕСТИ статистику
*/

var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	guess = parseInt(prompt('Please fill in cordinate 0-6:'));
	if (guess < 0 || guess > 6 ) {
		alert('I have asked to enter cordinate in 0-6')
	} else{
		guesses = guesses+1;
		switch(guess) {
			case location1: hits+=1;
			break;
			case location2: hits+=1;
			break;
			case location3: hits+=1;
			break;
			default: alert('it was wrong cordinate');
		}
	}
	if (hits == 3) {
		isSunk = true;
		alert('You won');
	}
}

var status = "You have shot" + guesses + " times, to hit the boat, " + "it shows your level as" + (3/guesses);
alert(status);