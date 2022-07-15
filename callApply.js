// const simplePerson = {
//     firstName : 'Golam',
//     lastName : 'Masum',
//     totalName : function(){
//         console.log(this.firstName, this.lastName);
//     },
// };
// console.log(simplePerson);
// console.log(simplePerson.firstName);

const smartPerson = {
    firstNameis : 'Sanam',
    lastNameis : 'Afrin',
    salary : 15000,
    // totalNameis : function(){
    //     console.log(this.firstNameis, this.firstNameis.lastNameis);
    // },
    billAmount : function(amount){
        // console.log(this);
        this.salary -= amount;
        return this.salary;
    }

};

const heroPerson = {
    firstNameis : 'Hero',
    lastNameis : 'Alom',
    salary : 15400,
};
// console.log(heroPerson);
// let result = smartPerson.billAmount(140);
// smartPerson.billAmount(3000);
// // console.log(result);
// console.log(smartPerson.salary);



// smartPerson.billAmount();
// const heroSalaryBill = smartPerson.billAmount.bind(heroPerson);
// heroSalaryBill(2000); 
// heroSalaryBill(2000); 
// console.log(heroPerson.salary);
smartPerson.billAmount.call(heroPerson, 900);
console.log(heroPerson.salary);
