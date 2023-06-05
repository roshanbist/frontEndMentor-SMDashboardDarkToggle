const darkRadioButton = document.querySelector('#dark');
const lightRadioButton = document.querySelector('#light');
const radioButtons = document.getElementsByName('theme');

radioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    darkRadioButton.checked ? setDarkMode() : setLightMode();
  });
});

const setLightMode = () => {
  document.body.classList = 'light';
  localStorage.setItem('colorMode', 'light');
  lightRadioButton.click();
};

const setDarkMode = () => {
  document.body.classList = 'dark';
  localStorage.setItem('colorMode', 'dark');
  darkRadioButton.click();
};

const localStorageColorMode = () => {
  return localStorage.getItem('colorMode');
};

const systemPreferenceColorMode = () => {
  console.log('i am called');
  console.log(
    'k hyo yo',
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const loadColorMode = () => {
  const theme = localStorageColorMode() || systemPreferenceColorMode();
  theme === 'dark' ? setDarkMode() : setLightMode();
};

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    e.matches ? darkRadioButton.click() : lightRadioButton.click();
  });

loadColorMode();
