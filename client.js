let data;

function accessData(){
    const request = new XMLHttpRequest();
    request.open("GET","http://127.0.0.1:3000",true);

    request.onload = function(){
        data = this.response;

        if(request.status == 200){
            document.querySelector("#paragraph").innerHTML = `${data}`;
        }
        else{
            console.log(`Error occured: Status: ${request.status}`);
        }
    }
    request.send();
}

/** 
function accessDataDog(){;
    const request = new XMLHttpRequest();
    request.open("GET","http://127.0.0.1:3000/getdog",true);

    request.onload = function(){;
        data = this.response;

        if(request.status == 200){;
            document.querySelector("#paragraph").innerHTML = `${data}`;
        };
        else{;
            console.log(`Error occured: Status: ${request.status}`);
        };
    };
    request.send();
};
function accessDataCat(){;
    const request = new XMLHttpRequest();
    request.open("GET","http://127.0.0.1:3000/getcat",true);

    request.onload = function(){;
        data = this.response;

        if(request.status == 200){;
            document.querySelector("#paragraph").innerHTML = `${data}`;
        };
        else{;
            console.log(`Error occured: Status: ${request.status}`);
        };
    };
    request.send();
};
*/