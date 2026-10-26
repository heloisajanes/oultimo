
/* Corpo do site */
html {
  min-height: 100%;
  margin: 0;
}

*{
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: rgb(109, 57, 15);
  overflow-x: hidden;
}

/* Metas */
.secao-metas {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px;
}

.meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 90%;
  max-width: 700px;
  padding: 15px;
  margin: 10px;
  box-shadow: 5px 2px 20px rgb(0, 0, 0);
  background-color: rgb(107, 61, 13);
  border-radius: 10px;
}

.meta:hover{
  transition: .5s;
  transform:scale(1.7);
}

img {
  display: block;
  width: 200px;
  max-width: 100%;
  height: auto;
  padding: 0;
  border-radius: 8px;
}

/* Rodapé */
footer {
  background-color: rgb(88, 44, 8);
  border-radius: 10px;
  padding: 15px;
}

/* Títulos */
h1 {
  color: rgb(56, 29, 3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  font-size: 50px;
  font-family: 'Creepster', system-ui;
  text-align: center;

  text-shadow: 
    0 0 5px #fff,
    0 0 10px #f7cc9c,
    0 0 20px #f7af5c,
    0 0 40px #ce9351,
    0 0 80px #a36f33;
}

h2 {
  width: 100%;
  margin: 0;
  color: rgb(49, 26, 2);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.432);
  font-size: 30px;
}

h3 {
  color: rgb(182, 134, 84);
}

/* Textos */
p {
  width: 100%;
  margin: 10px 0;
  color: rgb(182, 134, 84);
  font-size: 20px;
  font-family: 'Great Vibes', cursive;
  overflow-wrap: anywhere;
}

/* Tablets e celulares */
@media (max-width: 768px) {
  h1 {
    font-size: 38px;
  }

  .meta {
    width: 100%;
  }

  h2 {
    font-size: 25px;
  }

  p {
    font-size: 19px;
  }
}

/* Celulares pequenos */
@media (max-width: 480px) {
  .meta {
    flex-direction: column;
    width: 100%;
    padding: 12px;
  }

  img {
    width: 100%;
    max-width: 280px;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 23px;
  }

  p {
    font-size: 18px;
  }
}
