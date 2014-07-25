function binarySearch(array, value) {
		var low  = 0,
			high = array.length - 1,
			middle, middleValue;

		while(low <= high) {
			middle = low + ((high - low) >> 1);
			middleValue = array[middle];

			if(middleValue == value) {
				return middle;
			} else if(middleValue > value) {
				high = middle - 1;
			} else {
				low = middle + 1;
			}
		}

		return -1;
	}

	var arr = [1, 2, 3, 5, 10, 25, 56];
	var value = 10;
	console.log(binarySearch(arr, value))
