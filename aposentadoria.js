const nome = 'Carlos'
const sexo = 'M'
const idade = 61
const contribuicao = 34

const inss = (idade + contribuicao) 

if ((((contribuicao >= 30) && sexo === 'F') || inss >= 85) && ((( contribuicao >= 35 ) && sexo === 'M') || inss >= 95)) {
    if  (((contribuicao >= 30) && sexo === 'F') || (( contribuicao >= 35) && sexo ==='M')) {
      console.log('Você pode se aposentar!')// Condição 1 e 2 passaram
    } else { 
      console.log('Você aposentou por Idade + Tempo Contribuição!')// Condição 1 passou, porém condição 2 não passou
    }
  } else  {
    console.log('Você ainda não pode se aposentar!')// Condição 1 não passou
  }
