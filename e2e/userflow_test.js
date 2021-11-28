Feature('userflow');

Scenario('test something', ({ I }) => {
  I.amOnPage('/');
  I.see('Macbook Pro');
  I.see('일당');
  I.see('10000');
  I.see('보증금');
  I.see('150000');

  // TODO: API 모킹을 위해 MSW 설치
});
