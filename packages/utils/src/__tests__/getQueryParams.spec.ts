import { describe, it, expect } from 'vitest';
import getSearchParams from '../getSearchParams';

describe('url/getSearchParams', () => {
  it('should support null query', () => {
    expect(getSearchParams()).toEqual({});
  });

  it('should parse correctly', () => {
    expect(getSearchParams('?adid=2&materialId=333')).toEqual({
      adid: '2',
      materialId: '333',
    });
    expect(getSearchParams('adid=2&materialId=333&materialId=2333')).toEqual({
      adid: '2',
      materialId: '2333',
    });
  });
});
