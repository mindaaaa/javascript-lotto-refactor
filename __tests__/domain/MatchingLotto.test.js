import Lotto from '../../src/domain/Lotto.js';
import MatchingLotto from '../../src/domain/MatchingLotto.js';

describe('MatchingLotto 클래스 단위테스트', () => {
  let tickets; // note: beforeEach 선언은 꼭 describe 절에서!!

  beforeEach(() => {
    tickets = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([7, 8, 9, 10, 11, 12])];
  });

  test('match는 당첨 번호 매칭 결과에 따라 REWARD 객체가 업데이트된다.', () => {
    // given
    const winningNumbers = [7, 8, 9, 21, 24, 27];
    const bonusNumber = 30;

    const matching = new MatchingLotto({
      winningNumbers,
      bonusNumber,
      tickets,
    });

    // when
    const reward = matching.match();

    // then
    const updateReward = reward.find((reward) => reward.rank === 3);
    expect(updateReward.count).toBe(1);
  });

  test('당첨 번호가 5개 매칭되면 보너스 번호와 매칭(true)되어 최종 결과가 업데이트된다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 11];
    const bonusNumber = 6;

    const matching = new MatchingLotto({
      winningNumbers,
      bonusNumber,
      tickets,
    });

    // when
    const reward = matching.match();

    // then
    const updateReward = reward.find((reward) => reward.rank === 7);
    expect(updateReward.count).toBe(1);
  });

  test('당첨 번호가 5개 매칭되면 보너스 번호와 매칭(false)되어 최종 결과가 업데이트된다.', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 18];
    const bonusNumber = 7;

    const matching = new MatchingLotto({
      winningNumbers,
      bonusNumber,
      tickets,
    });

    // when
    const reward = matching.match();

    // then
    const updateReward = reward.find((reward) => reward.rank === 5);
    expect(updateReward.count).toBe(1);
  });
});
