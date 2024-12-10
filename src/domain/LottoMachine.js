import { Random } from '@woowacourse/mission-utils';

// 발행할 티켓 개수를 입력받아 티켓을 발매한다.
class LottoMachine {
  #ticketCount;

  constructor(ticketCount) {
    this.#ticketCount = ticketCount;
  }

  // [[ticket1], [ticket2] ...생략 ]
  issue() {
    const tickets = [];

    for (let i = 0; i <= this.#ticketCount; i++) {
      tickets.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    console.log(tickets);
    return tickets;
  }
}

export default LottoMachine;
