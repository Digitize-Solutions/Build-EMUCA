import './App.css';
import { sheet } from './sheet';
function App() {
  function submit(){
      var inputh = document.getElementById("height").value;
      var inputw = document.getElementById("width").value;
      var inputg = document.getElementById("gap").value;
      var input_lch = document.getElementById("lch").value;
      var input_sch = document.getElementById("sch").value;
      var input_pant = document.getElementById("pant").value;
      var input_shoe = document.getElementById("shoe").value;
      var input_clo_fold = document.getElementById("clo_fold").value;
      var input_acces = document.getElementById("acces").value;
      var input_acces_fin = document.getElementById("acces_fin").value;

      var sku = [];
      var json_len = Object.keys(sheet).length;
      for(var i = 0; i < json_len; i++){
          var height = sheet[i]['Wardrobe height'];
          var heightmin = height.split("-")[0];
          var heightmax = height.split("-")[1];
          var width = sheet[i]['Wardrobe width'];
          var widthmin = width.split("-")[0];
          var widthmax = width.split("-")[1];
          var gap = sheet[i]['Width of module gap'];
          var gapmin = parseInt(gap.split("-")[0]);
          var gapmax = parseInt(gap.split("-")[1]);
          var lch_array = sheet[i]['Long clothes hanging on hanger'].split(","); 
          var sch_array = sheet[i]['Short clothes hanging on hanger'].split(","); 
          var pant_array = sheet[i].Pants.split(",");
          var shoe_array = sheet[i].Shoes.split(",");
          var clo_fold_array = sheet[i]['Clothes folded'].split(",");
          var acces_array = sheet[i].Accesories.split(",");
          var acces_fin_array = sheet[i]['Accesories finishing'].split(",");
          lch_array = lch_array.map(function (el) {
            return el.trim();
          });
          sch_array = sch_array.map(function (el) {
            return el.trim();
          });
          pant_array = pant_array.map(function (el) {
            return el.trim();
          });
          shoe_array = shoe_array.map(function (el) {
            return el.trim();
          });
          clo_fold_array = clo_fold_array.map(function (el) {
            return el.trim();
          });
          acces_array = acces_array.map(function (el) {
            return el.trim();
          });
          acces_fin_array = acces_fin_array.map(function (el) {
            return el.trim();
          });
      if (
        inputh >= heightmin && inputh <= heightmax 
        && inputw >= widthmin && inputw <= widthmax 
        && inputg >= gapmin && inputg <= gapmax
        && lch_array.includes(input_lch)
        && sch_array.includes(input_sch)
        && pant_array.includes(input_pant)
        && shoe_array.includes(input_shoe)
        && clo_fold_array.includes(input_clo_fold)
        && acces_array.includes(input_acces)
        && acces_fin_array.includes(input_acces_fin)
        ) {   
       sku.push(sheet[i].Item);
    }  
  }
  console.log(sku);
  document.getElementById("array").value = sku;
  }
    
      

  return (
    <div className="App">
        Height: <input  type="text" id="height" /><br/>
        Width: <input  type="text" id="width" /><br/>
        Gap: <input  type="text" id="gap" /><br/>
        Long Clothes Hanging On Hanger: <input  type="text" id="lch" /><br/>
        Short Clothes Hanging On Hanger: <input  type="text" id="sch" /><br/>
        Pants: <input  type="text" id="pant" /><br/>
        Shoes: <input  type="text" id="shoe" /><br/>
        Clothes Folded: <input  type="text" id="clo_fold" /><br/>
        Accesories: <input  type="text" id="acces" /><br/>
        Accesories Finishing:<input  type="text" id="acces_fin" /><br/>
         <input  type="submit" onClick={submit} />
        <p id="array"></p>
    </div>
  );
}

export default App;
