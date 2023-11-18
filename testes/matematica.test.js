const {sum, subtracao, divisao} = require('./sum');
const { verificarIdade, shoppingList } = require('./outrasfuncoes')

describe("Testando calculadora",()=>{
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
    })
    
    test('Subtrair 2 - 1 to equal 1', () => {
        expect(subtracao(2,1)).toBe(1);
    })
    
    test('Dividir 10 / 2 to equal 5', () => {
      expect(divisao(10,2)).toBe(5)
    })
    
    test('Dividir 10 / 0 throw exception', () => {
      expect(()=>divisao(10,0)).toThrow()
      expect(()=>divisao(10,0)).toThrow("Um numero não pode ser dividido por ")
    })
})

describe('Diversas funções',()=>{
  test('Idade == 17 deve retornar menor',()=>{
      const retorno = verificarIdade(17)
      expect(retorno).toBe('menor')
  })

  test('Lança exception se idade não é numérico',()=>{
     expect(()=>verificarIdade('a')).toThrow()
  })
})

describe('Testando lista de compras',()=>{
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');    
  });

  test('the shopping list hasnot Torresmo on it', () => {
    expect(shoppingList).not.toContain('Torresmo');    
  });

})