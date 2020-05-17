const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./build'));
}

app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname,'build','index.html'));
});


app.listen(process.env.PORT || 8000,() =>{
    console.log("Listening at port 8000")
})
