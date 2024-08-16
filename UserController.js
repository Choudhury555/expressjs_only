const registerUser = (req,res)=>{
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    res.json({
        success:true,
        name:userName,
        email:userEmail,
        password:userPassword
    })
}

const homePage = (req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
}

module.exports = {registerUser,homePage};