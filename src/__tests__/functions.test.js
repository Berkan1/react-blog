import { dateParser, getPageCount } from '../components/blog';

describe("Filter function", () => {
  test("2021 date variable is correctly formatted", () => {
    const input = "2021-01-07T12:00:00.000Z";
    
    const output = dateParser(input);
    
    expect(output).toEqual("07/01/2021");
  });

  test("2019 date variable is correctly formatted", () => {
    const input = "2019-03-04T15:05:05.000Z";
    
    const output = dateParser(input);
    
    expect(output).toEqual("04/03/2019");
  });
});

describe("Paging function", () => {
  test("Correct result returned for equal page sizes", () => {
    const input = [1,2,3,4,5,6];
    const itemsPerPage = 3;
    
    const output = getPageCount(input, itemsPerPage);
    
    expect(output).toEqual(2);
  });

  test("Correct result returned for unequal page sizes", () => {
    const input = [1,2,3,4,5,6,7];
    const itemsPerPage = 3;
    
    const output = getPageCount(input, itemsPerPage);
    
    expect(output).toEqual(3);
  });
});