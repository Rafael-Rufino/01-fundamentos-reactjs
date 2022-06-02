const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto+Slab:wght@400;600&family=Roboto:wght@400;500;700&display=swap');

}


body{
  font: 400 14px Roboto, sans-serif;
  background-color:#f0f0f5;
  -webkit-font-smoothing: antialiased;
}

input,
button,
textarea{
  font: 400 18px Roboto, sans-serif;
}

button{
  cursor: pointer;
}


`;
