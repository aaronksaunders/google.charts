// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var webView = Ti.UI.createWebView({
	url:'html/chart.html',
	width:'100%',
	height:'80%'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});
win1.add(webView);
var slider = Ti.UI.createSlider({
	min:0, 
	max:11, 
	id:'work',
	bottom: 20
});
slider.addEventListener('change', function(e){
	var newValue = e.value;
	webView.evalJS('adjustWorkValue('+  newValue + ')');
});
win1.add(slider);

//  add tabs
tabGroup.addTab(tab1);  



// open tab group
tabGroup.open();
