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
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var similalListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['blue', 'green', 'yellow', 'red', 'black'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardNubmder = 4;
var wizards = creatArrWizards(wizardNubmder);
var eyes = document.querySelector('.wizard-eyes');
var coat = document.querySelector('.wizard-coat');
var fireball = document.querySelector('.setup-fireball-wrap');
var inputCoatColor = document.querySelector('input[name=\'coat-color\']');
var inputEyesColor = document.querySelector('input[name=\'eyes-color\']');
var inputFireballColor = document.querySelector('input[name=\'fireball-color\']');
similalListElement.appendChild(creatFragmentWizards(wizards));
setup.querySelector('.setup-similar').classList.remove('hidden');


// //////////////// обработка событий, зарытие открытие окна

var changeEyeColor = function (evt) {
  var timeData = randomData(EYES_COLORS, 1)[0];
  evt.target.style.fill = timeData;
  inputEyesColor.value = timeData;
};

var changeCoatColor = function (evt) {
  var timeData = randomData(COAT_COLORS, 1)[0];
  evt.target.style.fill = randomData(COAT_COLORS, 1)[0];
  inputCoatColor.value = timeData;
};

var changeFireballColor = function (evt) {
  var timeData = randomData(FIREBALL_COLOR, 1)[0];
  evt.currentTarget.style.background = randomData(FIREBALL_COLOR, 1)[0];
  inputFireballColor.value = timeData;
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== document.querySelector('.setup-user-name')) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  eyes.addEventListener('click', changeEyeColor);
  coat.addEventListener('click', changeCoatColor);
  fireball.addEventListener('click', changeFireballColor);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  eyes.removeEventListener('click', changeEyeColor);
  coat.removeEventListener('click', changeCoatColor);
  fireball.removeEventListener('click', changeFireballColor);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
// ///////////////
