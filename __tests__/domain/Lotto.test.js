import Lotto from '../../src/domain/Lotto.js';

describe('Lotto클래스 단위테스트', () => {
  test('numbers가 6개로 이뤄지지 않는 경우 에러를 던진다.', () => {
    // given
    const numbers = [1, 2, 3, 4, 5];

    // when/then
    expect(() => new Lotto(numbers)).toThrow('[ERROR]');
  });

  test('numbers가 중복되면 에러를 던진다.', () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 5];

    // when/then
    expect(() => new Lotto(numbers)).toThrow('[ERROR]');
  });

  // getNumbers 메서드는 로또 번호를 가져올 수 있다.
  test('getNumbers 메서드는 로또 번호를 가져올 수 있다.', () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);

    // when
    const result = lotto.getNumbers();

    // then
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('toString 메서드는 로또 번호를 문자열로 반환한다.', () => {
    // given
    const numbers = [8, 21, 23, 41, 42, 43];
    const lotto = new Lotto(numbers);

    // when
    const result = lotto.toString();

    // then
    expect(result).toBe('[8, 21, 23, 41, 42, 43]');
  });
});
