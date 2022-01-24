const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', e => handleClick(e));

function handleClick(e) {
  const target = e.target;
  const tabNum = target.dataset.tab;
  const activeTab = document.querySelector('.tabs .active');
  const activeContent = document.querySelector('.content .visible');
  const currentContent = document.querySelector(
    `.content__section[data-tab='${tabNum}']`
  );
  
  if (!tabNum) {
    return;
  }
  
  activeTab.classList.remove('active');
  target.classList.add('active');
  activeContent.classList.remove('visible');
  currentContent.classList.add('visible');
}

