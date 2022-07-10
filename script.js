const calc = new Calculator(100);

function Calculator(base) {
    this.base = base;
    
    this.isNum = function(num){
        return !isNaN(num);
    }

    this.add = function (num) {
        if(this.isNum(num)){
            return (this.base += num);
        }
    }

    this.sub = function (num) {
        if(this.isNum(num)){
            return (this.base -= num);
        }
    }

    this.set = function (num) {
        if(this.isNum(num)){
            return this.base = num;
        }
    }

    this.get = function () {
            return this.base;
    }
}


calc.add(10);
calc.add(10);
calc.sub(20);
calc.set(20);
calc.add(10);
calc.add('qwe');
calc.get();