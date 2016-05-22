/**
 * Created by sethy on 5/8/2016.
 */

var items = [
    {"id":"29668", "name": "Plex","type": "Plex","sub_type": null,"category": "Plex"},

    {"id":"1230","name": "Veldspar Veldspar","type": "Veldspar","sub_type": "Veldspar","category": "Ore"},
    {"id":"17470","name": "Concentrated Veldspar","type": "Veldspar","sub_type": "Concentrated","category": "Ore"},
    {"id":"17471","name": "Dense Veldspar","type": "Veldspar","sub_type": "Dense","category": "Ore"},
    {"id":"1228","name": "Scordite Scordite","type": "Scordite","sub_type": "Scordite","category": "Ore"},
    {"id":"17463","name": "Condensed Scordite","type": "Scordite","sub_type": "Condensed","category": "Ore"},
    {"id":"17464","name": "Massive Scordite","type": "Scordite","sub_type": "Massive","category": "Ore"},
    {"id":"1224","name": "Pyroxeres Pyroxeres","type": "Pyroxeres","sub_type": "Pyroxeres","category": "Ore"},
    {"id":"17459","name": "Solid Pyroxeres","type": "Pyroxeres","sub_type": "Solid","category": "Ore"},
    {"id":"17460","name": "Viscous Pyroxeres","type": "Pyroxeres","sub_type": "Viscous","category": "Ore"},
    {"id":"18","name": "Plagioclase Plagioclase","type": "Plagioclase","sub_type": "Plagioclase","category": "Ore"},
    {"id":"17455","name": "Azure Plagioclase","type": "Plagioclase","sub_type": "Azure","category": "Ore"},
    {"id":"17456","name": "Rich Plagioclase","type": "Plagioclase","sub_type": "Rich","category": "Ore"},
    {"id":"1227","name": "Omber Omber","type": "Omber","sub_type": "Omber","category": "Ore"},
    {"id":"17867","name": "Silvery Omber","type": "Omber","sub_type": "Silvery","category": "Ore"},
    {"id":"17868","name": "Golden Omber","type": "Omber","sub_type": "Golden","category": "Ore"},
    {"id":"20","name": "Kernite Kernite","type": "Kernite","sub_type": "Kernite","category": "Ore"},
    {"id":"17452","name": "Luminous Kernite","type": "Kernite","sub_type": "Luminous","category": "Ore"},
    {"id":"17453","name": "Fiery Kernite","type": "Kernite","sub_type": "Fiery","category": "Ore"},
    {"id":"1226","name": "Jaspet Jaspet","type": "Jaspet","sub_type": "Jaspet","category": "Ore"},
    {"id":"17448","name": "Pure Jaspet","type": "Jaspet","sub_type": "Pure","category": "Ore"},
    {"id":"17449","name": "Pristine Jaspet","type": "Jaspet","sub_type": "Pristine","category": "Ore"},
    {"id":"1231","name": "Hemorphite Hemorphite","type": "Hemorphite","sub_type": "Hemorphite","category": "Ore"},
    {"id":"17444","name": "Vivid Hemorphite","type": "Hemorphite","sub_type": "Vivid","category": "Ore"},
    {"id":"17445","name": "Radiant Hemorphite","type": "Hemorphite","sub_type": "Radiant","category": "Ore"},
    {"id":"21","name": "Hedbergite Hedbergite","type": "Hedbergite","sub_type": "Hedbergite","category": "Ore"},
    {"id":"17440","name": "Vitric Hedbergite","type": "Hedbergite","sub_type": "Vitric","category": "Ore"},
    {"id":"17441","name": "Glazed Hedbergite","type": "Hedbergite","sub_type": "Glazed","category": "Ore"},
    {"id":"1229","name": "Gneiss Gnesis","type": "Gnesis","sub_type": "Gneiss","category": "Ore"},
    {"id":"17865","name": "Iridescent Gnesis","type": "Gnesis","sub_type": "Iridescent","category": "Ore"},
    {"id":"17866","name": "Prismatic Gnesis","type": "Gnesis","sub_type": "Prismatic","category": "Ore"},
    {"id":"1232","name": "Dark Ochre Dark Ochre","type": "Dark Ochre","sub_type": "Dark Ochre","category": "Ore"},
    {"id":"17436","name": "Onyx Dark Ochre","type": "Dark Ochre","sub_type": "Onyx","category": "Ore"},
    {"id":"17437","name": "Obsidian Dark Ochre","type": "Dark Ochre","sub_type": "Obsidian","category": "Ore"},
    {"id":"1225","name": "Crokite Crokite","type": "Crokite","sub_type": "Crokite","category": "Ore"},
    {"id":"17432","name": "Sharp Crokite","type": "Crokite","sub_type": "Sharp","category": "Ore"},
    {"id":"17433","name": "Crystalline Crokite","type": "Crokite","sub_type": "Crystalline","category": "Ore"},
    {"id":"19","name": "Spodumain Spodumain","type": "Spodumain","sub_type": "Spodumain","category": "Ore"},
    {"id":"17466","name": "Bright Spodumain","type": "Spodumain","sub_type": "Bright","category": "Ore"},
    {"id":"17467","name": "Gleaming Spodumain","type": "Spodumain","sub_type": "Gleaming","category": "Ore"},
    {"id":"1223","name": "Bistot Bistot","type": "Bistot","sub_type": "Bistot","category": "Ore"},
    {"id":"17428","name": "Triclinic Bistot","type": "Bistot","sub_type": "Triclinic","category": "Ore"},
    {"id":"17429","name": "Monoclinic Bistot","type": "Bistot","sub_type": "Monoclinic","category": "Ore"},
    {"id":"22","name": "Arkonor Arkonor","type": "Arkonor","sub_type": "Arkonor","category": "Ore"},
    {"id":"17425","name": "Crimson Arkonor","type": "Arkonor","sub_type": "Crimson","category": "Ore"},
    {"id":"17426","name": "Prime Arkonor","type": "Arkonor","sub_type": "Prime","category": "Ore"},
    {"id":"11396","name": "Mercoxit Mercoxit","type": "Mercoxit","sub_type": "Mercoxit","category": "Ore"},
    {"id":"17869","name": "Magma Mercoxit","type": "Mercoxit","sub_type": "Magma","category": "Ore"},
    {"id":"17870","name": "Vitreous Mercoxit","type": "Mercoxit","sub_type": "Vitreous","category": "Ore"},

    {"id":"34","name": "Tritanium","type": "Tritanium","sub_type": null,"category": "Ore Mineral"},
    {"id":"35","name": "Pyerite","type": "Pyerite","sub_type": null,"category": "Ore Mineral"},
    {"id":"36","name": "Mexallon","type": "Mexallon","sub_type": null,"category": "Ore Mineral"},
    {"id":"37","name": "Isogen","type": "Isogen","sub_type": null,"category": "Ore Mineral"},
    {"id":"38","name": "Nocxium","type": "Nocxium","sub_type": null,"category": "Ore Mineral"},
    {"id":"40","name": "Megacyte","type": "Megacyte","sub_type": null,"category": "Ore Mineral"},
    {"id":"39","name": "Zydrine","type": "Zydrine","sub_type": null,"category": "Ore Mineral"},
    {"id":"11399","name": "Morphite","type": "Morphite","sub_type": null,"category": "Ore Mineral"},

    {"id":"16265","name": "White Glaze","type": "White Glaze","sub_type": null,"category": "Ice"},
    {"id":"17976","name": "Pristine White Glaze","type": "Pristine White Glaze","sub_type": null,"category": "Ice"},
    {"id":"16263","name": "Glacial Mass","type": "Glacial Mass","sub_type": null,"category": "Ice"},
    {"id":"17977","name": "Smooth Glacial Mass","type": "Smooth Glacial Mass","sub_type": null,"category": "Ice"},
    {"id":"16264","name": "Blue Ice","type": "Blue Ice","sub_type": null,"category": "Ice"},
    {"id":"17975","name": "Thick Blue Ice","type": "Thick Blue Ice","sub_type": null,"category": "Ice"},
    {"id":"16262","name": "Clear Icicle","type": "Clear Icicle","sub_type": null,"category": "Ice"},
    {"id":"17978","name": "Enriched Clear Icicle","type": "Enriched Clear Icicle","sub_type": null,"category": "Ice"},
    {"id":"16266","name": "Glare Crust","type": "Glare Crust","sub_type": null,"category": "Ice"},
    {"id":"16267","name": "Dark Glitter","type": "Dark Glitter","sub_type": null,"category": "Ice"},
    {"id":"16268","name": "Gelidus","type": "Gelidus","sub_type": null,"category": "Ice"},
    {"id":"16269","name": "Krystallos","type": "Krystallos","sub_type": null,"category": "Ice"},

    {"id":"16272","name": "Heavy Water","type": "Heavy Water","sub_type": null,"category": "Ice Mineral"},
    {"id":"16273","name": "Liquid Ozone","type": "Liquid Ozone","sub_type": null,"category": "Ice Mineral"},
    {"id":"16275","name": "Strontium Clathrates","type": "Strontium Clathrates","sub_type": null,"category": "Ice Mineral"},
    {"id":"16274","name": "Helium Isotope","type": "Helium Isotope","sub_type": null,"category": "Ice Mineral"},
    {"id":"17888","name": "Nitrogen Isotope","type": "Nitrogen Isotope","sub_type": null,"category": "Ice Mineral"},
    {"id":"17887","name": "Oxygen Isotope","type": "Oxygen Isotope","sub_type": null,"category": "Ice Mineral"},
    {"id":"17889","name": "Hydrogen Isotope","type": "Hydrogen Isotope","sub_type": null,"category": "Ice Mineral"},
];

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
        m = s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        if(m==0)
            m=0;
        return m;
};

