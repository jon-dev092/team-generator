const fs = require('fs');

const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Success!")
        }
    })
};

module.exports = {writeFile};