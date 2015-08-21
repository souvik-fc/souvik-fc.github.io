var parse=function(){
        var arr=[],max_retwt=0,min_retwt=1950;
        this.games=[];
        this.kbc=[];
        this.film=[];
        this.india=[];
        this.family=[];
        this.mood=[];
  for(i=0;i<733;i++){
    var s=info[i].text;
    arr.push({text:s,retweet_count:info[i].retweet_count,fetched:"false"});

    
    max_retwt=Math.max(info[i].retweet_count,max_retwt);
    min_retwt=Math.min(info[i].retweet_count,min_retwt);
  }
    console.log(max_retwt);
    console.log(min_retwt);




  for(i=0;i<733;i++){
    if(arr[i].text.match(/(world cup|cricket|kabaddi|football|goal|game)/i) && arr[i].fetched=="false"){
    this.games.push({text:arr[i].text,retweet_count:arr[i].retweet_count});
    arr[i].fetched="true";
  }
  
 // console.log(games);

  

    if(arr[i].text.match(/kbc/i)  && arr[i].fetched=="false"){
    this.kbc.push({text:arr[i].text,retweet_count:arr[i].retweet_count});
    arr[i].fetched="true";
  }
  
  //console.log(kbc);

  
  
    if(arr[i].text.match(/(movie|film|trailer|song)/i) && arr[i].fetched=="false"){
    this.film.push({text:arr[i].text,retweet_count:arr[i].retweet_count});
    arr[i].fetched="true";
  }
  
    //console.log(film);


  
    if(arr[i].text.match(/india/i) && arr[i].fetched=="false"){
    this.india.push({text:arr[i].text,retweet_count:arr[i].retweet_count});
  arr[i].fetched="true";
  }
  
    //console.log(india);


    if(arr[i].text.match(/(family)/i) && arr[i].fetched=="false"){
    this.family.push({text:arr[i].text,retweet_count:arr[i].retweet_count});
    arr[i].fetched="true";
  }

  if(arr[i].text.match(/(peace|happyness|love|fun|great|fantastic|wonderful)/i) && arr[i].fetched=="false"){
    this.mood.push({text:arr[i].text,retweet_count:arr[i].retweet_count});
    arr[i].fetched="true";
  }

  }
    console.log(this.mood);


};
