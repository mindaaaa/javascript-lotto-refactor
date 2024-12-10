class Validator {
  validatePurchaseAmount(purchaseAmount) {
    if (!this.#isValidateDivisible(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액은 1,000 단위로 나눠떨어져야합니다.');
    }

    if (this.#isValidateAmountNaN(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액을 숫자로 입력해주세요.');
    }
  }

  #isValidateDivisible(purchaseAmount) {
    return purchaseAmount % 1000 === 0;
  }

  #isValidateAmountNaN(purchaseAmount) {
    return isNaN(purchaseAmount);
  }

  validateWinningNumbers(winningNumbers) {
    if (!this.#validateUniqueNumbers(winningNumbers)) {
      throw new Error(
        '[ERROR] 로또 당첨번호는 중복되지 않는 숫자로 이루어져있습니다.'
      );
    }

    if (this.#validateNumbersNaN(winningNumbers)) {
      throw new Error('[ERROR] 로또는 숫자로만 이루어져있어야합니다.');
    }
  }

  #validateUniqueNumbers(winningNumbers) {
    const uniqueValues = new Set(winningNumbers);
    return uniqueValues.size === winningNumbers.length;
  }

  #validateNumbersNaN(winningNumbers) {
    winningNumbers.some(isNaN(number));
  }

  // 보너스번호랑 중복 안되는지
  validateBonusNumbers(winningNumbers, bonusNumber) {
    if (this.#validateNumberNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호를 숫자로 입력해주세요.');
    }

    if (!this.#validateDuplicateNumbers(winningNumbers, bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  #validateNumberNaN(bonusNumber) {
    return isNaN(bonusNumber);
  }

  #validateDuplicateNumbers(winningNumbers, bonusNumber) {
    return winningNumbers.includes(bonusNumber);
  }
}

export default Validator;
