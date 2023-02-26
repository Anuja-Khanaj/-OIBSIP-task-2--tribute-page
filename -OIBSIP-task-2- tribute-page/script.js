const about = document.getElementById("about");
about.addEventListener("click", changeAbout);

function changeAbout() {
  let info = document.getElementById("info");
  info.innerHTML = `
    <br>
    <br>  
    <b>Life and career</b><br>
    Early life and education<br>
    See also: Einstein family<br>
    A young boy with short hair and a round face, wearing a white collar and large bow, with vest, coat, skirt, and high boots. He is leaning against an ornate chair.<br>
    Einstein at the age of three in 1882
    Studio photo of a boy seated in a relaxed posture and wearing a suit, posed in front of a backdrop of scenery.<br>
    Einstein in 1893 (age 14)
    Albert Einstein was born in Ulm,[7] in the Kingdom of Württemberg in the German Empire, on 14 March 1879 into a family of secular Ashkenazi Jews.[22][23] His parents were Hermann Einstein, a salesman and engineer, and Pauline Koch. In 1880, the family moved to Munich, where Einstein's father and his uncle Jakob founded Elektrotechnische Fabrik J. Einstein & Cie, a company that manufactured electrical equipment based on direct current.[7]
    In 1894, Hermann and Jakob's company lost a bid to supply the city of Munich with electrical lighting because they lacked the capital to convert their equipment from the direct current (DC) standard to the more efficient alternating current (AC) standard.[25] The loss forced the sale of the Munich factory. In search of business, the Einstein family moved to Italy, first to Milan and a few months later to Pavia. In Pavia, the Einsteins settled in Palazzo Cornazzani, a medieval building where, at different times, Ugo Foscolo, Contardo Ferrini and Ada Negri lived.[26] When the family moved to Pavia, Einstein, then 15, stayed in Munich to finish his studies at the Luitpold Gymnasium.[24]
   </p>
    <a href="https://en.wikipedia.org/wiki/Albert_Einstein" target="b;ank"><button id="btn" style="margin-top:0rem;">Know More</button></a>`;
  console.log("clicked");
}

let gallery = document.getElementById("gallery");
gallery.addEventListener("click", changeGallery);
function changeGallery() {
  let info = document.getElementById("info");
  info.innerHTML = `<table>
   <tr>
     <td><img src="img/Albert-Einstein-quotes_a68968619f.jpg" alt="" srcset=""></td>
     <td><img src="img/download (1).jpg" alt="" srcset=""></td>
     <td><img src="img/download (2).jpg" alt="" srcset=""></td>
   </tr>
   <tr>
     <td><img src="img/download.jpg" alt=""></td>
     <td><img src="img/images (1).jpg" alt="" srcset=""></td>
     <td><img src="img/images.jpg" alt=""></td>
   </tr>
 </table>
 <a href="https://www.google.com/search?sxsrf=AJOqlzUwIjr0N_DsdzN1ZkRPskjWXmkhFQ:1676977512010&q=einstein+images&tbm=isch&chips=q:einstein+images,online_chips:png+image:GEz0oXzn3n4%3D&usg=AI4_-kQ4bqV9hreJSbxy-UzWut9qgZ1tPw&sa=X&ved=2ahUKEwic9JiHvKb9AhVf9zgGHdDbBmwQgIoDKAF6BAgIEBU&biw=1396&bih=656&dpr=1.38" target="b;ank"><button id="btn" style="margin-top:0.6rem;">More Imges</button></a>
 `;
  console.log("clicked");
}
let home = document.getElementById("home");
home.addEventListener("click", changetoHome);

function changetoHome() {
  let info = document.getElementById("info");
  info.innerHTML = `<p>
  <b> Albert Einstein </b> was a German-born theoretical physicist, widely acknowledged to be one of the greatest and most influential physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics. Relativity and quantum mechanics are the two pillars of modern physics. His mass–energy equivalence formula E = mc2, which arises from relativity theory, has been dubbed "the world's most famous equation". His work is also known for its influence on the philosophy of science. <b> He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect", a pivotal step in the development of quantum theory.</b> His intellectual achievements and originality resulted in "Einstein" becoming synonymous with "genius".Einsteinium, one of the synthetic elements in the periodic table, was named in his honor.<br /><br />
  In 1905, a year sometimes described as his annus mirabilis ('miracle year'), Einstein published four groundbreaking papers.[15] These outlined the theory of the photoelectric effect, explained Brownian motion, introduced special relativity, and demonstrated mass-energy equivalence. Einstein thought that the laws of classical mechanics could no longer be reconciled with those of the electromagnetic field, which led him to develop his special theory of relativity. He then extended the theory to gravitational fields; he published a paper on general relativity in 1916, introducing his theory of gravitation. In 1917, he applied the general theory of relativity to model the structure of the universe.[16][17] He continued to deal with problems of statistical mechanics and quantum theory, which led to his explanations of particle theory and the motion of molecules. He also investigated the thermal properties of light and the quantum theory of radiation, which laid the foundation of the photon theory of light.
 </p>
`;
}
