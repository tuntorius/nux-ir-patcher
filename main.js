//md5 of firmwares (first 1024 bytes only)
var plugv1 = "109d398a4cdf3ce4fb1f7b2763f9949d";
var plugv2 = "fcab637c2408bfdb338768c042b1ac44";
var airv2 = "d3f31ab56a3120f4a42ad6d27d3b0263";

var selectedFW = null;

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

//ir section parameters
var irStartAddrPlugv1 = 0x67f92;
var irStartAddrPlugv2 = 0xab398;
var irStartAddrAirv2 = 0xab398;

//html elements
var fileFields = [];
var labels = [];
var clearButtons = [];

var sampleBuffers = [];
var FWBuffer;

var fileRestoreFix = [];

const sampleLength = 8192;
const pageDataSize = 512;
const pageHeaderSize = 28;
const pageFullSize = pageDataSize + pageHeaderSize;
const IRPagesCount = sampleLength / pageDataSize;
const IRFullSize = IRPagesCount * pageFullSize;

function readFile(file, onReady, index)
{
	var reader = new FileReader();
	
	// Closure to capture the file information.
	reader.onload = (function(theFile) {
		return function(e) {
			onReady(e.target.result, index);
		};
	})(file);

  // Read in the image file as a data URL.
  reader.readAsArrayBuffer(file);
}

function handleFirmwareSelect(evt) {
	var files = evt.target.files; // FileList object
	if (files.length==1)
		readFile(files[0], onFirmwareLoaded);
}

function onFirmwareLoaded(dataArrayBuffer)
{
	var enc = new TextDecoder("utf-8");
	var data = new Uint8Array(dataArrayBuffer).subarray(0,1024);
	FWBuffer = dataArrayBuffer;
	
	var first1k = enc.decode(data);
	var md5 = MD5(first1k);
	
	selectedFW = md5;
	
	var fwinfo = document.getElementById("fwinfo");
	switch (md5)
	{
		case plugv1:
		fwinfo.innerHTML = "Mighty Plug v1.5.2";
		break;
		case plugv2:
		fwinfo.innerHTML = "Mighty Plug v2.1";
		break;
		case airv2:
		fwinfo.innerHTML = "Mighty Air v2.1";
		break;
		default:
		fwinfo.innerHTML = "Error: Invalid Firmware File";
		selectedFW = null;
		break;
	}
}

function handleWaveSelect(e) {
	var index = e.currentTarget.attributes['index'].value;
	var files = e.target.files; // FileList object
	if (files.length==1) {
		readFile(files[0], onWaveLoaded, index);
		fileRestoreFix[index] = e.target.files;
	}
	else if (files.length==0) {
		//the user cancelled
		e.target.files = fileRestoreFix[index];
	}
}

