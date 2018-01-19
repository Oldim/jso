db.restaurants.find({"cuisine": "Pizza"}).sort({"borough":1,"name":1})

db.restaurants.find({"address.building": "1470"})

db.restaurants.updateOne({name:"Juni"},{$set: { cuisine: "Belgium"}})


db.restaurants.updateMany({cuisine: "American_new"},{$set: {cuisine: "American"}})



//1. Write a MongoDB query to display all the documents in the collection restaurants. 
db.restaurants.find();
//2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant. 
db.restaurants.find({},{grades:0,address:0});
//3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents
//in the collection restaurant. 
db.restaurants.find({},{grades:0,address:0,_id:0});
//4. Write a MongoDB query to display the fields restaurant_id, name, borough and zipcode, but exclude the field _id for all the
//documents in the collection restaurant. 
db.restaurants.find({},{grades:0,"address.zipcode":0,_id:0});
//5. Write a MongoDB query to display all the restaurants which are in the borough Bronx. 
db.restaurants.find({borough:"Bronx"});
//6. Write a MongoDB query to display the first 5 restaurants which are in the borough Bronx.
db.restaurants.find({borough:"Bronx"}).limit(5);
//7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx. 
db.restaurants.find({borough:"Bronx"}).skip(5);
//8. Write a MongoDB query to find the restaurants that achieved a score more than 90. 
db.restaurants.find({"grades.score":{$gt:90}});
//9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100. 
db.restaurants.find({$and: [{"grades.score":{$gt:80}},{"grades.score":{$lt:100}}]});

db.restaurants.find({"grades.score":{$gt:80,$lt:100}});

//10. Write a MongoDB query to find the restaurants which locates in latitude value less than -95.754168.  (coord < -95.754168)
db.restaurants.find({"address.coord.0":{$lt: -95.754168}});
//11. Write a MongoDB query to find the restaurants that don’t prepare any cuisine of 'American'. 
db.restaurants.find({"cuisine":{$ne:"American"}});
//12. Write a MongoDB query to find the restaurants that don’t prepare any cuisine of 'American' and achieved a 
//score more than 70 and have a lattitude less than -65.754168. 
db.restaurants.find({$and: [{"cuisine":{$ne:"American"}},{"grades.score":{$gt: 70}},{"address.coord.0":{$lt: -65.754168}}]});
//13. Write a MongoDB query to find the restaurants which don’t prepare any cuisine of 'American ' and achieved a grade point 
//'A' and do not belong to the borough Brooklyn. The documents must be displayed according to the cuisine in descending order. 
db.restaurants.find({$and: [{"cuisine":{$ne:"American"}},{"grades.grade":"A"},{"borough":{$lt: "Brooklyn"}}]}).sort({cuisine:-1});
//14. Write a MongoDB query to find the restaurant id, name, borough and cuisine for those restaurants which contain 'Wil' as 
//first three letters for its name. 
db.restaurants.find({name:/^Wil.*$/i},{grades:0, adress:0, _id: 0});
//15. Write a MongoDB query to find the restaurant id, name, borough and cuisine for those restaurants which 
//contain 'ces' as last three letters for its name. 
db.restaurants.find({name: /ces$/i},{grades:0, adress:0, _id: 0});
//16. Write a MongoDB query to find the restaurant id, name, borough and cuisine for those restaurants which
//contain 'Reg' as three letters somewhere in its name. 
// alt = db.restaurants.find({"name": /.*Reg.*/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});
db.restaurants.find({name: /.*Reg.*/i},{grades:0, adress:0, _id: 0});

