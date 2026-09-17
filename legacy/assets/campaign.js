(function () {
  const buttons = document.querySelectorAll('[data-campaign]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'order_click',
        campaign: button.dataset.campaign,
        placement: button.dataset.placement || 'page'
      });
    });
  });

  const chips = document.querySelectorAll('.chip');
  if (!chips.length) return;

  const state = { protein: 'chicken', format: 'bowl' };
  const names = {
    'chicken-bowl': ['Chicken over rice', 'Grilled chicken, Box’d basmati rice, house salad, white sauce and hot sauce.'],
    'lamb-bowl': ['Lamb over rice', 'Slow-cooked gyro lamb, Box’d basmati rice, house salad, white sauce and hot sauce.'],
    'steak-bowl': ['Steak over rice', 'Thinly sliced rib-eye, Box’d basmati rice, house salad, white sauce and hot sauce.'],
    'chicken-wrap': ['Chicken wrap', 'Grilled chicken, vegetables and feta folded into Box’d pita.'],
    'lamb-wrap': ['Lamb wrap', 'Gyro lamb, vegetables and feta folded into Box’d pita.'],
    'steak-wrap': ['Steak wrap', 'Thinly sliced rib-eye, vegetables and feta folded into Box’d flatbread.']
  };

  const update = () => {
    const item = names[`${state.protein}-${state.format}`];
    document.querySelector('#result-name').textContent = item[0];
    document.querySelector('#result-copy').textContent = item[1];
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const group = chip.dataset.group;
      state[group] = chip.dataset.value;
      document.querySelectorAll(`[data-group="${group}"]`).forEach((item) => item.setAttribute('aria-pressed', String(item === chip)));
      update();
    });
  });
})();
