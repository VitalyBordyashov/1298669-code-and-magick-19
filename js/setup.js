'use strict';
// списки данных на выбор
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристофор', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// функция создания эелемента DOM
var creatingItem = function (value) {
  return document.querySelector(value);
};

// функция случайного значения из массива
var randomElement = function (Array) {
  var randomN = Array[Math.floor(Math.random() * (Array.length - 1))];
  return randomN;
};

// делаем видимыми блоки:
creatingItem('.setup').classList.remove('hidden');
creatingItem('.setup-similar').classList.remove('hidden');

// Создаем переменную в которую будем добавлять созданные значения клонов персонажей:
var similarListElement = creatingItem('.setup-similar-list');
// Создаем переменную эелемента DOM значения которого будем клонировать:
var similarWizardTemplate = creatingItem('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

// Объявляем функцию генерации персонажа:
var characterGeneration = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyeesElement = wizardElement.querySelector('.wizard-eyes');

  wizardElement.querySelector('.setup-similar-label').textContent = randomElement(NAMES) + randomElement(SURNAMES);

  wizardCoatElement.style.fill = randomElement(coatColor);

  wizardEyeesElement.style.fill = randomElement(eyesColor);

  similarListElement.appendChild(wizardElement);
};
// цикл создания клонов:
for (var i = 0; i < 4; i++) {
  characterGeneration();
}
