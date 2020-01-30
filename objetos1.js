const prog = [
    {
        nome: "Carlão"},
        {idade: 35 },
        {tecnologias: [ {
                nome: 'C++',
                especialidade: 'Desktop'
            },
            {
                nome: 'Python',
                especialidade: 'Data Science'
            },
            {
                nome:'JavaScript',
                especialidade: 'Web/Mobile'
            }
        ]
    }
]
console.log(`O usuarios ${prog[0].nome} tem ${prog[1].idade} anos e usa a tecnologia ${prog[2].tecnologias[0].nome} com especialidade em ${prog[2].tecnologias[0].especialidade}.`)