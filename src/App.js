import LottoManager from './domain/LottoManager.js';
import ConsoleInput from './infrastructure/ConsoleInput.js';
import ConsoleOutput from './infrastructure/ConsoleOutput.js';

class App {
  async run() {
    const purchaseAmount = await this.getValidatedPurchaseAmount();
    const ticketCount = purchaseAmount / 1000;

    const winningNumbers = await this.getValidatedWinningNumbers();
    const bonusNumber = await this.getValidatedBonusNumber();

    // TODO: LottoMachine.issue()로 tickets 배열도 가져오기
    const lotto = {
      winningNumbers,
      bonusNumber,
      tickets,
    };

    // TODO: 결과값 저장
    // const instance = new LottoManager();
    // const result = instance.methodName();

    // TODO: 출력 형식에 맞게 출력
    // this.printResult(result);
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

  // 8000
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

  // [1,2,3,4,5,6]
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
  // 7
  async #getBonusNumber() {
    const input = await ConsoleInput.read('\n보너스 번호를 입력해 주세요.\n');
    return Number(input);
  }

  // TODO: 출력값 맞춰 출력
  printResult(result) {
    ConsoleOutput.write(`출력 형식`);
  }
}

export default App;
