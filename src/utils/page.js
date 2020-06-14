import { getParams } from './url';

export const goPage = (pageId) => {
  const job = getParams('job');
  const node = document.getElementById(pageId);

  const index = node ? pageId.replace('page_', '') : '1';
  window.location.search = `job=${job}&page=${index}`;
}