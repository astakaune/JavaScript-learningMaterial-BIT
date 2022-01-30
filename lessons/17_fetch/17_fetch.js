// // Local host Serveris, is kurio pasiima narsykle HTML ir JS failus.
// // veliau jau js failas ima duomenis is to paties ar kito nutolusio serverio JSON formatu.

// //uzduotyje naudojame Vinted duomenims parsisiusti
// const ul = document.querySelector('ul');

// document.querySelector('button').addEventListener('click', () => {

//     fetch('https://in3.dev/vinted/api/brands/all')

//         .then(response => response.json())

//         .then(data => {

//             console.log(data);

//             data.forEach(brand => {

//                 //1. Sukuriam elementą

//                 const li = document.createElement("li");

//                 //2. Sukuriam text nodą

//                 const brandText = document.createTextNode(brand.title);

//                 //3. Text nodą įdedame į elementą

//                 li.appendChild(brandText);

//                 //4. Surandam html'e tėvinį tagą į kurį dėsim elementą

//                 //Turim ul

//                 //5. Į tėvą įdedame sukurtą elementą

//                 ul.appendChild(li);

//             });

//         });
// })

// // 2 budas su innerHTML

// const ul = document.querySelector('ul');
// document.querySelector('button').addEventListener('click', () => {
//     fetch('https://in3.dev/vinted/api/brands/all')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             data.forEach(brand => {
//                 const html = `
//                 <i>${brand.id}</i>
//                 <b>${brand.title}</b>
//                 `;

//                 //1. Sukuriam elementą
//                 const li = document.createElement("li");
//                 //2. Sukuriam text nodą
//                 const brandText = document.createTextNode(brand.title);
//                 //3. Text nodą įdedame į elementą
//                 li.appendChild(brandText);
//                 //4. Surandam html'e tėvinį tagą į kurį dėsim elementą
//                 //Turim ul
//                 //5. Į tėvą įdedame sukurtą elementą
//                 ul.appendChild(li);
//             });
//         });
// });

// 3 budas su pictures

const ul = document.querySelector("ul");
document.querySelector("button").addEventListener("click", () => {
	fetch("https://in3.dev/knygos")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			data.forEach((books) => {
				const html = `
                <i>${books.id}</i>
                <b>${books.author}</b>
                <img src=${books.img}></img>
                <u style='color:red'>KAINA: ${books.price} EUR</u>
                `;

				//1. Sukuriam elementą
				const li = document.createElement("li");
				//2. Sukuriam text nodą
				const booksTitle = document.createTextNode(books.title);
				//3. Text nodą įdedame į elementą
				li.appendChild(booksTitle);
                // 
				//4. Surandam html'e tėvinį tagą į kurį dėsim elementą
				//Turim ul
				//5. Į tėvą įdedame sukurtą elementą
				ul.appendChild(li);

            
              
			});
		});
});