function clear(){
    localStorage.clear();
    $("input.c, input.b, input.s").val("0");
    calc();
    do_sum_total();
}

function calc(tr){
    var b = $("input.b",tr).val();
    var c = $("input.c",tr).val();
    var s = $("input.s",tr).val();
    nb = (b * c).formatMoney(2,'.',',');
    ns = (s * c).formatMoney(2,'.',',');
    $(".tot_buy",tr).text( nb );
    $(".tot_sell",tr).text( ns );
}

function do_sum_total() {
    var targets = ["tot_buy", "tot_sell"];
    for(var i = 0;i<targets.length;i++){
        st = ".sum_"+targets[i];
        t = "."+targets[i];
        tot = 0;
        $(t).each(function(i,dom){
            tot+=Number($(this).text().replace(/[^0-9\.]/g,""));
        });
        tot = tot.formatMoney(2,'.',',');
        $(st).text(tot);
    }
}

function do_hidden(a) {
    var cookie = localStorage.getItem('hidden');
    if (!cookie) return;
    var SavedID = cookie.split('|');
    for ( var u=0, ul=SavedID.length; u < ul; u++ ){
        SavedID[u] = SavedID[u].split(',');
    }
    for (var Scolumn=0, n = SavedID.length; Scolumn < n; Scolumn++) {
        var id = "tr#"+SavedID[Scolumn];
        $(id).addClass("hide");
    }
    var lts =$("#list_to_show");
    lts.html("");
    $( "tr.hide" ).each(function(index, domEle){
        html = "<li><a class='re_add_me' href='#' data-id='"+$(this).attr('id')+"'>"+$(".name",domEle).text()+"</a></li>";
        lts.append(html)
    });
}

