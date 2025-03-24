document.querySelector('.btn-close').addEventListener('click', function() {
document.querySelector('.sale').style.display='none';

});

document.querySelector('.btnSE').addEventListener('click', function(event) {
    event.preventDefault(); 
    const menulogo = document.querySelector('.menulogo');
    if (menulogo.style.display === 'none' || menulogo.style.display === '') {
        menulogo.style.display = 'flex'; 
    } else {
        menulogo.style.display = 'none';
    }
});
