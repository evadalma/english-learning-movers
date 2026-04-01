// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', function () {

	const menuBtn = document.querySelector('.menu_bar .bt-menu');
	const nav = document.querySelector('header nav');

	// 1. Manejar el menú principal para móviles
	if (menuBtn && nav) {
		menuBtn.addEventListener('click', function () {
			nav.classList.toggle('visible');
		});
	}

	// 2. Manejar los submenús
	const submenus = document.querySelectorAll('.submenu');

	submenus.forEach(function (submenu) {
		// Seleccionamos solo el span para evitar que el clic en los links active el toggle
		const desplegable = submenu.querySelector('.nivel-desplegable');

		if (desplegable) {
			desplegable.addEventListener('click', function (event) {
				event.stopPropagation(); // Evita que otros 'clicks' se disparen

				const children = submenu.querySelector('.children');
				if (children) {
					// La forma moderna de hacer un slideToggle es con CSS
					// pero para mantenerlo simple, haremos un toggle de display
					if (children.style.display === 'block') {
						children.style.display = 'none';
					} else {
						children.style.display = 'block';
					}
				}
			});
		}
	});

});