function restoreOrder() {
    var cookie = localStorage.getItem('sort_prices');
    if (!cookie) return;
    var SavedID = cookie.split('|');
    for ( var u=0, ul=SavedID.length; u < ul; u++ ){ SavedID[u] = SavedID[u].split(',');}
    for (var Scolumn=0, n = SavedID.length; Scolumn < n; Scolumn++) {
        for (var Sitem=0, m = SavedID[Scolumn].length; Sitem < m; Sitem++) {
            var sp = $("#sort_prices");
            sp.eq(Scolumn).append(sp.children("#" + SavedID[Scolumn][Sitem]));
        }
    }
}

$(function() {
    $( "#sort_prices" ).sortable({
        handle: "span.fa-arrows",
        cursor: "move",
        axis: "y",
        placeholder: "marker",
        opacity: 0.3,
        scrollSpeed: 50,
        containment: '#sort_prices',
        forcePlaceholderSize: true,
        scroll: true,
        scrollSensitivity: 100,
        revert: 200,
        helper: 'clone',
        tolerance: 'pointer',
        update: function(event, ui) {
            var cooked = [];
            $( "#sort_prices" ).each(function(index, domEle){ cooked[index]=$(domEle).sortable('toArray');});
            localStorage.setItem('sort_prices','x'+cooked.join('|'));
        }
    });
});

