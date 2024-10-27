import Stack from './stack';

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('should be empty when initialized', () => {
        expect(stack.isEmpty()).to.be.true;
    });

    it('should push elements onto the stack', () => {
        stack.push(1);
        expect(stack.isEmpty()).to.be.false;
        expect(stack.peek()).to.equal(1);
    });

    it('should pop elements from the stack', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).to.equal(2);
        expect(stack.pop()).to.equal(1);
        expect(stack.isEmpty()).to.be.true;
    });

    it('should peek at the top element without removing it', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).to.equal(2);
        expect(stack.pop()).to.equal(2);
        expect(stack.peek()).to.equal(1);
    });

    it('should return the correct size', () => {
        expect(stack.size()).to.equal(0);
        stack.push(1);
        expect(stack.size()).to.equal(1);
        stack.push(2);
        expect(stack.size()).to.equal(2);
        stack.pop();
        expect(stack.size()).to.equal(1);
    });
});