const img2 = document.querySelector(".image2");
const link = document.querySelector(".link");

const changeHref = function () {
  const newHref =
    "https://www.expedia.com/Hotel-Search?siteid=100001&selected=19122555&startDate=2024-03-13&endDate=2024-03-14&MDPCID=US.META.HPA.HOTEL-CORESEARCH-desktop.HOTEL&adults=2&children=&MDPDTL=HTL.19122555.20240313.20240314.DDT.27.CID.20674982630.AUDID..RRID.bex_us_desktop&mctc=10&ct=hotel&exp_curr=USD&exp_dp=60.01&exp_tx=13.48&exp_pg=google&langid=uk&ad=2&tp=&utm_source=google&utm_medium=cpc&utm_term=19122555&utm_content=localuniversal&utm_campaign=HotelAds&rateplanid=210555179&mpm=24&mpn=202053446&mpo=EC&mpp=1&gclid=Cj0KCQiA5rGuBhCnARIsAN11vgSWQTgfd4rnvlBz3cQhtGQvVuzek0QiHPBgcfl3B8Z3Sb3YaSkB4eMaAub8EALw_wcB";
  link.href = newHref;
  return newHref;
};

console.log(changeHref());

img2.alt = "hotel photo";
