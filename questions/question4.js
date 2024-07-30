function oneToTen() {
  let n = 1;
  while (n <= 10) {
    if (n % 2 == 0 && n % 3 == 0) {
      console.log("ab");
    } else if (n % 2 == 0) {
      console.log("a");
    } else if (n % 3 == 0) {
      console.log("b");
    } else {
      console.log(n);
    }
    n++;
  }
}

oneToTen();
