const bigBroInfo = {
    bigBroName : 'Ayman Sadik',
    bigBroSurname : 'Ten Min School',
    Salary : 35000,
    savings : function(amount){
        this.Salary -= amount;
        return this.Salary;
    }
};

const smallBro ={
    smallBroName : 'Sokun Sadik',
    smallBroSurname : 'Gadhar School',
    Salary : 31000,
};

const bigBroSalary = bigBroInfo.savings(3000);
console.log(bigBroInfo.Salary);

const smallBroSalary = bigBroInfo.savings.call(smallBro, 1000);
console.log(smallBro.Salary);