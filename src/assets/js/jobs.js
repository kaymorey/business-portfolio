export default function jobs(titles) {
  const el = document.querySelector('.js-job');
  let index = 0;

  setInterval(() => {
    index += 1;

    if (index === titles.length) {
      index = 0;
    }

    el.textContent = titles[index];
  }, 1000);
}