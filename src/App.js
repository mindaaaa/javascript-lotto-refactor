import LottoManager from './domain/LottoManager.js';
import ConsoleInput from './infrastructure/ConsoleInput.js';
import ConsoleOutput from './infrastructure/ConsoleOutput.js';
import MatchingLotto from './domain/MatchingLotto.js';
import ProfitCalculator from './domain/ProfitCalculator.js';

class App {
  async run() {
    const purchaseAmount = await this.getValidatedPurchaseAmount();
    const ticketCount = purchaseAmount / 1000;

    // 로또 발행
    const machine = new LottoMachine(ticketCount);
    const tickets = machine.issue();
    this.#printIssuer(ticketCount, tickets);

    const winningNumbers = await this.getValidatedWinningNumbers();
    const bonusNumber = await this.getValidatedBonusNumber();

    // 로또 맞추기
    const matchingLotto = new MatchingLotto(
      winningNumbers,
      bonusNumber,
      tickets
    );
    const reward = matchingLotto.match();
    this.#printMatchingResult(reward);

    // 수익률 계산
    const profitCalculator = new ProfitCalculator(purchaseAmount, reward);
    const profit = profitCalculator.calculate();
    this.#printProfit(profit);
  }

  // TODO: 구입 금액
  async getValidatedPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await this.#getPurchaseAmount();
        //const validator = new Validator(purchaseAmount);
        //validator.validateMethod();

        return purchaseAmount;
      } catch (error) {
        ConsoleOutput.writeError(error.message);
      }
    }
  }

  async #getPurchaseAmount() {
    const input = await ConsoleInput.read('구입금액을 입력해 주세요.\n');
    return Number(input);
  }

  // TODO: 당첨번호
  async getValidatedWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.#getWinningNumbers();
        //const validator = new Validator(winningNumbers);
        //validator.validateMethod();

        return winningNumbers;
      } catch (error) {
        ConsoleOutput.writeError(error.message);
      }
    }
  }

  async #getWinningNumbers() {
    const input = await ConsoleInput.read('\n당첨 번호를 입력해 주세요.\n');
    return input.split(',').map((item) => Number(item.trim()));
  }

  // TODO: 보너스 번호
  async getValidatedBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await this.#getBonusNumber();
        //const validator = new Validator(bonusNumber);
        //validator.validateMethod();

        return bonusNumber;
      } catch (error) {
        ConsoleOutput.writeError(error.message);
      }
    }
  }
  async #getBonusNumber() {
    const input = await ConsoleInput.read('\n보너스 번호를 입력해 주세요.\n');
    return Number(input);
  }

  #printIssuer(ticketCount, tickets) {
    ConsoleOutput.write(`${ticketCount}개를 구매했습니다.\n`);
    tickets.forEach((ticket) => ConsoleOutput.write(`${ticket}\n`));
  }

  #printMatchingResult(reward) {
    ConsoleOutput.write(`\n당첨 통계\n`);
    ConsoleOutput.write('---\n');
    ConsoleOutput.write(
      `3개 일치 (5,000원) - ${reward.find((item) => item.rank === 3).count}개\n`
    );
    ConsoleOutput.write(
      `4개 일치 (50,000원) - ${
        reward.find((item) => item.rank === 4).count
      }개\n`
    );
    ConsoleOutput.write(
      `5개 일치 (1,500,000원) - ${
        reward.find((item) => item.rank === 5).count
      }개\n`
    );
    ConsoleOutput.write(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        reward.find((item) => item.rank === 7).count
      }개\n`
    );
    ConsoleOutput.write(
      `6개 일치 (2,000,000,000원) - ${
        reward.find((item) => item.rank === 6).count
      }개\n`
    );
  }

  #printProfit(profit) {
    ConsoleOutput.write(`\n총 수익률은 ${profit}입니다.`);
  }
}

export default App;
