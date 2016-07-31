function Person(firstname,lastname,age){
		
	var REGEXP=/[\d\W_]/;

		 this.setFirstname=function(firstname){
		 
			if (!REGEXP.test(firstname)){
				if (firstname.length<3 || firstname.length>20)
					{	
						throw "The name should contain from 3 to 20 letters!";
					}
					
				}
			 else {
						throw "The name should contain only latin letters!";
					}

		this.getFirstname=function(){
						return firstname;
					};}


		this.setLastname=function(lastname){
			if  (!REGEXP.test(firstname)){
				if (lastname.length<3 || lastname.length>20)
					{	throw 'The lastname should contain from 3 to 20 letters!';
					}}
					 else {
						throw "The lastname should contain only letters!";}
		this.getLastname=function(){
						return lastname;
					};}


		this.setAge=function(age){			
							if (parseInt(age)<0 || parseInt(age)>150){
								throw'The age must be between 0 and 150!';
							}
		this.getAge=function(){
					 	return age;
					 }
					;}
		
		this.setFullname=function(){
			 fullname=person.getFirstname()+' '+person.getLastname();
		
		this.getFullname=function(){
			return fullname;
		}}
		introduce=function(){
			console.log('Hello!I am '+person.getFullname()+ ' and I am ' + person.getAge()+'-years-old');
		}
		}
				

var person= new Person();
person.setFirstname('Alex');
console.log(person.getFirstname());
person.setLastname('Smirnov');
console.log(person.getLastname());
person.setAge("11");
console.log(person.getAge());
person.setFullname('Ivan','Ivanov');
console.log(person.getFullname());
introduce();


