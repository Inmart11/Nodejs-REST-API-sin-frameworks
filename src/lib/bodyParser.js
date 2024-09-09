function bodyParser(request){
     return new Promise((resolve, reject) => {
        let totalData = '';
    request
    .on('data',chunck=> {
        totalData += chunck;
    })
    .on('end', ()=> {
        request.body = JSON.parse(totalData);
        resolve();
    })
    .on('error', err =>{
        console.log(err);
        reject();
    })
    })
}

module.exports = {bodyParser}