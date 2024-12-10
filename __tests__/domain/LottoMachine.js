import LottoMachine from '../../src/domain/LottoMachine';

describe('LottoMachine클래스 단위테스트', () => {
  test('issue는 ticketCount만큼 로또를 발행한다.', () => {
    // given
    const ticketCount = 4;
    const lottoMachine = new LottoMachine(ticketCount);

    // when
    const result = lottoMachine.issue();

    // then
    expect(result).toHaveLength(4);
    expect(result[1]).toHaveLength(6);
  });
});
