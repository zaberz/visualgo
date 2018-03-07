import {swip, removeAndInsert} from './_help';
// 冒泡排序
export const BUB = function (origin) {
    let arr = origin.concat();
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let n = 0;
        for (let j = 0; j < len - i; j++) {
            if (arr[j] < arr[j - 1]) {
                n++;
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
        if (n < 1) {
            break;
        }
    }
    return arr;
};
// 选择排序
export const SEL = (origin) => {
    let arr = origin.concat();
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j];
                minIndex = j;
            }
        }
        arr[minIndex] = arr[i];
        arr[i] = min;
    }
    return arr;
};


// 插入排序
export const INS = (origin) => {
    let arr = origin.concat();
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};

// 归并
export const MER = (origin) => {
    if (origin.length == 1) {
        return origin;
    }
    let arr = origin.concat();
    const merge = (left, right) => {
        let result = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        return result.concat(left).concat(right);
    };

    let middle = Math.floor(arr.length / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(MER(left), MER(right));
};
// 快速
export const QUI = (origin) => {
    let arr = origin.concat();
    if (arr.length <= 1) return arr;
    // let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.shift();
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return QUI(left).concat([pivot], QUI(right));
};

export const COU = (origin) => {
    let arr = origin.concat();
    let len = arr.length,
        result = [],
        count = [],
        min = arr[0],
        max = arr[0];
    for (let i = 0; i < len; i++) {
        count[arr[i]] = count[arr[i]] ? count[arr[i]] + 1 : 1;
        min = min <= arr[i] ? min : arr[i];
        max = max >= arr[i] ? max : arr[i];
    }
    for (let j = min; j < max; j++) {
        count[j + 1] = (count[j + 1] || 0) + (count[j] || 0);
    }
    for (let k = len - 1; k >= 0; k--) {
        result[count[arr[k]] - 1] = arr[k];
        count[arr[k]]--;
    }
    return result;
};

// 基数
export const RAD = (origin) => {
    let arr = origin.concat();

    return arr;
}