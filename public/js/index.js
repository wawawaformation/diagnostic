
/**
 * reWriteNav : réécrit les liens du menu selon la taille du display
 */
reWriteNav = ()=>{
    
    if(window.matchMedia("(max-width: 920px)").matches){
        
        document.querySelector('#header .titres-pro a').textContent = "Titres pro"
        document.querySelector('#header .formations-courtes a').textContent = "Entreprises"
        document.querySelector('#header .formations-salaries a').textContent = "Catalogue"  
        document.querySelector('#footer .titres-pro a').textContent = "Titres pro"
        document.querySelector('#footer .formations-courtes a').textContent = "Entreprises"
        document.querySelector('#footer .formations-salaries a').textContent = "Catalogue" 
    }else{
        document.querySelector('#header .titres-pro a').textContent = "Titres professionnels"
        document.querySelector('#header .formations-courtes a').textContent = "Formations courtes"
        document.querySelector('#header .formations-salaries a').textContent = "Formations en entreprises"  
        document.querySelector('#footer .titres-pro a').textContent = "Titres professionnels"
        document.querySelector('#footer .formations-courtes a').textContent = "Formations courtes"
        document.querySelector('#footer .formations-salaries a').textContent = "Formations en entreprises" 
    }
}

window.addEventListener('load', reWriteNav)
window.addEventListener('resize', reWriteNav)