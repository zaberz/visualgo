export const swip = (arr,index1,index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

const insert = (arr, index, value) => {
    arr.splice(index,0,value);
}

const remove = (arr, index) => {
    arr.splice(index,1)
}

export const removeAndInsert = (arr,oldIndex, newIndex) => {
    const value = arr[oldIndex];
    remove(arr,oldIndex);
    insert(arr,newIndex, value);
    return arr;
}