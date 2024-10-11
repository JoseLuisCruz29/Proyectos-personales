const numeros = [2, 5, 1, 12, 15155, 1111, 7777, 4578]
const letters: string[] = ['b', 'a', 'd', 'c', "q", 'h', "z"];
const numeroLetter: (string | number)[] = [1, "b", 5, "w", 51, "a", 2, "o", 8, "c"]

function bubbleSort(arr: (string | number)[]): (string | number)[] {
    let n: number = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].toString() > arr[j + 1].toString()) {
                let temp: number | string = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

function bubbleSortNumber(arr: number[]): number[] {
    let n: number = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
function bubbleSortLetters(arr: string[]): string[] {
    let n: number = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp: string = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
console.log(bubbleSort(numeroLetter))
console.log(bubbleSortNumber(numeros))
console.log(bubbleSortLetters(letters))
