  <script>
      var myList = document.querySelector('myads');
      var myads2 = document.querySelector('myads2');

      fetch('https://raw.githack.com/falahsab/jdwel/master/myads.json')
          .then(function(response) {
              if (!response.ok) {
                  throw new Error("HTTP error, status = " + response.status);
              }
              return response.json();
          })

          .then(function(json) {
              for (var i = 0; i < json.products.length; i++) {
                  var listItem = document.createElement('div');
                  var listItem2 = document.createElement('div');

                  listItem.innerHTML = '<a href="' + json.products[i].Url + '"><img border="0" src="' + json.products[i].Img + '" width="100%" height="Auto" alt="' + json.products[i].Alt + '"></a>';;
                  listItem2.innerHTML = '<a href="' + json.products[i].Url2 + '"><img border="0" src="' + json.products[i].Img2 + '" width="100%" height="Auto" alt="' + json.products[i].Alt2 + '"></a>';;

                myList.appendChild(listItem);
                myads2.appendChild(listItem2);

              }
          })
          .catch(function(error) {
              var p = document.createElement('p');
              p.appendChild(
                  document.createTextNode('Error: ' + error.message)
              );
              document.body.insertBefore(p, myList);
              document.body.insertBefore(p, myads2);

          });
  </script>
