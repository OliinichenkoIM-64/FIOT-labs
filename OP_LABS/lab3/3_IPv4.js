'use strict';

const ipv4 = (ip="127.0.0.1") => {
    return (ip.split(".").reduce((sum, currenttByte,index) => sum+(parseInt(currenttByte)<<(24-index*8)),0));
}

console.log(ipv4());
console.log(ipv4('127.0.0.1'));
console.log(ipv4('10.0.0.1'));
console.log(ipv4('192.168.1.10'));
console.log(ipv4('165.225.133.150'));
console.log(ipv4('0.0.0.0'));