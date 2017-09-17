//depending on the use of the table you can have multiple
//combination of the data while keeping in mind that indexing
// is expensive.

var Book ={ _id: objectId(),
    ISBN: '12345567',
    Author: {first:'Aisha',last:'Kulindwa'},
    tags: ['fiction','Adventure'],
    Records:[{Student:'Sam',borrowed_on:new Date(),due_date:new Date(),status:'checked_out'},
        {Student:'Mary',borrowed_on:new Date(),due_date:new Date(),status:'checked_in'},
        {Student:'John',borrowed_on:new Date(),due_date:new Date(),status:'checked_out'}],
    Total_Number:'7',
    Available:'5',
    Availability:'Yes'
}
//to check available books
db.colName.createIndex({'ISBN':1,'Available':1});
//to check  book availablity
db.colName.createIndex({'ISBN':1,'Availability':1});
//Student rental record books rented
db.colName.createIndex({'Record.Student':1,'ISBN':1});
//Student rental record passed due
db.colName.createIndex({'Record.Student':1,'ISBN':1,'Record.due_date':1});
//Student rental record rental status
db.colName.createIndex({'Record.Student':1,'Record.Status':1});

