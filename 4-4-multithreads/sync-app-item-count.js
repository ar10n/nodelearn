const itemCountSync = (arr) => {
    let nums = 0;
    arr.forEach((item) => {
        if (item % 3 === 0) {
            nums++;
        }
    });
    return nums;
};

export default itemCountSync;
