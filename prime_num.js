function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
}

function getPrimes(num) {
    const primes = [];
    let i = 2;
    while (primes.length < num) {    
        if (isPrime(i)) primes.push(i);  
        i++;  
    }
    return primes;
}

console.time()
console.dir(getPrimes(process.argv[2]), {'maxArrayLength': null})
console.timeEnd()