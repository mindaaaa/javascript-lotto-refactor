import ProfitCalculator from '../../src/domain/ProfitCalculator.js';

describe('ProfitCalculator 클래스 단위테스트', () => {
  let calculator;

  beforeEach(() => {
    const purchaseAmount = 14000;
    const prizeObject = [
      { rank: 6, count: 0, prize: 2000000000 },
      { rank: 7, count: 1, prize: 30000000 },
      { rank: 5, count: 1, prize: 1500000 },
      { rank: 4, count: 0, prize: 50000 },
      { rank: 3, count: 1, prize: 5000 },
      { rank: 0, count: 3, prize: 0 },
    ];

    calculator = new ProfitCalculator(purchaseAmount, prizeObject);
  });

  test('calculate는 수익률을 소수점 둘째자리에서 반올림한 값을 반환한다.', () => {
    // when
    const result = calculator.calculate();

    // then
    expect(result).toBe(224935.7);
  });

  test('filterObjectByKeys는 특정 키만 포함하는 새로운 객체를 생성한다.', () => {
    // given
    const mockObject = { rank: 7, count: 1, prize: 30000000 };

    // when
    const result = calculator.filterObjectByKeys(mockObject, [
      'count',
      'prize',
    ]);

    // then
    expect(result).toEqual({ count: 1, prize: 30000000 });
  });
});
