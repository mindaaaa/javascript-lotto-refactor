const REWARD = [
  { rank: 6, count: 0, prize: 2000000000 }, // 6개 일치
  { rank: 7, count: 0, prize: 30000000 }, // 5개 + 보너스 일치
  { rank: 5, count: 0, prize: 1500000 }, // 5개 일치
  { rank: 4, count: 0, prize: 50000 }, // 4개 일치
  { rank: 3, count: 0, prize: 5000 }, // 3개 일치
  { rank: 0, count: 0, prize: 0 },
];

class MatchingLotto {
  #winningNumbers;
  #bonusNumbers;
  #tickets;

  constructor({ winningNumbers, bonusNumber, tickets }) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumbers = bonusNumber;
    this.#tickets = tickets;
  }

  match() {
    this.#tickets.forEach((ticket) => {
      const matchCount = this.#findMatches(ticket);

      if (matchCount === 5) {
        this.#bonusMatch(ticket);
      } else {
        const reward = REWARD.find((reward) => reward.rank === matchCount);
        reward.count++;
      }
    });
  }

  #findMatches(ticket) {
    const matchedNumbers = ticket.filter((number) =>
      this.#winningNumbers.includes(number)
    );

    return matchedNumbers.length;
  }

  #bonusMatch() {
    const hasBonus = this.#isMatchWithBonus(ticket);

    if (hasBonus) {
      const reward = REWARD.find((reward) => reward.rank === 7);
      return reward.count++;
    }

    const reward = REWARD.find((reward) => reward.rank === 5);
    return reward.count++;
  }

  #isMatchWithBonus(ticket) {
    return ticket.includes(this.#bonusNumbers);
  }
}

export default MatchingLotto;
