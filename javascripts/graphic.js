//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key = "https://docs.google.com/spreadsheets/d/1GdhhLxi66u7mg4VkqnUe8pu4Ml71bhJQ_Z9Wdyb-uDw/pubhtml";

//"data" refers to the column name with no spaces and no capitals
	//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [ 
    { "data": "zonename", "title": "Zone Name" },
    { "data": "mobname", "title": "Quest Mob Name" },
    { "data": "questname", "title": "Quest Name" },
    { "data": "keywords", "title": "Quest Keywords" },
    { "data": "rewards", "title": "Quest Rewards" },
    { "data": "difficulty", "title": "Quest Difficulty" },    
    { "data": "comments", "title": "Quest Comments" }];

$(document).ready(function() {

    function initializeTabletopObject(){
    Tabletop.init({
        key: key,
        callback: function(data, tabletop) { 
            writeTable(data); //call up datatables function
            }, 
        simpleSheet: true,
        debug: false
    });
}

    initializeTabletopObject();

    function writeTable(data){
        //select main div and put a table there
		//use bootstrap css to customize table style: http://getbootstrap.com/css/#tables 
        $('#graphic').html('<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed" id="mySelection"></table>');

        //initilize the DataTable object and put settings in
        $("#mySelection").DataTable({
            "data": data,
            "columns": columns, 
            "order":[[2, "desc"]], //order on 1st column
            "pagingType": "simple" //no page numbers
			//uncomment these options to simplify your table
			//"paging": false,
			//"searching": false,
			//"info": false
            });
        }
});
//end of writeTable



