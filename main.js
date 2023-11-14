//md5 of firmwares (first 1024 bytes only)

//firmware definitions
var firmwares = [
	{
		name:"Mighty Plug v1.5.2b",
		type:"NUX MIGHTY PLUG",
		date:"20200715",
		filename:"MightyPlug_v1_5_2_irmod.bin",
		irOffset: 0x67f92
	},
	{
		name:"Mighty Plug v2.1",
		type:"NUX MIGHTY PLUG",
		date:"20210830",
		filename:"MightyPlug_v2_1_irmod.bin",
		irOffset: 0xab398
	},
	{
		name:"Mighty Plug v2.2",
		type:"NUX MIGHTY PLUG",
		date:"20211008",
		filename:"MightyPlug_v2_2_irmod.bin",
		irOffset: 0xab398
	},
	{
		name:"Mighty Plug v2.3",
		type:"NUX MIGHTY PLUG",
		date:"20211129",
		filename:"MightyPlug_v2_3_irmod.bin",
		irOffset: 0xab398
	},
	{
		name:"Mighty Air v1.4.1",
		type:"NUX MIGHTY AIR",
		date:"20200708",
		filename:"MightyAir_v1_4_1_irmod.bin",
		irOffset: 0x67dcc
	},
	{
		name:"Mighty Air v2.1",
		type:"NUX MIGHTY AIR",
		date:"20210903",
		filename:"MightyAir_v2_1_irmod.bin",
		irOffset: 0xab398
	},
	{
		name:"Mighty Air v2.2",
		type:"NUX MIGHTY AIR",
		date:"20211008",
		filename:"MightyAir_v2_2_irmod.bin",
		irOffset: 0xab398
	},
	{
		name:"Mighty Air v2.3",
		type:"NUX MIGHTY AIR",
		date:"20220428",
		filename:"MightyAir_v2_3_irmod.bin",
		irOffset: 0xab398
	},
	{
		name:"Mighty Air v2.3.1",
		type:"NUX MIGHTY AIR",
		date:"20221201",
		filename:"MightyAir_v2.3.1_irmod.bin",
		irOffset: 0xab398
	}
];

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
	var data = new Uint8Array(dataArrayBuffer);
	var dataView = new DataView(dataArrayBuffer);
	FWBuffer = dataArrayBuffer;
	
	var header = enc.decode(data.subarray(0, 7));
	var type = enc.decode(data.subarray(20, 35));
	var date = enc.decode(data.subarray(532, 540));
	var fwinfo = document.getElementById("fwinfo");
	
	selectedFW = null;
	
	if (header != "NUX DFU") {
		fwinfo.innerHTML = "Error: Invalid Firmware File";
		selectedFW = null;
		return;
	}
	//find the proper definition
	for (var i=0;i<firmwares.length;i++)
	{
		if (type.includes(firmwares[i].type) && date == firmwares[i].date) {
			selectedFW = firmwares[i];
			break;
		}
	}
	
	if (selectedFW == null) {
		fwinfo.innerHTML = "Error: Unsupported Firmware Version";
		selectedFW = null;
		return;
	}
	
	for (var i=0;i<labels.length;i++)
		clearSlot(i);
	
	fwinfo.innerHTML = selectedFW.name;
}

function handleWaveSelect(e) {
	var index = e.currentTarget.attributes['index'].value;
	var files = e.target.files;
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
	
	section = selectedFW.irOffset;
	filename = selectedFW.filename;
	
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