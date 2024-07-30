function oneToTen() {
  let n = 1;
  while (n <= 10) {
    if (n % 3 == 0) {
      console.log("b");
    } else if (n % 2 == 0) {
      console.log("a");
    } else {
      console.log(n);
    }
    n++;
  }
}

oneToTen();
