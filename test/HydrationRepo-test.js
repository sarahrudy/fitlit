import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';

describe('HydrationRepository', () => {
  let hydrationRepository
  let allHydroData = [{
    "userID": 1,
    "date":"2019/06/15",
    "numOunces": 37
  },
  {
    "userID": 2,
    "date":"2019/06/15",
    "numOunces": 75
  },
  {
    "userID": 3,
    "date":"2019/06/15",
    "numOunces": 47
  },
  {
    "userID": 4,
    "date":"2019/06/15",
    "numOunces": 85
  },
  {
    "userID": 5,
    "date":"2019/06/15",
    "numOunces": 42
  },
  {
    "userID": 6,
    "date":"2019/06/15",
    "numOunces": 87
  },
  {
    "userID": 7,
    "date":"2019/06/15",
    "numOunces": 94
  },
  {
    "userID": 8,
    "date":"2019/06/15",
    "numOunces": 84
  },
  {
    "userID": 9,
    "date":"2019/06/15",
    "numOunces": 39
  },
  {
    "userID": 10,
    "date":"2019/06/15",
    "numOunces": 75
  }
];
  
  beforeEach(() => {
    hydrationRepository = new HydrationRepository(allHydroData)
  })

  it('should be function', () => {
    expect(HydrationRepository).to.be.a('function')
  })

  it('should be an instance of HydrationRepository', () => {
    expect(hydrationRepository).to.be.an.instanceOf(HydrationRepository)
  })

  it('should return all hydration data', () => {
    expect(hydrationRepository.hydroData).to.equal(allHydroData)
  })
})
