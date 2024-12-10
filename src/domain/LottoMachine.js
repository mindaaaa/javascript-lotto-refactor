import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

// 발행할 티켓 개수를 입력받아 티켓을 발매한다.
class LottoMachine {
  #ticketCount;

  constructor(ticketCount) {
    this.#ticketCount = ticketCount;
  }

  // [[ticket1], [ticket2] ...생략 ]
  issue() {
    const tickets = [];

    for (let i = 0; i < this.#ticketCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );

      tickets.push(new Lotto(numbers));
    }
    return tickets;
  }
}

export default LottoMachine;
