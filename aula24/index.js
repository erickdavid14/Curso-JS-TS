
/* if pode ser usado sozinho com a condiçao dele:
const hora = 14;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}
 */
//sempre que utilizo a palavra else preciso de um if antes
//eu posso ter varios else if na checagem
//e so posso ter um else na minha checagem
// Podemos usar condiçoes sem else if utilizando apenas o if e else

/* 
const hora = 14;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >=12 && hora <=17) {
    console.log('Boa tarde');
 } else if (hora >=18 && hora <=23 ) {
    console.log('Boa noite');
 }
 */

const tenhoGrana = 0;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}