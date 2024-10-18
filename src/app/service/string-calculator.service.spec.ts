import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });
  it('should return 1 for number itself', () => {
    expect(service.add('1')).toBe(1);
  });
  it('should return sum for two numbers', () => {
    expect(service.add('1,2')).toBe(3);
  });
  it('should return sum for n number of numbers', () => {
    expect(service.add('1,2,3,4,5')).toBe(15);
  });
  it('should handle new line as a delimiter', () => {
    expect(service.add("1\n2,3")).toBe(6);
  });
  it('should handle custom delimiters', () => {
    expect(service.add("//;\n1;2")).toBe(3);
  });
});
