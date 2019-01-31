

console.log('Before');

//var user= "test"
//getUser(1,getRepositories);


getUser(1)
.then(user =>console.log(user));



function getRepositories(user){
    getRepositories(user.gitHubUserName,getCommits)
}

function getRepositories(user){


}
function displayCommits(commits){

    console.log(commits);
}

function getCommits(repos) {
    console.log (repos,displaycommits);
};


console.log('After')

function getUser(id){
    return new Promise((resolve,reject) =>{

        // Kick off some async WOrk
        setTimeout(()=>{
            console.log('Reading a user from a Database');
            resolve({ id: id, gitHubUserName: 'mosh'})
             },4000);
    });
   
    

};

function getRepositories(username){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching All repositories for user ");
            resolve(['repo1','repo2','repo3'])
    
        },5000);
    })
    
};

function getCommits(repo){

    return new Promise ((resolve,reject)=>{

        setTimeout(()=>{

            console.log('Calling Github API');
            resolve(['commit']);
            
        },3000);

    })

}