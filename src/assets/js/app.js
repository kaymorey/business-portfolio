import '../scss/app.scss';
import jobs from './jobs';

document.addEventListener('DOMContentLoaded', () => {
  const titles = ['code lover', 'coffee addict', 'front-end web developer'];
  jobs(titles);
});