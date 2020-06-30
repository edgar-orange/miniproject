const getTotal = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
};

describe('getTotal()', () =>  {
    test('returns the toal sum of the array', () => {
        
        //Arange
        const input = [1, 2, 3, 4, 5 ];
        const expectedOut = 15;

        //Act
        const result = getTotal(input);

        //Assert 
        expect(result).toEqual(expectedOut);
    });
})