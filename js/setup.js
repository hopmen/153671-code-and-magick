'use strict';

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

var similalListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['blue', 'green', 'yellow', 'red', 'black'];

var generateDataAndDelete = function(arrData){
  var randomId = Math.floor(Math.random() * (arrData.length - 1));
  var randomData = arrData[randomId];
  arrData.splice(randomId, 1);
  return randomData;
};

var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards.push({
    name: generateDataAndDelete(names) + ' ' + generateDataAndDelete(surnames) ,
    coatColor: generateDataAndDelete(coatColor),
    eyesColor: generateDataAndDelete(eyesColor)
  });
}

var drawWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(drawWizard(wizards[i]));
}

similalListElement.appendChild(fragment);
userSetup.querySelector('.setup-similar').classList.remove('hidden');