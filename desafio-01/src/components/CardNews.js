class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  //elementos
  build() {
    //Div card
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    //Div card-left
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    //span card-left
    const autor = document.createElement("span");
    autor.textContent = this.getAttribute("autor");

    //link card-left
    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("links-url");

    //paragrafo card-left
    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    //Div card-right
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    //img card-right
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo");
    newsImage.alt = "miranha";

    cardRight.appendChild(newsImage);

    //Trasformando em filhos da div card
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  //styles
  styles() {
    const style = document.createElement("style");
    style.textContent = `
       
    .card{
        width: 700px;
        box-shadow: 9px 9px 15px rgba(0, 0, 0, 0.589);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }   
    
    .card__left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        
    
    }
    
    .card__left span {
        font-weight: 400;
    }
    
    .card__left > a{
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bolder;
    }
    
    .card__left > p {
        color: gray;
    }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
