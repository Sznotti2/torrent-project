import { CamelizePipe } from './camelize.pipe';

describe('CamelizePipe', () => {
  it('create an instance', () => {
    const pipe = new CamelizePipe();
    expect(pipe).toBeTruthy();
  });
});