function onWaveLoaded(dataArrayBuffer, index)
{
	var enc = new TextDecoder("utf-8");
	
	var data = new Uint8Array(dataArrayBuffer);
	var dataView = new DataView(dataArrayBuffer);
	var header = enc.decode(data.subarray(0,4));
	var size = dataView.getUint32(4, true);
	var subheader = enc.decode(data.subarray(8,12));
	console.log("Header: " + header + " size: " + size + " subheader: " + subheader);
	
	if (header!="RIFF" || size !=dataArrayBuffer.byteLength-8 || subheader != "WAVE")
	{
		clearSlot(index);
		alert("Not a valid wave file");
		return;
	}
	
	var pos = 12;
	var loaded = false;
	//decode chunks
	do {
		var chunk = enc.decode(data.subarray(pos,pos+4));
		var chunkSize = dataView.getUint32(pos+4, true);
		switch (chunk)
		{
			case "fmt ":
			var format = dataView.getUint16(pos+8, true);
			var channels = dataView.getUint16(pos+10, true);
			var sampleRate = dataView.getUint32(pos+12, true);
			var byteRate = dataView.getUint32(pos+16, true);
			var blockAlign = dataView.getUint16(pos+20, true);
			var bitsPerSample = dataView.getUint16(pos+22, true);
			console.log("Format: " + format);
			console.log("Channels: " + channels);
			console.log("Sample Rate: " + sampleRate);
			console.log("Byte Rate: " + byteRate);
			console.log("Block Align: " + blockAlign);
			console.log("Bits per sample: " + bitsPerSample);
			if (format!=3 || bitsPerSample!=32)
			{
				clearSlot(index);
				alert("You must use 32-bit floating point wave files!");
				return;
			}
			break;
			case "fact":
			break;
			case "PEAK":
			break;
			case "data":
			console.log("Data length: " + chunkSize);
			sampleBuffers[index] = new ArrayBuffer(sampleLength);
			
			var copyLength = Math.min(chunkSize, 8192);
			var view = new Uint8Array(sampleBuffers[index]);
			view.set(data.subarray(pos+8,pos+8+copyLength));
			
			/*
			if (chunkSize<sampleLength)
			{
				alert("The file is shorter than " + sampleLength + " samples. Will be appended with silence.");
			}
			else if (chunkSize>sampleLength)
				alert("The file is longer that" + sampleLength + " samples. The excess will be trimmed.");
			*/
			//reverse it because that's what mighty amp expects
			//the data is float but it
			var floatView = new Float32Array(sampleBuffers[index]);
			var last = floatView.length-1;
			for (var i=0;i<Math.floor(floatView.length/2);i++)
			{
				var tmp = floatView[last-i];
				floatView[last-i]=floatView[i];
				floatView[i] = tmp;
			}
			
			loaded = true;
			break;
		}
		pos+=chunkSize+8;
	}while(!loaded);
	//format chunk
	
	labels[index].className="loaded";
}

function clearSlot(index)
{
	fileFields[index].value = '';
	labels[index].className="";
	sampleBuffers[index] = null;
}

function handleClear(e)
{
	var index = e.currentTarget.attributes['index'].value;
	clearSlot(index);
}

function processFirmware()
{
	//first make sure that it is loaded
	if (!selectedFW || FWBuffer==null)
	{
		alert("Please, load a firmware first!");
		return;
	}
	
	//check if IRs specified
	var hasIRs = false;
	for (var i=0;i<sampleBuffers.length;i++)
	{
		if (sampleBuffers[i]!=null)
			hasIRs = true;
	}
	
	if (!hasIRs)
	{
		alert("Please, load one or more IR wave files!");
		return;
	}
	
	var filename = "";
	var section = 0;
	switch (selectedFW)
	{
		case plugv1:
		section = irStartAddrPlugv1;
		filename="MightyPlug_v1_5_2_irmod.bin";
		break;
		case plugv2:
		section = irStartAddrPlugv2;
		filename="MightyPlug_v2_1_irmod.bin";
		break;
		case airv2:
		section = irStartAddrAirv2;
		filename="MightyAir_v2_1_irmod.bin";
		break;
		default:
		alert("Invalid or unsupported firmware!");
		return;
	}
	
	var fwView = new Uint8Array(FWBuffer);
	for (var i=0;i<sampleBuffers.length;i++)
	{
		if (sampleBuffers[i]==null)
			continue;
		
		//find start section
		var startSection = section + IRFullSize * i;
		var wavView = new Uint8Array(sampleBuffers[i]);
		//now copy the ir into the fw
		for (var p=0;p<IRPagesCount;p++)
		{
			var addr = startSection + p * pageFullSize + pageHeaderSize;
			var sub = wavView.subarray(p*pageDataSize, (p+1)*pageDataSize);
			fwView.set(sub, addr);
		}
	}
	var blob = new Blob([FWBuffer], {type: "application/octet-stream"});
	saveAs(blob, filename);
}

function setupPage()
{
	document.getElementById('firmware').addEventListener('change', handleFirmwareSelect, false);

	document.getElementById('process').addEventListener('click', processFirmware, false);
	fileFields = document.getElementsByClassName("wave");
	clearButtons = document.querySelectorAll("td input[type='button']");
	labels = document.querySelectorAll(".label");
	
	for (var i=0;i<fileFields.length;i++)
	{
		fileFields[i].setAttribute("index", i);
		fileFields[i].addEventListener('change', handleWaveSelect, false);
		clearButtons[i].setAttribute("index", i);
		clearButtons[i].addEventListener('click', handleClear, false);
		
		sampleBuffers[i] = null;
	}
}

setupPage();