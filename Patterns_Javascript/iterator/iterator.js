/*
*   Iterator Pattern : A pattern for accessing the elements of containers
*/
class QueryResultsIterator{
    constructor(results){
        this._results = results;
        this.cursor = 0;
        this.max = this._results.length;
    }

    first(){
        return this._results[0]; //returns the first element of the result
    }

    next(){
        this.cursor++;
        if(!this.isDone()) return this._results[this.cursor]; 
        else return "<end>";
    }

    currentItem(){
        return this._results[this.cursor]; //returns currentElement pointed by cursor
    }

    //checks whether all elements has been accessed
    isDone(){
        return this.cursor === this.max; 
    }
}

class QueryResult{
    constructor(){
        this.results = [];
    }

    fetchData(){
        for(let i = 1; i < 11 ; i++){
            this.results.push(`Item ${i}`);     //push item into results array
        }
    }

    createIterator(){
        return new QueryResultsIterator(this.results);  //create an instance of QueryResultIterator
    }
}

class Query{
    constructor(){
        this._Query = "";
    }
    executeQuery(queryStr){
        this._Query = queryStr;
        console.log(`Executing query: ${this._Query}`);
        let result = new QueryResult();     //create an instance of the QueryResult
        result.fetchData();
        return result;
    }
}


class QueryTool{
    constructor(){}
    runTest(){
        let q = new Query(); //creates an instance of Query class
        let queryResultRef = q.executeQuery("Select * from Test"); //It executes a Select query returns the QueryResult reference
        console.log(queryResultRef);  
        let _iter = queryResultRef.createIterator();  //Now create an iterator using the queryResult's Reference
        while(!_iter.isDone()){
            console.log(_iter.currentItem()); //print items 
            _iter.next();
        }
    }
}

let t = new QueryTool();
t.runTest();