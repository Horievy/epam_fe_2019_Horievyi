import { MinutsToHoursPipe } from './minuts-to-hours.pipe';

describe('MinutsToHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutsToHoursPipe();
    expect(pipe).toBeTruthy();
  });
});
