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
  // it('should throw an exception for negative numbers', () => {
  //   expect(service.add("1,-2")).toThrowError('Negative numbers not allowed: -2');
  // });

  it('should throw an exception for negative numbers', () => {
    expect(() => {
      service.add("1,-2");
    }).toThrowError('Negative numbers not allowed: -2');
  });

  it('should throw an exception for multiple negative numbers', () => {
    expect(() => service.add("1,-2,-3")).toThrowError('Negative numbers not allowed: -2,-3');
  });
  it('Ignore values greater than 1000', () => {
    expect(service.add("2,1001")).toBe(2);
  });
  it('handling delimiters can be of any length', () => {
    expect(service.add("//[***]\n1***2***3")).toBe(6);
  });
  it('Allow multiple delimiters', () => {
    expect(service.add("//[*][%]\n1*2%3")).toBe(6);
  });
  it('handle multiple delimiters with length longer than one char', () => {
    expect(service.add("//[***][%%][;;]\n1***2%%3;;4")).toBe(10);
  });
});
