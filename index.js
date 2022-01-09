function searchUser(){
    let userName = document.getElementById("searchinput").value;
    console.log(userName);
    let url = `https://api.github.com/users/${userName}/repos`;
    fetch(url)
      .then((res)=>{
          return res.json();
      })
      .then((data)=>{
          console.log(data);
          let userInfo = data;

          


          // create element
          const container = document.createElement('div');
          const row = document.createElement('div');
          //const row2 = document.createElement('div');
          container.setAttribute("class", "container");
          //row.append(row2);
          container.append(row);
          //row.append(row2);
          row.innerHTML += `
          <div class="row1">
            <div class="row2">
                <img src="${userInfo[0].owner.avatar_url}" alt="${userInfo[0].owner.login}" width="120px" height="120px" class="avatar">
                <div class="name">
                    <h1>${userInfo[0].owner.login}</h1>
                    <a href="${userInfo[0].owner.html_url}">@umapreethi-dev</a>
                </div>
            </div>
            <h3>${userInfo[0].owner.login}'s repos collection</h3>
            
          </div>
          
          `
           userInfo.forEach((data)=>{
            //console.log(data.name);
            row.innerHTML += `
            <div class="row3">
                  <div class="row4">
                  <img src="./images/folder.png" alt="folder" width="10px" height="10px">
                  <a href="${data.html_url}" target="_blank" class="repo-link" >${data.name}</a>
                  
                  </div>
                  <div class="row4">
                  <div class="count"> Forks: ${data.forks_count}</div>
                  <div class="count"> Stars: ${data.stargazers_count}</div>
                  
                  </div>
                 
            
            </div>
              
            `
        })

        document.getElementById("searchBar").append(container);



      })
    
}

               //<td><img src="./images/folder.png" alt="folder" width="10px" height="10px"></td>