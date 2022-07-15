const simplePerson = {
    firstName : 'Golam',
    lastName : 'Masum',
    totalName : function(){
        console.log(this.firstName, this.lastName);
    },
};
console.log(simplePerson);
console.log(simplePerson.firstName);

const smartPerson = {
    firstNameis : 'Sanam',
    lastNameis : 'Afrin',
    salary : 15000,
    totalNameis : function(){
        console.log(this.firstNameis, this.firstNameis.lastNameis);
    },
    billAmount : function(amount){
        this.salary -= amount;
        return this.salary;
    }

};

let result = smartPerson.billAmount(140);
smartPerson.billAmount(3000);
console.log(result);

console.log(smartPerson.salary);