
type Operator = '+' | '-' | '*' | '/';

const operations: Record<Operator, (a: number, b: number) => number> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

export const calculate = (input: string): number => {
  const parts = input.trim().split(/\s+/);

  if (parts.length !== 3) {
    throw new Error('Invalid expression');
  }

  const [leftRaw, operatorRaw, rightRaw] = parts;

  const left = Number(leftRaw);
  const right = Number(rightRaw);

  if (Number.isNaN(left) || Number.isNaN(right)) {
    throw new TypeError('Invalid number');
  }

  if (!(operatorRaw in operations)) {
    throw new Error('Invalid operator');
  }

  const operator = operatorRaw as Operator;

  return operations[operator](left, right);
};