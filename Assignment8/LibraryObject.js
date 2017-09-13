{
//Book document
    var Book ={ _id: objectId(),
                ISBN: '12345567',
                Author: {first:'Aisha',last:'Kulindwa'},
                tags: ['fiction','Adventure'],
                Records:[{Student:'Sam',borrowed_on:new Date(),due_date:new Date(),status:'checked_out'},
                        {Student:'Mary',borrowed_on:new Date(),due_date:new Date(),status:'checked_in'},
                        {Student:'John',borrowed_on:new Date(),due_date:new Date(),status:'checked_out'}],
                Total_Number:'7',
                Available:'5'
    }
}