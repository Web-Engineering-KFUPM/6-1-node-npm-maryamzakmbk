
export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((result, num, index) => {
        if (index === 0) return num;
        return result - num;
    }, 0);
}

export function multiply(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
    if (numbers.length === 0) return 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            return "Error: Division by zero";
        }
    }

    return numbers.reduce((result, num, index) => {
        if (index === 0) return num;
        return result / num;
    }, 0);
}

