let nav_items = document.getElementsByClassName('navbar-items-phone');

for (let item of nav_items) {
  item.addEventListener('click', (event) => {
    let previous_selected_item =
      document.getElementsByClassName('li-active')[0];

    if (previous_selected_item !== undefined)
      previous_selected_item.classList.remove('li-active');

    event.target.classList.add('li-active');
  });
}
