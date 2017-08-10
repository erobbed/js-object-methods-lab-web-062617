// code solution here
class President{
  constructor(name, politicalParty, yearsInOffice, homeState){
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
    this.veto = ()=> "NO!";
    this.passBill = () => "You can do that!";
    this.doCharity = () => "I like to help people.";
    this.conductPressInterview = () => "I am proud to be an American.";
    this.sayHi = () => `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`;
  }
}

var  GeorgeWashington = new President("George Washington", "Federalist", "1789-1797", "Virginia")
var AbrahamLincoln = new President("Abraham Lincoln", "Republican", "1861-1865", "Illinois")
var RichardNixon = new President("Richard Nixon", "Republican", "1969-1974", "California")
var JimmyCarter = new President("Jimmy Carter", "Democrat", "1977-1981", "Georgia")
