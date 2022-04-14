import arrayGenerator from "./array_generator"
import CONSTANTS from "./CONSTANTS"
import swap from "./swap"


test('arrayGenerator should generate array', ()=>{
    const length = 100
    const array = arrayGenerator(length)
    expect(array).toHaveLength(length)
})



test('swap the item in array',()=>{
    const array = [1,2]
    swap(array, 0, 1);
    expect(array).toEqual([2,1])
})

it('constants shouldn\'t be null',()=>{
   
    expect(CONSTANTS).toHaveProperty('ARR_LEN')
    expect(CONSTANTS).toHaveProperty('DELAY')
    expect(CONSTANTS).toHaveProperty('ACCESSED_COLOUR')
    expect(CONSTANTS).toHaveProperty('SORTED_COLOUR')
})

