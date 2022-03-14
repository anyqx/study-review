// O(logn) time; O(1)space
const binarySearch = (arr, num) => {
    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi) {
        const mid = Math.floor((hi+lo)/2)
        if (num < arr[mid]) {
            hi = mid - 1;
        } else if (num > arr[mid]) {
            lo = mid + 1;
        } else {
            return mid; 
        }
    }
    return -1;
}

// recursive
const binarySearch = (array, target) => {
  if (array.length === 0) return -1;
  
  const mid = Math.floor(array.length / 2);
  if (array[mid] > target) {
    return binarySearch(array.slice(0, mid), target);
  } else if (array[mid] < target) {
    const subResult = binarySearch(array.slice(mid + 1), target);
    return subResult === -1 ? -1 : subResult + mid + 1;
  } else {
    return mid;
  }
}