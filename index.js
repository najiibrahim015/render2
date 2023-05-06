fetch('https://testonrender-98n1.onrender.com/data')
      .then(response => response.json())
      .then(json => console.log(json))