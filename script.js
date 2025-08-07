if (localStorage.getItem('visitas') === null) {
    localStorage.setItem('visitas', 0);
}

var visitas = parseInt(localStorage.getItem('visitas'));
visitas += 1;
localStorage.setItem('visitas', visitas);

document.getElementById('contador').innerHTML = 'Visitantes: ' + visitas;