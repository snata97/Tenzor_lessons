class DataSet{
    constructor(options){
        this.options = {
            host: "http://127.0.0.1:8080/api/",
            // model: options.model,
            object: options.object
        }
    }

    query(query, options, params){
        let url = new URL(this.options.host);
        url.pathname += this.options.object;
        url.pathname += query;
        return fetch(url, options).then(
            response => response.json()
        );
    }

    read(id){
        return this.query(
            `/${id}`,
            {
                method: "GET"
            }
        );
    }

    readAll(){
        return this.query(
            ``,
            {
                method: "GET"
            }
        );
    }
}

export {DataSet};