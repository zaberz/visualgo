import {BUB, SEL, INS, MER, QUI, COU, RAD} from '@src/sorting';


const waitSort = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const waitSort2 = [8, 9, 7, 6, 5, 3, 4, 5, 1, 2];
const deal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const deal2 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
describe('Sorting', function () {
    it('BUB', function () {
        expect(BUB(waitSort)).toEqual(deal);
        expect(BUB(waitSort2)).toEqual(deal2);
    });

    it('SEL', () => {
        expect(SEL(waitSort)).toEqual(deal);
        expect(SEL(waitSort2)).toEqual(deal2);

    });

    it('INS', () => {
        expect(INS(waitSort)).toEqual(deal);
        expect(INS(waitSort2)).toEqual(deal2);
    });

    it('MER', () => {
        expect(MER(waitSort)).toEqual(deal);
        expect(MER(waitSort2)).toEqual(deal2);
    });
    it('QUI', () => {
        expect(QUI(waitSort)).toEqual(deal);
        expect(QUI(waitSort2)).toEqual(deal2);
    });
    it('COU', () => {
        expect(COU(waitSort)).toEqual(deal);
        expect(COU(waitSort2)).toEqual(deal2);
    });

    it('RAD', () => {
        const radArr = [33, 1, 100, 32, 31, 11, 12, 13, 45, 46, 47, 21, 22, 23];
        const resArr = [1, 11, 12, 13, 21, 22, 23, 31, 32, 33, 45, 46, 47, 100];
        // expect(RAD(radArr)).toEqual(resArr);
        // expect(RAD(waitSort)).toEqual(deal);
        // expect(RAD(waitSort2)).toEqual(deal2);
    });
});
