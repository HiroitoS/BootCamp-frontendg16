const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
    function contarOvejas(ovejas) {
        const filtro=[]
        for(let i=0; i<= ovejas.lenght ;i++){
            
        if(ovejas[i].name.toLowerCase().includes('a','n') && ovejas[i].color === 'rojo'){
            filtro.push(ovejas[i])
            }
        }
        return filtro
    }
    const ovejaselec = contarOvejas(ovejas)
    
    console.log(ovejaselec)


    