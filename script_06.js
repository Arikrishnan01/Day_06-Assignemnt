1. Creating the class of movie:

class movie{
    constructor(title,studio,rating){   //Class constructor
        this.title=title;
        this.studio=studio;
        this.rating=rating
    }
    movie_data(){
        var data=  `
        Title:  ${this.title}
        Studio: ${this.studio}
        Rating: ${this.rating} 
        `;        
        return data;
    
    }
    set_rating(new_rating){         //set function
        this.rating=new_rating
    }
    get_rating(){                   //get method
        if(this.rating==="PG"){
            return this.name
        }
    }
}
var movie_01=new movie("Asuran","Thanush","R");  //Object create name of movie_01
console.log(movie_01.movie_data());              //Asuran ,  Thanush , R will get output here
var movie_02=new movie("Lovetoday","Pradeep","")  //Empty rating input here
movie_02.set_rating("PG")                         //Set the default rating of "PG"
console.log(movie_02.movie_data());           //Get default rting "PG" 
var movie_03=new movie("Thalapathi","AWM","PG") //create new object for check the given rating is "PG"
console.log(movie_03.get_rating());           
var movie_04=new movie("Casino Royale","Eon Productions","PG­13");  
console.log(movie_04.movie_data());     

2.Class circle:


class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    all_data(){
        var data=`
        Radius: ${this.radius}
        Color: ${this.color}
        `;
        return data;
    }
    get_radius(){
        return this.radius
    }
    set_radius(new_radius){
        this.radius=new_radius
    }
    get_color(){
        return this.color
    }
    set_color(new_color){
        this.color=new_color
    }
    get_area(){
        var area=Math.PI*this.radius*this.radius;
        return area.toFixed(4);
    }
    get_circum(){
        var circum=2*Math.PI*this.radius;
        return circum.toFixed(4);
    }
}
var circle_01=new circle(1.23,"blue");  // circle object created 
console.log(`Get circle:${ circle_01.get_radius()}`);    //get radius value => 1.23
circle_01.set_radius(2.23);             //set radius value => 2.23
console.log(`Radisu: ${ circle_01.get_radius()}`);    //after set radius value output => 2.23
console.log(`Get color: ${ circle_01.get_color()}`);     //get color value
circle_01.set_color("red");
console.log(`After set: ${ circle_01.get_color()}`);     //after set the color value => red
console.log(`Circle: ${ circle_01.get_area()}`);      //get area of circle  is =>15.6228
console.log(`Circuference: ${circle_01.get_circum()}`);    //get circumference is => 14.0115


Output:

Get circle:1.23
Radisu: 2.23
Get color: blue
After set: red
Circle: 15.6228
Circuference: 14.0115


3.Print the person details:

//create the person class

class person{
    constructor(Name,f_Name,m_Name,age,gender,phone,email,city,distric,state,pincode){  //Created constructor here
        this.Name=Name;
        this.f_Name=f_Name;
        this.m_Name=m_Name;
        this.age=age;
        this.gender=gender;
        this.phone=phone;
        this.email=email;
        this.city=city;
        this.distric=distric;
        this.state=state;
        this.pincode=pincode;
    }
    person_data(){      //Method
        var data=`
        Name:       ${this.Name}
        Father_Name:${this.f_Name}
        Mother_Name:${this.m_Name}
        Age:        ${this.age}
        Gender:     ${this.gender}
        Phone:      ${this.phone}
        Email:      ${this.email}
        City:       ${this.city}
        Distric:    ${this.distric}
        State:      ${this.state}
        Pincode:    ${this.pincode}
        `;
        return data;

    }
}
//created new object for instant of class
var perso_01= new person("Arun","Arunachalm","Sarasvathi",23,"Male","9809876567","arun@gmail.com","Chennai","Thiruvallur","Tamilnadu","600 786");
console.log(perso_01.person_data());


Output:     //Person details

        Name:       Arun
        Father_Name:Arunachalm    
        Mother_Name:Sarasvathi    
        Age:        23
        Gender:     Male
        Phone:      9809876567
        Email:      arun@gmail.com
        City:       Chennai
        Distric:    Thiruvallur
        State:      Tamilnadu
        Pincode:    600 786



        4. Class create for uber:

        // class is uber

        class uber{
            constructor(BF,CPM,TOR,CPm,RD,SBM,BFEE){    //create the constructor
                this.BF=BF;
                this.CPM=CPM;
                this.TOR=TOR;
                this.CPM=CPm;
                this.RD=RD;
                this.SBM=SBM;
                this.BFEE=BFEE;
            }
            get_price_cal(){        //Bissnus logic gere calculate the total price 
                var Total_price=(this.BF+((this.CPM * this.TOR) + (this.CPm * this.RD) * this.SBM) + this.BFEE);
                return Total_price;
            }
        }
        
        //BF => Base Fare
        //CPM =>Cost Per Minute
        //TOR =>Time of the Ride
        //CPm =>Cost Per Minute
        //RD =>Ride distance
        //SBM =>Surge Boost Maultipler
        //Booking Fees 
        
        var uber_01= new uber(20,5,30,40,12,3,50); // Approxmatly I gave the amount
        console.log(uber_01.get_price_cal());
        

        Output: //Total price of uber

        653