$(document).ready(function(){

    for(var i in items){

        var c = items[i].category.replace(/[^a-zA-Z0-9]/,'');

        var h = "<tr class='item' id='" + items[i].id + "'>"+
            "<td><span class='fa fa-minus'></span></td>"+
            "<td><span class='fa fa-arrows'></span></td>"+
            "<td class='name " + c + "'>" + items[i].name + "</td>"+
            "<td><input type='number' min='0' step='0.01' name='item_buy[" + items[i].id + "]' value='0' class='b'></td>"+
            "<td><input type='number' min='0' step='0.01' name='item_sell[" + items[i].id + "]' value='0' class='s'></td>"+
            "<td><input type='number' min='0' step='1' name='item_count[" + items[i].id + "]' value='0' class='c'></td>"+
            "<td class='tot_buy'>0</td>"+
            "<td class='tot_sell'>0</td>"+
            "</tr>";
        $("#sort_prices").append(h);
    }

    restoreOrder();
    do_hidden();

    for(var i=0;i<localStorage.length;i++){
        k = localStorage.key(i);
        v = localStorage.getItem(k);
        t = "input[name='"+k+"']";
        $(t).val(v);
        tr = $(t).parent().parent();
        calc(tr);
        do_sum_total();
    }

    $("a.re_add").on('click',function(){
        $("div#popup").toggleClass("display");
    });

    $("div#popup_background").on('click',function(){
        $("div#popup").toggleClass("display");
    });

    $("a.clear").on('click',function(){
        if(confirm("Are you sure you want wipe memory and clear everything?")){
            clear();
        }
    });

    $("#list_to_show").on("click","a.re_add_me",function(){
        id = "tr#"+$(this).attr("data-id");
        $(id).removeClass("hide");
        var cooked = [];
        $( "tr.hide" ).each(function(index, domEle){
            cooked[index]=$(domEle).attr('id');
        });
        localStorage.setItem("hidden",cooked.join('|'));
        $(this).parent().remove();
    });

    $("span.fa-minus").on('click',function(){
        $(this).parent().parent().addClass("hide");
        var cooked = [];
        $( "tr.hide" ).each(function(index, domEle){
            cooked[index]=$(domEle).attr('id');
        });
        localStorage.setItem('hidden', cooked.join('|'));
        do_hidden();
    });

    $("input.b, input.c, input.s").on('change',function(){
        var tr = $(this).parent().parent();
        calc(tr);
        if($(this).val()==0){
            localStorage.removeItem($(this).attr('name'));
        }else{
            localStorage.setItem($(this).attr('name'), $(this).val());
        }
        do_sum_total();
    })


});