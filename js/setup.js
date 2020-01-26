'use strict';

var creatingItem = function (value) {
  return document.querySelector(value);
}

var userDialog = creatingItem('.setup');
userDialog.classList.remove('hidden');

creatingItem('.setup-similar').classList.remove('hidden');

var similarListElement = creatingItem('.setup-similar-list');
var similarWizardTemplate = creatingItem('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристофор', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var randomElement = function (Array) {
  var randomN = Array[Math.floor(Math.random() * (Array.length - 1))];
  return randomN;
}
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = randomElement(NAMES) + randomElement(SURNAMES);

  var propertyElement = wizardElement.querySelector('.wizard-coat');
  propertyElement.style.fill = randomElement(coatColor);

   var propertyElement2 = wizardElement.querySelector('.wizard-eyes');
  propertyElement2.style.fill = randomElement(eyesColor);

  similarListElement.appendChild(wizardElement);
}



