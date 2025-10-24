import Car from '../../src/Car';
import { Random } from '@woowacourse/mission-utils';

describe('4 이상일 때 자동차가 움직이는지 테스트', () => {
  test('자동차가 4 이상일 때 움직인다', () => {
    const mockRandom = jest.spyOn(Random, 'pickNumberInRange');
    mockRandom.mockReturnValueOnce(4);
    const car = new Car('pobi');
    car.move();
    expect(car.getDistance()).toBe(1);
  });

  test('자동차가 3 이하일 때 정지한다.', () => {
    const mockRandom = jest.spyOn(Random, 'pickNumberInRange');
    mockRandom.mockReturnValueOnce(3);
    const car = new Car('woni');
    car.move();
    expect(car.getDistance()).toBe(0);
  });
});
