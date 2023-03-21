// alert("hello"); //

fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {

        //------------------1---------------------------// 
        document
            .getElementById("userimg")
            .setAttribute("src", data[2].avatar_url)

        document
            .getElementById("user").innerText = data[2].login;

        document.
            getElementById("follower").setAttribute("href", data[2].html_url);

        document.
            getElementById("following").setAttribute("href", data[2].html_url);

        document.
            getElementById("visit").setAttribute("href", data[2].html_url);

        //------------------2---------------------------//


        document
            .getElementById("userimg2")
            .setAttribute("src", data[3].avatar_url);

        document.getElementById("user2").innerText = data[3].login;

        document.
            getElementById("follower2").setAttribute("href", data[3].html_url);

        document.
            getElementById("following2").setAttribute("href", data[3].html_url);

        document.
            getElementById("visit2").setAttribute("href", data[3].html_url);



        //------------------3---------------------------//
        document
            .getElementById("userimg3")
            .setAttribute("src", data[4].avatar_url);

        document.getElementById("user3").innerText = data[4].login;

        document.
            getElementById("follower3").setAttribute("href", data[4].html_url);

        document.
            getElementById("following3").setAttribute("href", data[4].html_url);

        document.
            getElementById("visit3").setAttribute("href", data[4].html_url);



        //------------------4---------------------------//
        document
            .getElementById("userimg4")
            .setAttribute("src", data[5].avatar_url);

        document.getElementById("user4").innerText = data[5].login;

        document.
            getElementById("follower4").setAttribute("href", data[5].html_url);

        document.
            getElementById("following4").setAttribute("href", data[5].html_url);

        document.
            getElementById("visit4").setAttribute("href", data[5].html_url);


        //------------------5---------------------------//

        document
            .getElementById("userimg5")
            .setAttribute("src", data[6].avatar_url);

        document.getElementById("user5").innerText = data[6].login;

        document.
            getElementById("follower5").setAttribute("href", data[6].html_url);

        document.
            getElementById("following5").setAttribute("href", data[6].html_url);

        document.
            getElementById("visit5").setAttribute("href", data[6].html_url);



            //------------------6---------------------------//

            document
            .getElementById("userimg6")
            .setAttribute("src", data[7].avatar_url);

        document.getElementById("user6").innerText = data[7].login;

        document.
            getElementById("follower6").setAttribute("href", data[7].html_url);

        document.
            getElementById("following6").setAttribute("href", data[7].html_url);

        document.
            getElementById("visit6").setAttribute("href", data[7].html_url);


            //------------------7---------------------------// 

            document
            .getElementById("userimg7")
            .setAttribute("src", data[8].avatar_url);

        document.getElementById("user7").innerText = data[8].login;

        document.
            getElementById("follower7").setAttribute("href", data[8].html_url);

        document.
            getElementById("following7").setAttribute("href", data[8].html_url);

        document.
            getElementById("visit7").setAttribute("href", data[8].html_url);


             //------------------8---------------------------// 

             document
            .getElementById("userimg8")
            .setAttribute("src", data[9].avatar_url);

        document.getElementById("user8").innerText = data[9].login;

        document.
            getElementById("follower8").setAttribute("href", data[9].html_url);

        document.
            getElementById("following8").setAttribute("href", data[9].html_url);

        document.
            getElementById("visit8").setAttribute("href", data[9].html_url);


            //------------------9---------------------------// 


            document
            .getElementById("userimg9")
            .setAttribute("src", data[10].avatar_url);

        document.getElementById("user9").innerText = data[10].login;

        document.
            getElementById("follower9").setAttribute("href", data[10].html_url);

        document.
            getElementById("following9").setAttribute("href", data[10].html_url);

        document.
            getElementById("visit9").setAttribute("href", data[10].html_url);


            //------------------10---------------------------// 


            document
            .getElementById("userimg10")
            .setAttribute("src", data[11].avatar_url);

        document.getElementById("user10").innerText = data[11].login;

        document.
            getElementById("follower10").setAttribute("href", data[11].html_url);

        document.
            getElementById("following10").setAttribute("href", data[11].html_url);

        document.
            getElementById("visit10").setAttribute("href", data[11].html_url);

    });
