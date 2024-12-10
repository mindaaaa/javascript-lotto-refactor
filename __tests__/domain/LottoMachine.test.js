import LottoMachine from '../../src/domain/LottoMachine.js';
import Lotto from '../../src/domain/Lotto.js';

describe('LottoMachine클래스 단위테스트', () => {
  test('issue는 ticketCount만큼 로또를 발행한다.', () => {
    // given
    const ticketCount = 4;
    const lottoMachine = new LottoMachine(ticketCount);

    // when
    const result = lottoMachine.issue();

    // then
    expect(result).toHaveLength(4);
    result.forEach((ticket) => {
      expect(ticket).toBeInstanceOf(Lotto);
    });
    result.forEach((ticket) => {
      expect(ticket.getNumbers()).toHaveLength(6);
    });
  });
});
