const fs = require("fs");
const path = "test-q1.txt";

const readWaterUtilityData = (path) => {

  fs.readFile(path, "utf-8", (error,data) => {

        if(error){
            console.log("No bill file passed in");
            return;
        }
        
        
        readData(data);
        

        });


    const readData = (data)=> {
        var textByLine = data.split("\n");
        const [customerNumber,accountNumber] = textByLine[10].trim().split(" - ");

        const billPeriod = textByLine[15].split(/ +/).slice(-7).join(" "); 

        const billNumber = textByLine[12].split("Bill number:")[1].trim();

        const billDate =  textByLine[11].split("Bill date:")[1].substring(1,textByLine[11].split("Bill date:")[1].length);
   

        const totalNewCharges = textByLine[31].split(/ +/)[2];



    }   







       
        
}


readWaterUtilityData(path);