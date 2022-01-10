import { mc2 } from './mc2';
describe('mc2', () => {
    it('should return 539253107242090560 if input is m = 6', () => {
        const result = mc2(6);
        expect(result).toBe(539253107242090560);
    });
    it('should return 449377589368408800 if input is m = 5 ', () => {
        const result = mc2(5);
        expect(result).toBe(449377589368408800);
    });
    it('should return 629128625115772300 if input is m = 7', () => {
        const result = mc2(7);
        expect(result).toBe(629128625115772300);
    });
    it('should return 898755178736817700 if input is m = 10', () => {
        const result = mc2(10);
        expect(result).toBe(898755178736817700);
    });
    it('should return 0 if input is m = 0', () => {
        const result = mc2(0);
        expect(result).toBe(0);
    });
    
});