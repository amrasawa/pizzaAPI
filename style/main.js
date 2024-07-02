async function getPizza(){
    const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data=await response.json();

    const pizzas =data.recipes;
    console.log(pizzas);
    const result=pizzas.map(function(ele){
        return `
            <div class="data">
                <h2>${ele.title}</h2>
                <img src=${ele.image_url} alt="pizza image">
            </div>
        `
    }).join('');
    document.querySelector(" .pizza ").innerHTML=result;
    console.log(title,image);
    console.log(data);
}
getPizza();
console.log('hi');