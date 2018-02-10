'use strict';


var randomData = function (arr, amountOfData) {
  var newArr = [];
  if (arr.length >= amountOfData) {
    while (newArr.length < amountOfData) {
      var randomElemen = arr[Math.floor(Math.random() * arr.length)];
      if (newArr.indexOf(randomElemen) < 0) {
        newArr.push(randomElemen);
      }
    }
  } else {
    throw new Error('ФААЛИТИ ЕРРОР. ТЫ ХОЧЕШЬ БОЛЬШЕ СЛУЧАЙНЫХ ВОЛШЕБНИКОВ ЧЕМ ВОЗМОЖНО');
  }
  return newArr;
};

var drawWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var creatArrWizards = function (wizardNubmder) {
  var randomNames = randomData(NAMES, wizardNubmder);
  var randomSurnames = randomData(SURNAMES, wizardNubmder);
  var randomCoatColors = randomData(COAT_COLORS, wizardNubmder);
  var randomEyesColors = randomData(EYES_COLORS, wizardNubmder);
  var wizards = [];
  for (var i = 0; i < wizardNubmder; i++) {
    wizards.push({
      name: randomNames[i] + ' ' + randomSurnames[i],
      coatColor: randomCoatColors[i],
      eyesColor: randomEyesColors[i]
    });
  }
  return wizards;
};

var creatFragmentWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(drawWizard(wizards[i]));
  }
  return fragment;
};

var userSetup = document.querySelector('.setup');
var similalListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['blue', 'green', 'yellow', 'red', 'black'];
var wizardNubmder = 4;

var wizards = creatArrWizards(wizardNubmder);
userSetup.classList.remove('hidden');
similalListElement.appendChild(creatFragmentWizards(wizards));
userSetup.querySelector('.setup-similar').classList.remove('hidden');
