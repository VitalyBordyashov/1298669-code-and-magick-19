'use strict';
// списки данных на выбор
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристофор', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
//creatingItem('.setup').classList.remove('hidden');
//creatingItem('.setup-similar').classList.remove('hidden');

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
// задание 4
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});
// Вводимограничение на ввод имени
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// создаем элемент цвета мантии
var colorMantle = document.querySelector('.setup-wizard .wizard-coat');
// функция изменеия цвета
var wizardCoatClickHandler = function () {
  colorMantle.style.fill = randomElement(coatColor);
  var inputColorMantle = document.querySelector('.setup-wizard-wrap input[name="coat-color"]');
  inputColorMantle.value = colorMantle.style.fill;
};
colorMantle.addEventListener('click', wizardCoatClickHandler);

// создаем элемент цвета глаз
var colorEyes = document.querySelector('.setup-wizard .wizard-eyes');
// функция изменеия цвета
var wizardEyesClickHandler = function () {
  colorEyes.style.fill = randomElement(eyesColor);
  var inputColorEyes = document.querySelector('.setup-wizard-wrap input[name="eyes-color"]');
  inputColorEyes.value = colorEyes.style.fill;
};
colorEyes.addEventListener('click', wizardEyesClickHandler);

// создаем элемент цвета фаербола
var colorFireball = document.querySelector('.setup-fireball-wrap');
// функция изменеия цвета
var fireballClickHandler = function () {
  colorFireball.style.background = randomElement(fireballColor);
  var inputColorFireball = document.querySelector('.setup-fireball-wrap input');
  inputColorFireball.value = colorFireball.style.background;
};
colorFireball.addEventListener('click', fireballClickHandler);
