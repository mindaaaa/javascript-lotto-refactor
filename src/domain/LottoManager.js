import LottoMachine from './LottoMachine.js';
import MatchingLotto from './MatchingLotto.js';
import ProfitCalculator from './ProfitCalculator.js';

class LottoManager {
  #purchaseAmount;
  #ticketCount;
  #winningNumbers;
  #bonusNumbers;

  constructor({ purchaseAmount, ticketCount, winningNumbers, bonusNumber }) {
    this.#purchaseAmount = purchaseAmount;
    this.#ticketCount = ticketCount;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumbers = bonusNumber;
  }
  release() {
    const machine = new LottoMachine(this.#ticketCount);
    // 로또 발행
    const tickets = machine.issue();

    const params = {
      winningNumbers: this.#winningNumbers,
      bonusNumbers: this.#bonusNumbers,
      tickets,
    };

    // 로또 맞추기
    const matchingLotto = new MatchingLotto(params);
    const reward = matchingLotto.match();

    // 수익률 계산
    const profitCalculator = new ProfitCalculator(this.#purchaseAmount, reward);
    const profit = profitCalculator.calculate();

    // 필요한 데이터 반환
    return { tickets, reward, profit };
  }
}

// tickets
//[ Lotto {}, Lotto {}, Lotto {}, Lotto {} ]

// reward
// [
//     { rank: 6, count: 0, prize: 2000000000 },
//     { rank: 7, count: 1, prize: 30000000 },
//     { rank: 5, count: 1, prize: 1500000 },
//     { rank: 4, count: 0, prize: 50000 },
//     { rank: 3, count: 1, prize: 5000 },
//     { rank: 0, count: 3, prize: 0 }
//   ]

// profit
// 121.3
export default LottoManager;