//17. Write a MongoDB query to find the restaurants which belong to the borough Bronx 
///and prepare either American or Chinese dishes. 
db.restaurants.find({"borough": "Bronx" ,$or : [{ "cuisine" : "American " },{ cuisine : "Chinese" }]});
//18. Write a MongoDB query to find the restaurant id, name, borough and cuisine for those 
//restaurants which belong to the borough Staten Island or Queens or Bronx or Brooklyn. 
db.restaurants.find({"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id" : 1,"name":1,borough: 1,"cuisine" :1 });
//19. Write a MongoDB query to find the restaurant id, name, borough and cuisine for those restaurants which are not 
//belonging to the borough Staten Island or Queens or Bronx or Brooklyn. 
db.restaurants.find({"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},{restaurant_id : 1,"name":1,"borough":1,"cuisine" :1}).count();
//20. Write a MongoDB query to find the restaurant id, name, borough and cuisine for those restaurants which 
//achieved a score which is not more than 10. 
db.restaurants.find({"grades.score" :{ $not:{$gt : 10}}},{"restaurant_id" : 1, "name":1,"borough":1, "cuisine" :1});
//21. Write a MongoDB query to find the restaurant id, name, borough and cuisine for those restaurants which 
//prepare dishes except 'American' and 'Chinese' or restaurants whose name begins with 'Wil'. 
db.restaurants.find({$or: [ {name: /^Wil/},  {"$and": [{"cuisine" : {$ne :"American "}},{"cuisine" : {$ne :"Chinees"}}]}]}
,{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});
//22. Write a MongoDB query to find the restaurant id, name and grades for those restaurants which have a 
//grade of "A" with score 11 and ISODate "2014-08-11T00:00:00Z".
db.restaurants.find({"grades.date": ISODate("2014-08-11T00:00:00Z"), "grades.grade":"A" , "grades.score" : 11},
{restaurant_id : 1,name: 1, grades:1});
//23. Write a MongoDB query to find the restaurant id, name and grades for those restaurants where the 2nd 
//element of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z". 
db.restaurants.find({ "grades.1.date": ISODate("2014-08-11T00:00:00Z"), "grades.1.grade":"A" , "grades.1.score" : 9}, 
                       {restaurant_id : 1,name:1,grades:1});
//24. Write a MongoDB query to find the restaurant id, name, address and geographical location for those restaurants 
//where the 2nd element of coord array contains a value which is more than 42 and upto 52.
db.restaurants.find({"address.coord.1": {$gt : 42, $lte : 52}},
                        {restaurant_id : 1,"name":1,address:1,coord:1}).count();
//25. Write a MongoDB query to arrange the name of the restaurants in ascending order. 
db.restaurants.find({},{name:1}).sort({name:1}).count();
//26. Write a MongoDB query to arrange the name of the restaurants in descending order. 
db.restaurants.find({},{name:1}).sort({name:-1});
//27. Write a MongoDB query to arrange the restaurants along cuisine in ascending order.  Restaurants with the same cuisine
//should be ordered on descending borough. 
db.restaurants.find().sort({cuisine:1, borough : -1,});
//28. Write a MongoDB query to find the restaurants where the address contains the field street. ({ $exists : true })
db.restaurants.find({"address.street":{ $exists : true }});
//29. Write a MongoDB query which will select all documents in the restaurants collection where the coord
//field value is a Double. ({$type:1})
db.restaurants.find({"address.coord":{$type:1}});
//30. Write a MongoDB query which will select the restaurant id, name and grades for those restaurants
//which have a score that returns 0 as a remainder after dividing the score by 7. 
db.restaurants.find({"grades.score" :{$mod : [7,0]}},
                         {restaurant_id : 1,name:1,grades:1});
//31. Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants 
//which contain 'mon' (case insensitive) somewhere in their name. 
db.restaurants.find({"name" :/.*mon.*/},
                         {borough : 1,name:1,coord:1, cuisine:1,_id:0});
//32. Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which 
//contain 'Mad' (case insensitive) as first three letters of their name. 
db.restaurants.find({ name : /^Mad.*$/},{
                         "name":1, "borough":1, "address.coord":1, "cuisine" :1}); 
                         
                         
                         
                         
db.restaurants.find({}, {cuisine : 1, _id:0})
db.restaurants.distinct("cuisine")
db.restaurants.distinct("cuisine", {"address.zipcode": 10462});
db.restaurants.group({
    key:{cuisine:1},
    initial:{aantal:0},
    reduce: function(current, result){ if (current.borough=="Bronx"){result.aantal +=1;}}});
    
    
    
db.restaurants.group({
    key:{cuisine:1},
    initial:{aantal:0, aantal2:0},
    reduce: function(current, result){ if (current.borough=="Bronx"){result.aantal +=1;}else{result.aantal2 +=1}}});
// alternatief manier
db.restaurants.group({
	key:{ cuisine:1 },
	reduce: function(current, result){ result.aantal += 1; },
	initial: { aantal:0 },
	cond:  {borough: "Bronx" }});
        
        
        
 db.restaurants.group({
	keyf:function(doc){ return { eerste_letter: doc.name.charAt(0) }},
	reduce: function(cur, result){ result.aantal += 1; },
	initial: { aantal:0 }
	});