import App from '../../src/App';

describe('우승자 선정 로직 테스트', () => {
  test('가장 멀리 간 자동차를 우승자로 선정한다', () => {
    const app = new App();
    app.setCars('pobi,crong,honux');

    const cars = app.getCars();
    cars[0].distance = 3;
    cars[1].distance = 5;
    cars[2].distance = 2;

    const winners = app.getWinners();

    expect(winners.length).toBe(1);
    expect(winners[0].getName()).toBe('crong');
  });

  test('공동 우승자가 여러 명일 수 있다', () => {
    const app = new App();
    app.setCars('pobi,crong,honux');

    const cars = app.getCars();
    cars[0].distance = 5;
    cars[1].distance = 5;
    cars[2].distance = 3;

    const winners = app.getWinners();

    expect(winners.length).toBe(2);
    expect(winners[0].getName()).toBe('pobi');
    expect(winners[1].getName()).toBe('crong');
  });
});
