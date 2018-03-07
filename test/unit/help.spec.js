import {swip,removeAndInsert} from '../../src/_help';

describe('help function', function () {
    it('swip',  () =>{
        expect(swip([1,2,3],1,2)).toEqual([1,3,2]);
    });
    it('removeAndInsert',  () =>{
        expect(removeAndInsert([1,2,3],2,0)).toEqual([3,1,2]);
    });
});