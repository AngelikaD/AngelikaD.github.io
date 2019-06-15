//var title = document.querySelector('.title');
// var courseFeatureElements = document.querySelectorAll('.course-feature');
// var button = document.querySelector('button');

navigator.serviceWorker.register('/sw.js');

function hitungbiaya(asal,tujuan,berat,jenis){
	var jarak = Math.abs(asal-tujuan);
	var paket=0;
	if(jenis=='1'){
        paket = 2.5;
      }
      else if(jenis=='2'){
        paket = 1.5;
      }
      else if(jenis=='3'){
        paket = 1;
      }
      var tot=jarak*10000*berat*paket;
      document.getElementById('total').innerHTML =tot;
      localStorage.setItem("harga", tot);

//       sessionStorage.myProperty = "Hello World";
// localStorage.myProperty   = "Hello World";
}

var kota=["Jakarta","Surabaya","Malang","Salatiga"];

var sel = document.getElementById('kotaasal');
for (var i = 0; i < kota.length; i++) {
	var opt = document.createElement('option');
	opt.appendChild(document.createTextNode(kota[i]));
	opt.value = i; 
	sel.appendChild(opt); 
}
var sel = document.getElementById('kotatujuan');
for (var i = 0; i < kota.length; i++) {
	var opt = document.createElement('option');
	opt.appendChild(document.createTextNode(kota[i]));
	opt.value = i; 
	sel.appendChild(opt); 
}

var hit = document.getElementById('hit');
hit.addEventListener('click', function() {
	var asal=document.getElementById('kotaasal').value;
	var tujuan=document.getElementById('kotatujuan').value;
	var berat=document.getElementById('berat').value;

	var jenis = document.getElementsByName('jenis');
	for (var i = 0, length = jenis.length; i < length; i++)
	{
		if (jenis[i].checked)
		{
			var jen = jenis[i].value;
			break;
		}
	}
	hitungbiaya(asal,tujuan,berat,jen);
});
