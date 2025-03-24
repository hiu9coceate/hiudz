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
    
    document.querySelector('.baga').addEventListener('click', function(event) {
        event.preventDefault();
        const menudv = document.querySelector('.list-group');
        if (menudv.style.display === 'none' || menudv.style.display === '') {
            menudv.style.display = 'block'; 
        }
        else {
            menudv.style.display='none';
        }
    });
