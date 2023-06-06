const radioButtons = document.getElementsByName('theme');
const darkRadioButton = document.querySelector('#dark');
const lightRadioButton = document.querySelector('#light');

const setDarkMode = () => {
  document.body.classList = 'dark';
  localStorage.setItem('colorMode', 'dark');
};

const setLightMode = () => {
  document.body.classList = 'light';
  localStorage.setItem('colorMode', 'light');
};

const localStorageColorMode = () => {
  return localStorage.getItem('colorMode');
};

const systemPreferenceColorMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

radioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    darkRadioButton.checked ? setDarkMode() : setLightMode();
  });
});

const selectedColorMode = () => {
  const theme = localStorageColorMode() || systemPreferenceColorMode();
  theme === 'dark' ? darkRadioButton.click() : lightRadioButton.click();
};

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    e.matches ? darkRadioButton.click() : lightRadioButton.click();
  });

selectedColorMode();
