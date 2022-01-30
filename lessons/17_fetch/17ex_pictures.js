// Local host Serveris, is kurio pasiima narsykle HTML ir JS failus.
// veliau jau js failas ima duomenis is to paties ar kito nutolusio serverio JSON formatu.

//uzduotyje naudojame Vinted duomenims parsisiusti
const ul = document.querySelector('ul');
document.querySelector('button').addEventListener('click', () => {
    fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(pics => {
                const html = `
                <i>${pics.id}</i>
                <b>${pics.author}</b>
                <img src=${pics.download_url}></img>
                `;
                //style='width:200px; height:100px'
 
                //1. Sukuriam elementą
                const li = document.createElement("li");
                //2. Sukuriam text nodą
                const brandText = document.createTextNode(brand.title);
                //3. Text nodą įdedame į elementą
                li.appendChild(brandText);
                //4. Surandam html'e tėvinį tagą į kurį dėsim elementą
                //Turim ul
                //5. Į tėvą įdedame sukurtą elementą
                ul.appendChild(li);
            });
        });
});

