import '../scss/app.scss';
import '../../index.html';
import Splitting from 'splitting';
import jobs from './jobs';

document.addEventListener('DOMContentLoaded', () => {
  const titles = ['code lover', 'coffee addict', 'front-end web developer'];
  jobs(titles);

  Splitting();
});