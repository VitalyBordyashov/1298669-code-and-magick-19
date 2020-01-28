'use strict';
// список имен для случайного выбора персонажу
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристофор', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// список фамилий для случайного выбора персонажу
var SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
// список цветов мантии для случайного выбора персонажу
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// список цветов глаз для случайного выбра
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// объявляем функцию создания эелемента DOM
var creatingItem = function (value) {
  return document.querySelector(value);
};
// объявляем функцию случайного значения из массива
var randomElement = function (Array) {
  var randomN = Array[Math.floor(Math.random() * (Array.length - 1))];
  return randomN;
};

// делаем видимым блок выбора похожего персонажа:
creatingItem('.setup').classList.remove('hidden');
// делаем видимым блок, в котором расположены похожие персонажи:
creatingItem('.setup-similar').classList.remove('hidden');

// Создаем переменную в которую будем добавлять созданные значения клонов персонажей:
var similarListElement = creatingItem('.setup-similar-list');
// Создаем переменную эелемента DOM значения которого будем клонировать:
var similarWizardTemplate = creatingItem('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

// Объявляем функцию генерации персонажа:
var characterGeneration = function () {
  // создаем переменную (клон) персонажа
  var wizardElement = similarWizardTemplate.cloneNode(true),
  // создаем переменную, чтобы присвоить ей цвет мантии
  wizardCoatElement = wizardElement.querySelector('.wizard-coat'),
  // создаем переменную, чтобы присвоить ей цвет глаз
  wizardEyeesElement = wizardElement.querySelector('.wizard-eyes');
  // присваиваем персонажу случайное имя и фамилию
  wizardElement.querySelector('.setup-similar-label').textContent = randomElement(NAMES) + randomElement(SURNAMES);
  // присваеваем стиль - случайный цвет мантии из приведенного списка.
  wizardCoatElement.style.fill = randomElement(coatColor);
  // присваеваем стиль - случайный цвет глаз из приведенного списка.
  wizardEyeesElement.style.fill = randomElement(eyesColor);
  // присваиваем все значения уже в DOM элемент вложенными "детьми"
  similarListElement.appendChild(wizardElement);
};
// создаем цикл, чтобы получилось 4 клона и им присвоились имена, цвет мантии и глаз:
for (var i = 0; i < 4; i++) {
  characterGeneration()
}
