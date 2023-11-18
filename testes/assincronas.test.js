const { myPromise, getEndereco } = require('./outrasfuncoes')

test('testando promisse com callback', () => {
    return myPromise.then(data => {
      expect(data).toBe('OK');
    });
});

test('testando promisse com assync', async() => {
    const data = await myPromise;
    expect(data).toBe('OK');
});

test('Verificar se API retornou logradouro', async() => {
    var data = await getEndereco() 
    data = JSON.stringify(data)   
    expect(data).toMatch(/logradouro/);
});


