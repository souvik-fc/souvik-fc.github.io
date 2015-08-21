window.onload = function() {

		var paper=Raphael(20,50,1550,1000);
		//var c = paper.rect(300, 60, 1000, 800).attr({stroke:'red',"stroke-width":5});
		var fmly=paper.rect(50,100,50,20).attr({fill:"red"});
		paper.text(120,110,"Family");
		var flm=paper.rect(50,200,50,20).attr({fill:"green"});
		paper.text(120,210,"Film");
		var kbbc=paper.rect(50,300,50,20).attr({fill:"blue"});
		paper.text(120,310,"KBC");
		var gme=paper.rect(50,400,50,20).attr({fill:"yellow"});
		paper.text(120,410,"Games");
		var country=paper.rect(50,500,50,20).attr({fill:"skyblue"});
		paper.text(120,510,"India");



		 
		var fam=new parse();
		var j=310,k=130;
		var lim=1250;

		for(i=0;i<fam.family.length;i++){
			
			if(j<lim)
		    {
		      j=j+50;		
		      bubble(j,k,fam.family[i].retweet_count/50,"red",fam.family[i].text);
	    }
		else{
			 j=310;
			 j=j+50;	
			 k=k+60;
		     bubble(j,k,fam.family[i].retweet_count/50,"red",fam.family[i].text);
    }

		}
		
		var j=310,k=k+60;
		for(i=0;i<fam.film.length;i++){
			if(j<lim)
		    {
		      j=j+50;		
		      bubble(j,k,fam.film[i].retweet_count/50,"green",fam.film[i].text);
	    }
		else{
			 j=310;
			 j=j+50;	
			 k=k+60;
		     bubble(j,k,fam.film[i].retweet_count/50,"green",fam.film[i].text);
    }


		}
		
		var j=310,k=k+60;
		for(i=0;i<fam.kbc.length;i++){
			if(j<lim)
		    {
		      j=j+50;		
		      bubble(j,k,fam.kbc[i].retweet_count/50,"blue",fam.kbc[i].text);
	    }
		else{
			 j=310;
			 j=j+50;	
			 k=k+60;
		     bubble(j,k,fam.kbc[i].retweet_count/50,"blue",fam.kbc[i].text);
    }
}
		
        var j=310,k=k+60;
		for(i=0;i<fam.games.length;i++){
			if(j<lim)
		    {
		      j=j+50;		
		      bubble(j,k,fam.games[i].retweet_count/50,"yellow",fam.games[i].text);
	    }
		else{
			 j=310;
			 j=j+50;	
			 k=k+60;
		     bubble(j,k,fam.games[i].retweet_count/50,"yellow",fam.games[i].text);
    }


		}
		var j=310,k=k+60;
	    for(i=0;i<fam.india.length;i++){
	    	if(j<lim)
		    {
		      j=j+50;		
		      bubble(j,k,fam.india[i].retweet_count/50,"skyblue",fam.india[i].text);
	    }
		else{
			 j=310;
			 j=j+50;	
			 k=k+60;
		     bubble(j,k,fam.india[i].retweet_count/50,"skyblue",fam.india[i].text);

	    }
	}
		
		 
		 
 




  



		  function bubble(x,y,r,c,t)
		{
		     paper.circle(x,y,r).attr({fill:c,title:t});
		   // paper.text( x, y, r+'\n'+t);

		}

}