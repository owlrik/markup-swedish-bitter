const tabComponents = document.querySelectorAll('.tabs');

const initTabs = () => {
  if (!tabComponents) {
    return;
  }

  tabComponents.forEach((tabComponent) => {
    const tabLinks = tabComponent.querySelectorAll('.tabs__link');
    const tabPanels = tabComponent.querySelectorAll('.tabs__content-item');

    const clearTabLinksActiveClass = () => {
      tabLinks.forEach((tabLink) => {
        tabLink.closest('.tabs__link-wrap').classList.remove('tabs__link-wrap--active');
      });
    };

    const clearTabPanelsActiveClass = () => {
      tabPanels.forEach((tabPanel) => {
        tabPanel.classList.remove('tabs__content-item--active');
      });
    };

    tabLinks.forEach((tabLink) => {
      tabLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        clearTabLinksActiveClass();
        clearTabPanelsActiveClass();

        tabLink.closest('.tabs__link-wrap').classList.add('tabs__link-wrap--active');
        const linkedPanel = tabComponent.querySelector('section#' + tabLink.href.split('#').slice(-1).pop());
        linkedPanel.classList.add('tabs__content-item--active');
      })
    })
  });
};

export {initTabs};
